// Problem vs Solution Section for For Clubs page
const ProblemSolutionSection = () => {
  return (
    <section className="clubs-problem-solution-section">
      <div className="clubs-problem-solution-inner">
        {/* Section Header */}
        <div className="clubs-section-header">
          <h2 className="clubs-section-title">
            You Have Data for Everything, Except What Costs You Most
          </h2>
          <p className="clubs-section-subtitle">
            Physical performance is solved. Mental performance is your blind spot.
          </p>
        </div>

        {/* Comparison Blocks Container - no gap between blocks */}
        <div className="clubs-comparison-container">
          {/* Problem Block - What you're missing */}
          <div className="clubs-comparison-block clubs-problem-block">
            <div className="clubs-comparison-image">
              <img
                src="/assets/clubs-problem-img.png"
                alt="Coach working while athlete struggles"
                className="clubs-comparison-img"
              />
            </div>
            <div className="clubs-comparison-content">
              <h3 className="clubs-comparison-title">What you're missing:</h3>
              <ul className="clubs-comparison-list">
                <li>No early warning system</li>
                <li>Crisis detected too late</li>
                <li>€50-200k per mental breakdown</li>
                <li>76% of coaches say this is #1 challenge</li>
              </ul>
            </div>
          </div>

          {/* Solution Block - What AthleteQ delivers */}
          <div className="clubs-comparison-block clubs-solution-block">
            <div className="clubs-comparison-content">
              <h3 className="clubs-comparison-title">What AthleteQ delivers:</h3>
              <ul className="clubs-comparison-list clubs-solution-list">
                <li>5-7 days early warning</li>
                <li>73% of crises detected before breakdown</li>
                <li>€100k+ saved per prevented crisis</li>
                <li>12-15% win rate improvement</li>
              </ul>
            </div>
            <div className="clubs-comparison-image">
              <img
                src="/assets/clubs-solution-img.png"
                alt="Coach and athlete communicating positively"
                className="clubs-comparison-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
