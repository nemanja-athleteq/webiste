// CTA Section Component - EXACT COPY from homepage2.html
const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2>Join 2000+ Athletes, 50+ Clubs, 100+ Experts in the AthleteQ Ecosystem</h2>
        <p className="subtitle">Don't let your competition get ahead. Start measuring and improving mental performance today.</p>

        <button className="btn-primary-large">Request a Demo</button>
        <p className="note">For clubs and organizations</p>

        <div className="trusted-section">
          <h3>Trusted by Leading Clubs & Elite Athletes</h3>
          <div className="club-logos">
            <img src="/assets/Club Logo - Didsbury Northern HC.png" alt="Didsbury Northern HC" />
            <img src="/assets/Club Logo - Brooklands HC.png" alt="Brooklands HC" />
            <img src="/assets/Club Logo - Milton Keynes HC.png" alt="Milton Keynes HC" />
            <svg viewBox="0 0 100 100" className="club-logo-svg">
              <image href="/assets/Logo - Soutgate HC hover.svg" width="100" height="100"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
