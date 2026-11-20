import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import type { WpBlogPost } from '@/lib/wp-posts';

// Author card shown below the article body — Expert Voices posts only.
// Chrome follows the site's blue theme (sharp corners, #DCEAF5 borders,
// #1575B3 accents) used across the division/product sections.
export const ExpertAuthorCard: React.FC<{ post: WpBlogPost }> = ({ post }) => {
  const socials = [
    { name: 'LinkedIn', url: post.authorLinkedin, Icon: Linkedin },
    { name: 'Facebook', url: post.authorFacebook, Icon: Facebook },
    { name: 'Instagram', url: post.authorInstagram, Icon: Instagram },
    { name: 'X', url: post.authorX, Icon: Twitter },
  ].filter((social) => Boolean(social.url));

  const initials = post.author
    .split(/\s+/)
    .filter(Boolean)
    .map((word: string) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <section
      aria-labelledby="expert-author-heading"
      className="mt-12 bg-white border border-[#DCEAF5] shadow-[0_10px_40px_-20px_rgba(21,117,179,0.35)]"
    >
      <div className="h-1 w-full bg-[#1575B3]" />

      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
        {/* Avatar + tag */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(21,117,179,0.18),transparent_70%)] blur-md scale-110" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 border-2 border-[#1575B3] bg-white">
              {post.authorAvatar ? (
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="w-full h-full rounded-full bg-[#1575B3] text-white flex items-center justify-center text-2xl font-semibold">
                  {initials}
                </span>
              )}
            </div>
            <span className="absolute -bottom-1 -right-0 w-8 h-8 bg-white border border-[#DCEAF5] shadow-sm flex items-center justify-center text-[#1575B3] rounded-full">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.32l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
              </svg>
            </span>
          </div>

          {post.authorTag && (
            <span className="inline-block bg-[#F0F7FC] border border-[#DCEAF5] px-4 py-1.5 text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#1575B3] text-center">
              {post.authorTag}
            </span>
          )}
        </div>

        {/* Name, socials, description */}
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
            <h2
              id="expert-author-heading"
              className="text-2xl sm:text-[28px] font-semibold text-slate-900 leading-tight"
            >
              {post.author}
            </h2>
            {socials.length > 0 && (
              <div className="flex items-center gap-2">
                {socials.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${post.author} on ${name}`}
                    className="w-8 h-8 flex items-center justify-center bg-[#0E588A] text-white hover:bg-[#1575B3] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {post.authorDescription && (
            <p className="mt-4 text-sm sm:text-[16px] text-slate-600 leading-relaxed">
              {post.authorDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExpertAuthorCard;
