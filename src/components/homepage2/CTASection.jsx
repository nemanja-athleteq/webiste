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
            <img src="http://localhost:3845/assets/5f3212dfbd4b8c837f9b58fc925f32c5e26a2ef8.png" alt="Didsbury Northern HC" />
            <img src="http://localhost:3845/assets/39908c7401ce8eea75d9377f2945bbda6b8a5e52.png" alt="Brooklands HC" />
            <img src="http://localhost:3845/assets/3a3cc15e52631efd32dbfc91d6a4caa8fc7b5733.png" alt="Milton Keynes HC" />
            <svg viewBox="0 0 100 100" className="club-logo-svg">
              <image href="http://localhost:3845/assets/ae78a442d31311017523eead5cf1807b8a8dbcca.svg" width="100" height="100"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
