'use client';

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export function isRecaptchaEnabled(): boolean {
  return !!RECAPTCHA_SITE_KEY;
}

let loaderPromise: Promise<void> | null = null;

// Inject the reCAPTCHA script on demand instead of rendering it on every page.
// Keeps ~350 KB of third-party JS off the critical path until a form is used.
export function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined') {
    return Promise.resolve();
  }
  if (
    (window as unknown as { grecaptcha?: unknown }).grecaptcha ||
    loaderPromise
  ) {
    return loaderPromise || Promise.resolve();
  }
  loaderPromise = new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-kothari-recaptcha]',
    );
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => resolve());
      return;
    }
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.dataset.kothariRecaptcha = 'true';
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
    setTimeout(resolve, 8000);
  });
  return loaderPromise;
}

// Fetch an invisible reCAPTCHA v3 token. Resolves '' when the key is missing
// or the script is blocked — the API skips verification in that case.
export async function getRecaptchaToken(): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined') {
    return '';
  }
  await loadRecaptcha();
  return new Promise<string>((resolve) => {
    const fallback = setTimeout(() => resolve(''), 3000);
    const grecaptcha = (
      window as unknown as {
        grecaptcha?: {
          ready: (cb: () => void) => void;
          execute: (key: string, opts: { action: string }) => Promise<string>;
        };
      }
    ).grecaptcha;
    if (!grecaptcha) {
      clearTimeout(fallback);
      resolve('');
      return;
    }
    grecaptcha.ready(() => {
      clearTimeout(fallback);
      grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
        .then((token) => resolve(token || ''))
        .catch(() => resolve(''));
    });
  });
}
