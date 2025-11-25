// Custom hook for hero image magnify/lupa effect
import { useRef, useEffect } from 'react';

const useHeroMagnifyEffect = (heroSectionRef, heroImageRef) => {
  const animationFrameId = useRef(null);
  const currentOffset = useRef({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const heroSection = heroSectionRef?.current;
    const heroImageImg = heroImageRef?.current?.querySelector('img');

    if (!heroSection || !heroImageImg) return;

    // Configuration
    const MOVEMENT_RANGE = 50; // Maximum pixels to move in each direction
    const SMOOTHING = 0.08; // Lower = smoother/slower (0.01 - 0.2)

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect();

      // Calculate mouse position relative to hero section center (0 to 1 range, centered at 0.5)
      const mouseX = (e.clientX - rect.left) / rect.width;
      const mouseY = (e.clientY - rect.top) / rect.height;

      // Convert to -1 to 1 range (center = 0)
      const normalizedX = (mouseX - 0.5) * 2;
      const normalizedY = (mouseY - 0.5) * 2;

      // Calculate target offset (image moves in same direction as mouse for magnify effect)
      targetOffset.current = {
        x: normalizedX * MOVEMENT_RANGE,
        y: normalizedY * MOVEMENT_RANGE
      };
    };

    // Mouse leave handler - reset to center
    const handleMouseLeave = () => {
      targetOffset.current = { x: 0, y: 0 };
    };

    // Smooth animation loop using lerp (linear interpolation)
    const animate = () => {
      // Lerp current position towards target
      currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * SMOOTHING;
      currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * SMOOTHING;

      // Apply transform (combine with existing translate values)
      const baseTranslateX = -333; // Original X position from CSS
      const baseTranslateY = -108; // Original Y position from CSS

      const finalX = baseTranslateX + currentOffset.current.x;
      const finalY = baseTranslateY + currentOffset.current.y;

      heroImageImg.style.transform = `translate(${finalX}px, ${finalY}px)`;

      // Continue animation loop
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start listeners and animation
    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [heroSectionRef, heroImageRef]);
};

export default useHeroMagnifyEffect;
