import { useEffect, useRef } from 'react';
import AnimatedPhoneMockup from './AnimatedPhoneMockup';

// AI Coach Section Component with scroll-triggered animations
const AICoachSection = () => {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const contentRef = useRef(null);
  const decorationsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const phone = phoneRef.current;
    const content = contentRef.current;
    const decorations = decorationsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations when section enters viewport
            if (phone) phone.classList.add('animate-in');
            if (content) content.classList.add('animate-in');
            decorations.forEach((decoration, index) => {
              if (decoration) {
                decoration.classList.add('animate-in');
                decoration.style.transitionDelay = `${1.2 + index * 0.2}s`;
              }
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="ai-coach-section">
      <div className="ai-coach-inner">
        <div ref={phoneRef} className="phone-container">
          <AnimatedPhoneMockup />
        </div>
        <div ref={contentRef} className="ai-coach-content">
          {/* Decorations */}
          <img
            ref={(el) => (decorationsRef.current[0] = el)}
            src="/assets/Decoration - svg.svg"
            alt=""
            className="decoration-svg decoration-svg-top-left"
          />
          <img
            ref={(el) => (decorationsRef.current[1] = el)}
            src="/assets/Decoration - svg.svg"
            alt=""
            className="decoration-svg decoration-svg-top-right"
          />
          <img
            ref={(el) => (decorationsRef.current[2] = el)}
            src="/assets/Decoration - svg.svg"
            alt=""
            className="decoration-svg decoration-svg-bottom-left"
          />
          <img
            ref={(el) => (decorationsRef.current[3] = el)}
            src="/assets/Decoration - svg.svg"
            alt=""
            className="decoration-svg decoration-svg-bottom-right"
          />

          <h2>Mental Performance Is 50% of Winning, But 90% of Clubs Have Zero Tools to Measure It</h2>
          <p>While physical training has GPS, video analysis, and wearables, mental training is still guesswork. That's 50% of performance—completely ignored.</p>
        </div>
      </div>
    </section>
  );
};

export default AICoachSection;
