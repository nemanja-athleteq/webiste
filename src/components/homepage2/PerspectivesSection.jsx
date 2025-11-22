// Perspectives Section Component - EXACT COPY from homepage2.html
const PerspectivesSection = () => {
  return (
    <section className="perspectives-section">
      <div className="perspectives-inner">
        <div className="section-header">
          <h2>One platform. Five perspectives. Complete support.</h2>
          <p>Athletes train. Coaches guide. Clubs invest. Parents support. Experts help. Everyone wins.</p>
        </div>
        <div className="cards-grid">
          <div className="perspective-card">
            <img src="/assets/Card - For Athletes.png" alt="For Athletes" />
            <h3>FOR ATHLETES</h3>
            <div className="card-hover-overlay">
              <h3 className="card-hover-title">FOR ATHLETES</h3>
              <p className="card-hover-description">Stop guessing who's mentally ready make data-driven decisions</p>
              <button className="btn-card-hover">LEARN MORE →</button>
            </div>
          </div>
          <div className="perspective-card">
            <img src="/assets/Card - For Coaches.png" alt="For Coaches" />
            <h3>FOR COACHES</h3>
            <div className="card-hover-overlay">
              <h3 className="card-hover-title">FOR COACHES</h3>
              <p className="card-hover-description">Empower your coaching with real-time mental performance insights</p>
              <button className="btn-card-hover">LEARN MORE →</button>
            </div>
          </div>
          <div className="perspective-card">
            <img src="/assets/Card - For Clubspng.png" alt="For Clubs" />
            <h3>FOR CLUBS</h3>
            <div className="card-hover-overlay">
              <h3 className="card-hover-title">FOR CLUBS</h3>
              <p className="card-hover-description">Stop guessing who's mentally ready make data-driven decisions</p>
              <button className="btn-card-hover">LEARN MORE →</button>
            </div>
          </div>
          <div className="perspective-card">
            <img src="/assets/Card - For Parrents.png" alt="For Parents" />
            <h3>FOR PARRENTS</h3>
            <div className="card-hover-overlay">
              <h3 className="card-hover-title">FOR PARENTS</h3>
              <p className="card-hover-description">Support your athlete's mental journey with expert guidance</p>
              <button className="btn-card-hover">LEARN MORE →</button>
            </div>
          </div>
          <div className="perspective-card">
            <img src="/assets/Card - For Expertspng.png" alt="For Experts" />
            <h3>FOR EXPERTS</h3>
            <div className="card-hover-overlay">
              <h3 className="card-hover-title">FOR EXPERTS</h3>
              <p className="card-hover-description">Connect with athletes who need your professional expertise</p>
              <button className="btn-card-hover">LEARN MORE →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerspectivesSection;
