// Custom hook for all homepage2.js functionality - EXACT COPY converted to React
import { useEffect } from 'react';

const useHomepage2Effects = () => {
  useEffect(() => {
    // Smooth scrolling for all links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px 0px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Add fade-in effect to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      fadeInObserver.observe(section);
    });

    // Perspective cards hover effects
    const perspectiveCards = document.querySelectorAll('.perspective-card');
    perspectiveCards.forEach(card => {
      const handleMouseEnter = function() {
        this.style.transform = 'scale(1.05)';
        this.style.zIndex = '10';
      };

      const handleMouseLeave = function() {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '1';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Testimonial cards staggered animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }, { threshold: 0.2 });

    testimonialCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      testimonialObserver.observe(card);
    });

    // Button ripple effect
    const buttons = document.querySelectorAll('button');
    const handleButtonClick = function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        pointer-events: none;
        animation: ripple 0.6s ease-out;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero image
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const heroImage = document.querySelector('.hero-image');
          if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Club logos animation on scroll
    const clubLogos = document.querySelectorAll('.club-logos img, .club-logo-svg');
    const logosObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const logos = entry.target.parentElement.querySelectorAll('img, svg');
          logos.forEach((logo, i) => {
            setTimeout(() => {
              logo.style.opacity = '0.7';
              logo.style.transform = 'scale(1)';
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.5 });

    clubLogos.forEach(logo => {
      logo.style.opacity = '0';
      logo.style.transform = 'scale(0.8)';
      logo.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    const clubLogosContainer = document.querySelector('.club-logos');
    if (clubLogosContainer) {
      logosObserver.observe(clubLogosContainer);
    }

    // Slider section parallax background
    const sliderSection = document.querySelector('.slider-section');
    if (sliderSection) {
      const handleSliderScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = sliderSection.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

            if (scrollPercent > 0 && scrollPercent < 1) {
              const offset = scrollPercent * 50;
              sliderSection.style.backgroundPosition = `center ${50 + offset}%`;
            }
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', handleSliderScroll);
    }

    // Cards grid horizontal scroll snap
    const cardsGrid = document.querySelector('.cards-grid');
    if (cardsGrid && window.innerWidth <= 968) {
      cardsGrid.style.scrollSnapType = 'x mandatory';

      const cards = cardsGrid.querySelectorAll('.perspective-card');
      cards.forEach(card => {
        card.style.scrollSnapAlign = 'center';
      });
    }

    // Add hover effects to footer links
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
      const handleLinkMouseEnter = function() {
        this.style.transform = 'translateX(5px)';
        this.style.transition = 'transform 0.3s ease';
      };

      const handleLinkMouseLeave = function() {
        this.style.transform = 'translateX(0)';
      };

      link.addEventListener('mouseenter', handleLinkMouseEnter);
      link.addEventListener('mouseleave', handleLinkMouseLeave);
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          if (!img.closest('.perspective-card')) {
            img.style.transition = 'opacity 0.5s';

            if (!img.complete) {
              img.style.opacity = '0';
              img.addEventListener('load', () => {
                img.style.opacity = '1';
              });
            }
          }

          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    images.forEach(img => imageObserver.observe(img));

    // Console log
    console.log('Homepage 2 React loaded successfully! 🚀');
    console.log('Framework: React + Vite');
    console.log('Styling: Tailwind CSS + Original CSS');
    console.log('Max-width: 1512px for optimal viewing on all screens');

    // Cleanup function
    return () => {
      links.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
      fadeInObserver.disconnect();
      testimonialObserver.disconnect();
      logosObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);
};

export default useHomepage2Effects;
