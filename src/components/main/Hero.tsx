'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

declare global {
  interface Window {
    __heroRevealed?: boolean;
  }
}

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bbox = textRef.current?.getBBox();
      const originX = bbox ? bbox.x + bbox.width / 2 : 0;
      const originY = bbox ? bbox.y + bbox.height / 2 : 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const revealTime = tl.labels.revealed ?? 0;
            const revealFraction = revealTime / tl.duration();
            const isRevealed = self.progress >= revealFraction;

            if (isRevealed && !window.__heroRevealed) {
              window.__heroRevealed = true;
              window.dispatchEvent(new Event("hero:revealed"));
            } else if (!isRevealed && window.__heroRevealed) {
              window.__heroRevealed = false;
              window.dispatchEvent(new Event("hero:hidden"));
            }
          },
        },
      });

      tl.to(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.15,
        ease: "power1.out",
      })
        .to(
          textRef.current,
          {
            scale: 65,
            svgOrigin: `${originX} ${originY}`,
            transformOrigin: "50% 50%",
            ease: "power2.inOut",
          },
          "<"
        )
        .addLabel("revealed")
        .to(
          [content1Ref.current, content2Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            stagger: 0.08,
          },
          ">"
        );
    }, containerRef);

    video1Ref.current?.play().catch(() => {});
    video2Ref.current?.play().catch(() => {});

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="kothari-hero">
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@900&family=Montserrat&display=swap"
        rel="stylesheet"
      />

      {/* Video 1 (left on desktop, top on mobile) */}
      <div className="kothari-video-panel kothari-video-1">
        <video ref={video1Ref} autoPlay loop muted playsInline className="kothari-video">
          <source src="/hero9.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Video 2 (right on desktop, bottom on mobile) */}
      <div className="kothari-video-panel kothari-video-2">
        <video ref={video2Ref} autoPlay loop muted playsInline className="kothari-video">
          <source src="/hero10.mp4" type="video/mp4" />
        </video>
      </div>

      {/* SVG Mask Overlay */}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="kothari-mask-svg"
      >
        <defs>
          <mask id="kothari-mask" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" fill="white" />
            <text
              ref={textRef}
              className="kothari-mask-text"
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="black"
              style={{
                fontWeight: "900",
                fontFamily: "'Cinzel', 'Montserrat', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              KOTHARI
            </text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="#005EA8" mask="url(#kothari-mask)" />
      </svg>

      {/* Content: Pipes Division */}
      <div ref={content1Ref} className="kothari-content kothari-content-1">
        <h2 className="kothari-heading">Pipes Division</h2>
        <Link href={"/pipe-division"} style={{
            padding: "0.9rem 2.2rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "blue",
            background: "#fff",
            border: "2px solid #fff",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "background 0.3s ease, color 0.3s ease",
          }}>
          Explore
        </Link>
      </div>

      {/* Content: Agriculture Division */}
      <div ref={content2Ref} className="kothari-content kothari-content-2">
        <h2 className="kothari-heading">Agriculture Division</h2>
        <Link href={"/agriculture-division"} style={{
            padding: "0.9rem 2.2rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "green",
            background: "#fff",
            border: "2px solid #fff",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "background 0.3s ease, color 0.3s ease",
          }}>
          Explore
        </Link>
      </div>

      {/* Scroll down indicator */}
      <div ref={scrollIndicatorRef} className="kothari-scroll-indicator">
        <span>Scroll Down</span>
        <div className="kothari-scroll-line" />
      </div>

      <style jsx>{`
        .kothari-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #005ea8;
          overflow: hidden;
        }

        /* Video panels — side by side on desktop */
        .kothari-video-panel {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        .kothari-video-1 {
          left: 0;
        }
        .kothari-video-2 {
          left: 50%;
        }
        .kothari-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .kothari-mask-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .kothari-mask-text {
          font-size: 16vw;
        }

        /* Content panels — side by side on desktop */
        .kothari-content {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          text-align: center;
          padding: 0 2rem;
        }
        .kothari-content-1 {
          left: 0;
        }
        .kothari-content-2 {
          left: 50%;
        }

        .kothari-heading {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin: 0;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
          font-size: 2.2rem;
        }

     

        .kothari-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          pointer-events: none;
        }
        .kothari-scroll-indicator span {
          font-family: "Montserrat", sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
        }
        .kothari-scroll-line {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.6);
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @keyframes scrollBounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.4;
          }
        }

        /* Tablets */
        @media (max-width: 900px) {
          .kothari-mask-text {
            font-size: 18vw;
          }
          .kothari-heading {
            font-size: 1.6rem;
          }
          .kothari-btn {
            padding: 0.75rem 1.6rem;
            font-size: 0.8rem;
          }
          .kothari-content {
            gap: 1rem;
            padding: 0 1rem;
          }
        }

        /* Mobile: stack videos and content vertically */
        @media (max-width: 640px) {
          .kothari-video-panel {
            width: 100%;
            height: 50%;
          }
          .kothari-video-1 {
            top: 0;
            left: 0;
          }
          .kothari-video-2 {
            top: 50%;
            left: 0;
          }

          .kothari-content {
            width: 100%;
            height: 50%;
            padding: 0 1.25rem;
            gap: 0.75rem;
          }
          .kothari-content-1 {
            top: 0;
            left: 0;
          }
          .kothari-content-2 {
            top: 50%;
            left: 0;
          }

          .kothari-mask-text {
            font-size: 22vw;
            letter-spacing: -0.03em;
          }
          .kothari-heading {
            font-size: 1.3rem;
            line-height: 1.3;
          }
          .kothari-btn {
            padding: 0.6rem 1.4rem;
            font-size: 0.75rem;
          }
          .kothari-scroll-indicator {
            bottom: 1rem;
          }
          .kothari-scroll-indicator span {
            font-size: 0.65rem;
          }
        }

        /* Very small phones */
        @media (max-width: 380px) {
          .kothari-heading {
            font-size: 1.1rem;
          }
          .kothari-btn {
            padding: 0.5rem 1.1rem;
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}