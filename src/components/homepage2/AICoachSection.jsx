// AI Coach Section Component - EXACT COPY from homepage2.html
const AICoachSection = () => {
  return (
    <section className="ai-coach-section">
      <div className="ai-coach-inner">
        <div className="phone-container">
          <img src="/assets/Photo - Ai Coach Phone.png" alt="AI Coach Phone" />
        </div>
        <div className="ai-coach-content">
          {/* Decorations */}
          <img src="/assets/Decoration - svg.svg" alt="" className="decoration-svg decoration-svg-top-left" />
          <img src="/assets/Decoration - svg.svg" alt="" className="decoration-svg decoration-svg-top-right" />
          <img src="/assets/Decoration - svg.svg" alt="" className="decoration-svg decoration-svg-bottom-left" />
          <img src="/assets/Decoration - svg.svg" alt="" className="decoration-svg decoration-svg-bottom-right" />

          <h2>Mental Performance Is 50% of Winning, But 90% of Clubs Have Zero Tools to Measure It</h2>
          <p>While physical training has GPS, video analysis, and wearables, mental training is still guesswork. That's 50% of performance—completely ignored.</p>
        </div>
      </div>
    </section>
  );
};

export default AICoachSection;
