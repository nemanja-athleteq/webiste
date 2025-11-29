// Testimonials Section - "What Parents Are Saying"

const testimonialsData = [
  {
    quote: "I know someone's watching over her, even when I can't be there.",
    name: "Maria T.",
    role: "mother of U14 player"
  },
  {
    quote: "For the first time in years, I don't lie awake worrying.",
    name: "David R.",
    role: "father of U16 player"
  },
  {
    quote: "The club reached out before I even noticed something was wrong.",
    name: "Jennifer L.",
    role: "mother of U15 player"
  },
  {
    quote: "Our relationship got better. I stopped being the anxious parent.",
    name: "Michael S.",
    role: "father of U17 player"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="parents-testimonials-section">
      {/* Glow Effect */}
      <div className="parents-testimonials-glow"></div>

      <div className="parents-testimonials-inner">
        {/* Header */}
        <div className="parents-testimonials-header">
          <span className="parents-testimonials-label">From Parents Like You</span>
          <h2 className="parents-testimonials-title">What Parents Are Saying</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="parents-testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="parents-testimonial-card">
              <div className="parents-testimonial-quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 8H6C5.44772 8 5 8.44772 5 9V13C5 13.5523 5.44772 14 6 14H8V16C8 17.1046 7.10457 18 6 18" stroke="#C7F043" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19 8H15C14.4477 8 14 8.44772 14 9V13C14 13.5523 14.4477 14 15 14H17V16C17 17.1046 16.1046 18 15 18" stroke="#C7F043" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="parents-testimonial-quote">{testimonial.quote}</p>
              <div className="parents-testimonial-author">
                <span className="parents-testimonial-line"></span>
                <span className="parents-testimonial-name">{testimonial.name}</span>
                <span className="parents-testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <a href="#" className="parents-testimonials-link">
          See More Parent Stories
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#C7F043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
