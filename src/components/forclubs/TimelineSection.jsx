// Timeline Section for For Clubs page - Staircase Progress Design

const TimelineSection = () => {
  const steps = [
    {
      number: "01",
      week: "Week 1-2",
      title: "INTEGRATE",
      description:
        "We handle the technical setup. API connects to your existing systems. Your IT team's involvement: minimal.",
      checkmarks: ["No workflow disruption"],
      progress: 33,
    },
    {
      number: "02",
      week: "Week 2-3",
      title: "ONBOARD",
      description:
        "Athletes download app. Coaches get dashboard access and 30-minute training. AI starts learning patterns.",
      checkmarks: ["2-min daily check-ins for athletes", "30-min training for coaches"],
      progress: 66,
    },
    {
      number: "03",
      week: "Week 3+",
      title: "OPERATE",
      description:
        "Insights arrive. Alerts before problems escalate. 5 minutes each morning gives complete clarity.",
      checkmarks: ["Daily readiness dashboard", "Early warning alerts", "10-15h saved weekly"],
      progress: 100,
    },
  ];

  return (
    <section className="clubs-timeline-section">
      <div className="clubs-timeline-inner">
        {/* Left Side - Title */}
        <div className="clubs-timeline-header">
          <h2 className="clubs-timeline-title">
            Live in 3 Weeks.
            <br />
            Results in 30 Days.
          </h2>
          <p className="clubs-timeline-subtitle">
            Simple onboarding. Dedicated support.
            <br />
            Results you'll know in 30 days.
          </p>
        </div>

        {/* Right Side - Staircase Steps */}
        <div className="clubs-timeline-steps">
          {steps.map((step, index) => (
            <div key={index} className={`clubs-step-card clubs-step-${index + 1}`}>
              {/* Spotlight/Gradient behind number */}
              <div className="clubs-step-spotlight"></div>

              {/* Number */}
              <div className="clubs-step-number">{step.number}</div>

              {/* Content */}
              <div className="clubs-step-content">
                <div className="clubs-step-header">
                  <span className="clubs-step-week">{step.week}</span>
                  <h3 className="clubs-step-title">{step.title}</h3>
                </div>
                <p className="clubs-step-description">{step.description}</p>
                <ul className="clubs-step-checkmarks">
                  {step.checkmarks.map((item, idx) => (
                    <li key={idx}>
                      <span className="clubs-check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Progress bar */}
                <div className="clubs-step-progress">
                  <div
                    className="clubs-step-progress-bar"
                    style={{ width: `${step.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
