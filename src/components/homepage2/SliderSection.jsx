import { useState, useEffect, useRef } from 'react';

// Slider Section Component with scroll-triggered fade transitions
const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const sectionRef = useRef(null);

  const slides = [
    {
      image: '/assets/slide-1.png',
      content: (
        <h2>Behind Every Strong Athlete Is a Team Who Sees What They Don't Say</h2>
      )
    },
    {
      image: '/assets/slide-2.png',
      content: (
        <div className="slide-content-wrapper">
          <div className="slide-heading">
            <p>"I'm fine."</p>
            <p>&nbsp;</p>
            <p>That's what they say. But stress doesn't always speak loudly.</p>
          </div>
          <p className="slide-highlight">Daily check-ins reveal what words hide.</p>
          <div className="slide-metrics">
            <div className="metric-badge">Stress: 7/10 ↑</div>
            <div className="metric-badge">Sleep: 5 hours ↓</div>
            <div className="metric-badge">Confidence: 4/10 ↓</div>
          </div>
        </div>
      )
    },
    {
      image: '/assets/slide-3.png',
      content: (
        <div className="slide-content-wrapper">
          <div className="slide-heading">
            <p>AI doesn't sleep. It sees patterns humans miss.</p>
          </div>
          <div className="slide-highlight-list">
            <p>3 days of declining readiness.</p>
            <p>Stress increasing.</p>
            <p>Performance dropping</p>
          </div>
          <div className="metric-badge">Early Warning: Risk detected</div>
        </div>
      )
    },
    {
      image: '/assets/slide-4.png',
      content: (
        <div className="slide-content-wrapper">
          <div className="slide-heading">
            <p>I see you're struggling.</p>
            <p>Let's talk.</p>
          </div>
          <p className="slide-highlight-paragraph">With data, coaches act early, not after it's too late. A conversation today prevents a crisis tomorrow.</p>
          <div className="slide-metrics">
            <div className="metric-badge">Training adjusted.</div>
            <div className="metric-badge">Support provided</div>
            <div className="metric-badge">Trust built</div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (sectionHeight + windowHeight)
      ));

      // Determine which slide should be shown based on scroll progress
      const slideIndex = Math.min(
        slides.length - 1,
        Math.floor(scrollProgress * slides.length)
      );

      // If slide changed, fade out, change slide, then fade in
      if (slideIndex !== currentSlide) {
        setOpacity(0);
        setTimeout(() => {
          setCurrentSlide(slideIndex);
          setOpacity(1);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSlide, slides.length]);

  return (
    <section className="slider-section" ref={sectionRef}>
      <div className="slider-sticky-wrapper">
        <h1 className="ecosystem-title">An Entire Ecosystem</h1>

        <div
          className="slider-background"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            opacity: opacity,
            transition: 'opacity 400ms ease-in-out'
          }}
        />

        <div className="slider-overlay" />

        <div className="slider-inner">
          <div
            style={{
              opacity: opacity,
              transition: 'opacity 400ms ease-in-out'
            }}
          >
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
