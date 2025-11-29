// Capabilities Section for For Clubs page

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "See Problems Before They Surface",
      description:
        "AI detects declining mental patterns 5-7 days before visible symptoms. Enough time to intervene—not react. Your staff gets alerts with context and recommended actions.",
    },
    {
      title: "Know Exactly Where You Stand",
      description:
        "Compare your team's mental performance against anonymized data from top academies across Europe. Set targets based on what elite clubs actually achieve.",
    },
    {
      title: "Finally Understand Why Performance Drops",
      description:
        "GPS says he's fit. Video says technique is fine. But something's off. AthleteQ shows what numbers alone can't—the mental state behind the performance.",
    },
  ];

  return (
    <section className="clubs-capabilities-section">
      <div className="clubs-capabilities-inner">
        {/* Left Side - Title */}
        <div className="clubs-capabilities-header">
          <h2 className="clubs-capabilities-title">
            Capabilities Your Competitors Don't Have
          </h2>
          <p className="clubs-capabilities-subtitle">Not features. Outcomes.</p>
        </div>

        {/* SVG Connector Lines */}
        <div className="clubs-capabilities-connector">
          <svg
            className="clubs-capabilities-svg"
            preserveAspectRatio="none"
            viewBox="0 0 50 100"
          >
            {/* Top branch */}
            <path
              d="M0,50 L0,10 L50,10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            {/* Middle branch */}
            <path
              d="M0,50 L50,50"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            {/* Bottom branch */}
            <path
              d="M0,50 L0,90 L50,90"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            {/* Arrows - smaller */}
            <path
              d="M47,8.5 L50,10 L47,11.5"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M47,48.5 L50,50 L47,51.5"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M47,88.5 L50,90 L47,91.5"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Right Side - Capabilities List */}
        <div className="clubs-capabilities-list">
          {capabilities.map((capability, index) => (
            <div key={index} className="clubs-capability-item">
              <div className="clubs-capability-content">
                <h3 className="clubs-capability-title">{capability.title}</h3>
                <p className="clubs-capability-description">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
