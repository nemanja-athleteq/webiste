// Investment Math Section for For Clubs page

const InvestmentSection = () => {
  const riskItems = [
    { label: "Player rehabilitation", value: "€15-30k" },
    { label: "Replacement / loan fees", value: "€20-50k" },
    { label: "Medical & psychological support", value: "€10-25k" },
    { label: "Lost matches (form disruption)", value: "€30-100k+" },
  ];

  const investmentItems = [
    { label: "Annual subscription", value: "€8-20k / year" },
    { label: "Coach time (daily)", value: "5 minutes" },
    { label: "Athlete check-in", value: "2 minutes / day" },
    { label: "Implementation", value: "2-3 weeks" },
  ];

  return (
    <section className="clubs-investment-section">
      <div className="clubs-investment-inner">
        {/* Header */}
        <div className="clubs-investment-header">
          <h2 className="clubs-investment-title">
            The Math Behind Mental Performance Investment
          </h2>
          <p className="clubs-investment-subtitle">
            Industry data. Realistic projections. No guesswork.
          </p>
        </div>

        {/* Cards Container */}
        <div className="clubs-investment-cards">
          {/* Risk Card */}
          <div className="clubs-investment-card clubs-risk-card">
            <span className="clubs-card-label">THE RISK</span>
            <h3 className="clubs-card-title clubs-risk-title">
              What One Crisis Costs
            </h3>
            <ul className="clubs-card-list">
              {riskItems.map((item, index) => (
                <li key={index} className="clubs-card-item">
                  <span className="clubs-item-label">{item.label}</span>
                  <span className="clubs-item-value">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="clubs-card-total">
              <span className="clubs-total-label">Total Estimated Cost</span>
              <span className="clubs-total-value clubs-risk-value">€50-200k+</span>
            </div>
          </div>

          {/* Investment Card */}
          <div className="clubs-investment-card clubs-prevention-card">
            <span className="clubs-card-label">THE INVESTMENT</span>
            <h3 className="clubs-card-title clubs-prevention-title">
              What Prevention Costs
            </h3>
            <ul className="clubs-card-list">
              {investmentItems.map((item, index) => (
                <li key={index} className="clubs-card-item">
                  <span className="clubs-item-label">{item.label}</span>
                  <span className="clubs-item-value">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="clubs-card-total">
              <span className="clubs-total-label">Average Investment</span>
              <span className="clubs-total-value clubs-prevention-value">€12k/year</span>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="clubs-investment-conclusion">
          <p className="clubs-conclusion-text">
            You don't need a case study to understand this math.
          </p>
          <p className="clubs-conclusion-highlight">
            One prevented crisis pays for half a decade of AthleteQ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
