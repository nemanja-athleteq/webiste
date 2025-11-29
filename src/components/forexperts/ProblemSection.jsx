// Problem Section for Experts - "You Trained to Transform Athletes"

const statsData = [
  {
    icon: "dollar",
    value: "€2K",
    unit: "per month",
    label: "Marketing Spend",
    description: "Inconsistent results. Constant stress. Time spent on ads instead of athletes."
  },
  {
    icon: "trending",
    value: "20-25",
    unit: "clients/week",
    label: "Your Ceiling",
    description: "Hard limit as solo practitioner. No matter how good you are, this doesn't scale"
  },
  {
    icon: "clock",
    value: "30+",
    unit: "minutes",
    label: "Lost Per Session",
    description: "\"Tell me about your week\" before real work begins. Context you should already have."
  }
];

const problemsData = [
  {
    title: "The Black Box Between Sessions",
    description: "Your athlete leaves. Seven days pass. Did they practice the techniques? Are they spiraling before a big match? You won't know until they're back in your office."
  },
  {
    title: "The Feast-or-Famine Pipeline",
    description: "Word-of-mouth referrals are unpredictable. Sport seasons create income gaps. One month you're overbooked, the next you're wondering where clients went."
  },
  {
    title: "The Admin Time Drain",
    description: "Scheduling, invoicing, intake forms, session notes. You didn't get a doctorate to become an administrative assistant—but here you are."
  },
  {
    title: "The Professional Isolation",
    description: "Conferences once a year. Otherwise? Just you, your clients, and the solitude of solo practice. No peer consultation. No community. No shared learning."
  }
];

const ProblemSection = () => {
  return (
    <section className="experts-problem-section">
      <div className="experts-problem-inner">
        {/* Header */}
        <h2 className="experts-problem-title">
          You Trained to Transform Athletes.
          <br />
          <span className="experts-problem-title-green">Not to Run a Marketing Agency.</span>
        </h2>
        <p className="experts-problem-subtitle">
          The private practice paradox: exceptional clinical skills, broken business model.
        </p>

        {/* Stats Cards */}
        <div className="experts-stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="experts-stat-card">
              <div className="experts-stat-icon-wrapper">
                {stat.icon === "dollar" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c7f043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                )}
                {stat.icon === "trending" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c7f043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                )}
                {stat.icon === "clock" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c7f043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )}
              </div>
              <p className="experts-stat-value">{stat.value}</p>
              <p className="experts-stat-unit">{stat.unit}</p>
              <p className="experts-stat-label">{stat.label}</p>
              <p className="experts-stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Problem Cards */}
        <div className="experts-problems-grid">
          {problemsData.map((problem, index) => (
            <div key={index} className="experts-problem-card">
              <div className="experts-problem-card-dot" />
              <h3 className="experts-problem-card-title">{problem.title}</h3>
              <p className="experts-problem-card-description">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <p className="experts-problem-bottom-message">
          What if athletes came to you <span className="green">pre-qualified, pre-engaged,</span> and with <span className="green">60 days of context</span> before the first session?
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
