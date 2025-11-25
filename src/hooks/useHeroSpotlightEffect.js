// Custom hook for hero background spotlight effect
import { useRef, useEffect } from 'react';

const useHeroSpotlightEffect = (heroSectionRef, backgroundRef) => {
  const animationFrameId = useRef(null);
  const currentPosition = useRef({ x: 50, y: 50 }); // Start at center (percentage)
  const targetPosition = useRef({ x: 50, y: 50 });
  const overlayRef = useRef(null);

  useEffect(() => {
    const heroSection = heroSectionRef?.current;
    const background = backgroundRef?.current;

    if (!heroSection || !background) return;

    // Create spotlight overlay element
    const overlay = document.createElement('div');
    overlay.className = 'hero-spotlight-overlay';
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      background: radial-gradient(
        circle 400px at 50% 50%,
        rgba(15, 15, 15, 0) 0%,
        rgba(15, 15, 15, 0.3) 40%,
        rgba(15, 15, 15, 0.85) 100%
      );
      transition: opacity 0.3s ease;
    `;

    background.appendChild(overlay);
    overlayRef.current = overlay;

    // Configuration
    const SPOTLIGHT_SIZE = 400; // Radius of the spotlight in pixels
    const SMOOTHING = 0.1; // Smoothness of movement (0.01 - 0.2)

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect();

      // Calculate mouse position as percentage of hero section
      const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;

      // Update target position
      targetPosition.current = {
        x: Math.max(0, Math.min(100, mouseXPercent)),
        y: Math.max(0, Math.min(100, mouseYPercent))
      };
    };

    // Mouse leave handler - fade out spotlight
    const handleMouseLeave = () => {
      if (overlay) {
        overlay.style.opacity = '0';
      }
    };

    // Mouse enter handler - fade in spotlight
    const handleMouseEnter = () => {
      if (overlay) {
        overlay.style.opacity = '1';
      }
    };

    // Smooth animation loop
    const animate = () => {
      // Lerp current position towards target
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * SMOOTHING;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * SMOOTHING;

      // Update spotlight position
      if (overlay) {
        overlay.style.background = `
          radial-gradient(
            circle ${SPOTLIGHT_SIZE}px at ${currentPosition.current.x}% ${currentPosition.current.y}%,
            rgba(15, 15, 15, 0) 0%,
            rgba(15, 15, 15, 0.3) 40%,
            rgba(15, 15, 15, 0.85) 100%
          )
        `;
      }

      // Continue animation loop
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start listeners and animation
    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    heroSection.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      heroSection.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };
  }, [heroSectionRef, backgroundRef]);
};

export default useHeroSpotlightEffect;
