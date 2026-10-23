'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Script from 'next/script';
import { X, Send, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import {
  RECAPTCHA_SITE_KEY,
  getRecaptchaToken,
} from '@/lib/recaptcha-client';
import {
  IRRIGATION_DIVISION,
  PIPE_DIVISION,
  type DivisionEmails,
} from '@/lib/dealer';

interface DealerApplyButtonProps {
  applyLink?: string;
}

interface DealerApplyModalProps {
  open: boolean;
  onClose: () => void;
  /** Division sales inboxes, shown on the dialog's left card. */
  emails: DivisionEmails;
}

export const DealerApplyButton: React.FC<DealerApplyButtonProps & { emails: DivisionEmails }> = ({ applyLink, emails }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 bg-[#1575B3] hover:bg-[#0E588A] text-white text-xs font-mono font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-300"
      >
        Apply Here
        <ArrowRight className="w-4 h-4" />
      </button>

      <DealerApplyModal open={open} onClose={() => setOpen(false)} emails={emails} />
    </>
  );
};

// Exported so other surfaces (e.g. the first "How it works" step) can open the
// same application dialog without duplicating the form.
export const DealerApplyModal: React.FC<DealerApplyModalProps> = ({ open, onClose, emails }) => {
  const [form, setForm] = useState({
    proprietorName: '',
    mobile: '',
    email: '',
    pincode: '',
    firmName: '',
    gstNumber: '',
    // Defaults to Irrigation so the dialog opens with a valid routing target.
    divisionInterest: IRRIGATION_DIVISION,
    heardAbout: '',
    description: '',
  });
  const [docs, setDocs] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const docRef = useRef<HTMLInputElement>(null);

  const MAX_DOCS = 5;
  const MAX_DOC_BYTES = 5 * 1024 * 1024;
  const ALLOWED_DOC_EXT = /\.(pdf|doc|docx|jpe?g)$/i;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDocs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    // Reset the input so the same file can be picked again after removing it.
    e.target.value = '';
    if (!picked.length) return;

    const skipped: string[] = [];
    const next = [...docs];
    for (const file of picked) {
      if (file.size > MAX_DOC_BYTES) {
        skipped.push(`${file.name} (over 5MB)`);
        continue;
      }
      if (!ALLOWED_DOC_EXT.test(file.name)) {
        skipped.push(`${file.name} (unsupported type)`);
        continue;
      }
      if (next.some((f) => f.name === file.name && f.size === file.size)) continue;
      if (next.length >= MAX_DOCS) {
        skipped.push('extra files (limit 5)');
        break;
      }
      next.push(file);
    }
    setDocs(next);
    if (skipped.length) alert(`Some files were not added: ${skipped.join(', ')}`);
  };

  const removeDoc = (index: number) => {
    setDocs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setError('');
    setSending(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const payload = new FormData();
      payload.append('proprietorName', form.proprietorName);
      payload.append('mobile', form.mobile);
      payload.append('email', form.email);
      payload.append('pincode', form.pincode);
      payload.append('firmName', form.firmName);
      payload.append('gstNumber', form.gstNumber);
      payload.append('divisionInterest', form.divisionInterest);
      payload.append('heardAbout', form.heardAbout);
      payload.append('description', form.description);
      payload.append('recaptchaToken', recaptchaToken);
      docs.forEach((file) => payload.append('document', file));

      const res = await fetch('/api/dealer', { method: 'POST', body: payload });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Could not send your application.');
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
        handleClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your application.');
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setDocs([]);
    if (docRef.current) docRef.current.value = '';
    setForm({
      proprietorName: '',
      mobile: '',
      email: '',
      pincode: '',
      firmName: '',
      gstNumber: '',
      divisionInterest: IRRIGATION_DIVISION,
      heardAbout: '',
      description: '',
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    setDocs([]);
    if (docRef.current) docRef.current.value = '';
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition';

  const labelClass = 'block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5';

  const fieldWrap = 'space-y-1';

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Dark Backdrop */}
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
              onClick={onClose}
            />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
            {/* Modal Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column */}
            <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-white/70 block mb-2">
                  Kothari Group
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                  Partner with us as a dealer.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Join our growing network of dealers and offer our customers advanced irrigation,
                  plumbing and agriculture solutions across India.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/15">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Phone</span>
                    <span className="text-sm font-medium text-white">+91 1800 120 4343</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">
                      {form.divisionInterest === PIPE_DIVISION ? 'Pipe Division' : 'Irrigation Division'}
                    </span>
                    {/* Shows the inbox the application will actually be sent to. */}
                    <span className="text-sm font-medium text-white">
                      {form.divisionInterest === PIPE_DIVISION ? emails.pipe : emails.irrigation}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                    <span className="text-sm text-white/90">Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
              {submitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-[#EAF8EF] text-[#1E8E3E] flex items-center justify-center mb-4 border border-[#1E8E3E]/20">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold text-[#111111] mb-2">Application Submitted</h4>
                  <p className="text-sm text-[#5F6B7A] max-w-md">
                    Thank you for showing interest in partnering with Kothari Group. Our team will
                    review your application and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#111111] mb-1">Dealer Application</h4>
                    <p className="text-xs text-[#5F6B7A] mb-4">
                      Fill in your business details below to start the partnership process.
                    </p>
                  </div>

                  <div className={fieldWrap}>
                    <label className={labelClass}>Proprietor Name *</label>
                    <input
                      type="text"
                      name="proprietorName"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={form.proprietorName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <label className={labelClass}>Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="+91 98765 43210"
                        value={form.mobile}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className={fieldWrap}>
                      <label className={labelClass}>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <label className={labelClass}>Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        pattern="[0-9]{6}"
                        maxLength={6}
                        placeholder="e.g. 413001"
                        value={form.pincode}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className={fieldWrap}>
                      <label className={labelClass}>Firm Name</label>
                      <input
                        type="text"
                        name="firmName"
                        placeholder="e.g. M/s Sharma Traders"
                        value={form.firmName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={fieldWrap}>
                      <label className={labelClass}>GST Number</label>
                      <input
                        type="text"
                        name="gstNumber"
                        placeholder="e.g. 27ABCDE1234F1Z5"
                        value={form.gstNumber}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className={fieldWrap}>
                      <label className={labelClass}>Division Interest</label>
                      <select
                        name="divisionInterest"
                        value={form.divisionInterest}
                        onChange={handleChange}
                        className={inputClass}
                      >
                      <option value="">Select Division</option>
                      <option value={IRRIGATION_DIVISION}>{IRRIGATION_DIVISION}</option>
                      <option value={PIPE_DIVISION}>{PIPE_DIVISION}</option>
                      </select>
                    </div>
                  </div>

                  <div className={fieldWrap}>
                    <label className={labelClass}>How did you hear about Kothari?</label>
                    <select
                      name="heardAbout"
                      value={form.heardAbout}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select an option</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Print Ads">Print Ads</option>
                      <option value="Trade Show / Exhibition">Trade Show / Exhibition</option>
                      <option value="Existing Dealer">Existing Dealer</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className={fieldWrap}>
                    <label className={labelClass}>Description</label>
                    <textarea
                      name="description"
                      rows={3}
                      placeholder="Tell us briefly about your business and area you serve"
                      value={form.description}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className={fieldWrap}>
                    <label className={labelClass}>Attach Documents (PDF, DOC, JPG)</label>
                    <input
                      ref={docRef}
                      type="file"
                      name="document"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg"
                      onChange={handleDocs}
                      className="w-full text-sm text-[#5F6B7A] file:mr-4 file:px-4 file:py-2.5 file:text-sm file:bg-[#F5F6F8] file:border file:border-[#DCEAF5] file:text-[#111111] file:cursor-pointer hover:file:bg-[#EDF3F9] file:transition"
                    />
                    {docs.length > 0 && (
                      <ul className="mt-2 space-y-1">
                        {docs.map((file, i) => (
                          <li
                            key={`${file.name}-${file.size}-${i}`}
                            className="flex items-center justify-between gap-2 text-xs text-[#5F6B7A] bg-[#F5F6F8] border border-[#DCEAF5] px-2.5 py-1.5"
                          >
                            <span className="min-w-0 truncate">
                              {file.name}{' '}
                              <span className="text-[#5F6B7A]/60">
                                ({(file.size / 1024 / 1024).toFixed(1)} MB)
                              </span>
                            </span>
                            <button
                              type="button"
                              onClick={() => removeDoc(i)}
                              aria-label={`Remove ${file.name}`}
                              className="shrink-0 text-[#5F6B7A] hover:text-red-600 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="block mt-1 text-[11px] text-[#5F6B7A]/70">
                      Up to {MAX_DOCS} files, max 5MB each.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
                  >
                    {sending ? 'Submitting…' : 'Submit Application'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {error && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">
                      {error}
                    </p>
                  )}
                  {RECAPTCHA_SITE_KEY && (
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Protected by reCAPTCHA — the Google{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-500"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-500"
                      >
                        Terms of Service
                      </a>{' '}
                      apply.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};