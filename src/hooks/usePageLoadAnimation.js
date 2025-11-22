import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Simple page load animations for hero section
 * Respects all existing CSS properties and only animates initial entrance
 */
export const usePageLoadAnimation = () => {
  const heroSectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const highlightRef = useRef(null);
  const descriptionRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // 1. BACKGROUND - set initial transform and fade in
      if (backgroundRef.current) {
        // Set initial state: centered + zoomed
        gsap.set(backgroundRef.current, {
          opacity: 0,
          xPercent: -50, // Center horizontally
          scale: 1.05, // Initial zoom for breathing animation
          transformOrigin: 'center center',
        });
        tl.to(backgroundRef.current, {
          opacity: 0.1, // Final CSS value
          duration: 0.8,
          ease: 'power2.inOut',
        }, 0); // Start immediately
      }

      // 2. GRID - fade in with slight scale, then continuous pulse
      if (gridRef.current) {
        gsap.set(gridRef.current, {
          opacity: 0,
          scale: 0.98,
        });
        tl.to(gridRef.current, {
          opacity: 0.6, // Fade to 60%
          scale: 1,
          duration: 1,
        }, 0.1); // Start 100ms after background

        // Continuous pulse animation (starts after initial fade-in)
        gsap.to(gridRef.current, {
          opacity: 0.1, // Pulse down to 10%
          duration: 2.5, // 2.5 seconds (slower, more subtle)
          yoyo: true, // Reverse back to 0.6
          repeat: -1, // Infinite loop
          ease: 'sine.inOut', // Smooth sine wave
          delay: 1.2, // Start after initial fade-in completes
        });
      }

      // 3. NON-HIGHLIGHTED TEXT - animate "Mental Performance" and "Mental Champions"
      if (highlightRef.current) {
        const normalTextSpans = highlightRef.current.querySelectorAll('.normal-text');

        if (normalTextSpans.length > 0) {
          // Set initial state
          gsap.set(normalTextSpans, {
            opacity: 0,
          });

          // Animate fade in
          tl.to(normalTextSpans, {
            opacity: 1,
            duration: 3.0, // Very slow fade for drama
            ease: 'power2.out',
          }, 0.2);
        }
      }

      // 4. HIGHLIGHTED TEXT - character by character reveal
      if (highlightRef.current) {
        const highlights = highlightRef.current.querySelectorAll('.highlight');

        highlights.forEach((highlight) => {
          // Split text into characters
          const text = highlight.textContent;
          const chars = text.split('');

          // Clear and rebuild with spans
          highlight.innerHTML = '';
          chars.forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            highlight.appendChild(span);
          });

          const charSpans = highlight.querySelectorAll('span');

          // Animate characters
          gsap.set(charSpans, {
            opacity: 0,
            y: 30,
            rotationX: -90,
          });

          tl.to(charSpans, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.5, // Very slow dramatic reveal
            stagger: 0.12, // Much more delay between characters
            ease: 'power3.out', // Smoother easing
          }, 0.5);
        });
      }

      // 5. DESCRIPTION - fade in
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          y: 20,
        });
        tl.to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }, 0.7);
      }

      // 6. HERO IMAGE - scale and blur reveal (preserve transform position)
      if (heroImageRef.current) {
        const img = heroImageRef.current.querySelector('img');

        if (img) {
          gsap.set(heroImageRef.current, {
            opacity: 0,
            scale: 0.95,
          });

          gsap.set(img, {
            filter: 'blur(10px)',
          });

          tl.to(heroImageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
          }, 0.5);

          tl.to(img, {
            filter: 'blur(0px)',
            duration: 0.7,
          }, 0.5);
        }
      }

      // 7. BUTTONS - staggered entrance
      if (primaryBtnRef.current) {
        gsap.set(primaryBtnRef.current, {
          opacity: 0,
          y: 30,
        });
        tl.to(primaryBtnRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }, 0.9);
      }

      if (secondaryBtnRef.current) {
        gsap.set(secondaryBtnRef.current, {
          opacity: 0,
          y: 30,
        });
        tl.to(secondaryBtnRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }, 1.0); // 100ms after primary button
      }

      // ============================================
      // 8. CONTINUOUS ZOOM ANIMATIONS (After page load)
      // ============================================

      // Background zoom out (subtle breathing effect)
      // Initial scale 1.05 is set via GSAP above
      if (backgroundRef.current) {
        // Animate to normal size (zoom out from initial 1.05)
        gsap.to(backgroundRef.current, {
          scale: 1.0, // Zoom out to normal (from 1.05)
          duration: 25, // 25 seconds - very slow
          yoyo: true, // Reverse back to 1.05
          repeat: -1, // Infinite loop
          ease: 'sine.inOut', // Smooth breathing
          delay: 0.5, // Start very early
        });
      }

      // Hero image zoom in (opposite effect) - animate IMG inside container
      if (heroImageRef.current) {
        const img = heroImageRef.current.querySelector('img');
        if (img) {
          gsap.to(img, {
            scale: 1.15, // Zoom in 15%
            duration: 25, // 25 seconds - very slow
            yoyo: true, // Reverse back
            repeat: -1, // Infinite loop
            ease: 'sine.inOut', // Smooth breathing
            delay: 0.5, // Start very early
            transformOrigin: 'center center',
          });
        }
      }

      // ============================================
      // 9. MOUSE PARALLAX (Desktop only)
      // ============================================

      const isMobile = window.innerWidth < 768;

      if (!isMobile && heroSectionRef.current && backgroundRef.current) {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;

          // Normalize to -1 to 1 range
          const xPos = (clientX / innerWidth - 0.5) * 2;
          const yPos = (clientY / innerHeight - 0.5) * 2;

          // Move background opposite to cursor (subtle - max 10px)
          gsap.to(backgroundRef.current, {
            x: -xPos * 10, // Opposite direction, 10px max
            y: -yPos * 10,
            duration: 0.6,
            ease: 'power3.out',
          });
        };

        const heroSection = heroSectionRef.current;
        heroSection.addEventListener('mousemove', handleMouseMove);
      }
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return {
    heroSectionRef,
    backgroundRef,
    gridRef,
    titleRef,
    highlightRef,
    descriptionRef,
    primaryBtnRef,
    secondaryBtnRef,
    heroImageRef,
  };
};
