// Features Section - "What You Get as a Parent"

const featuresData = [
  {
    number: "01",
    title: "See How They're Really Doing",
    problem:
      'You ask "how was practice?" — you get "fine." You know something\'s off, but you can\'t see it.',
    solution:
      "Weekly email with your child's readiness score, mood trends, and engagement levels. Real data, not one-word answers",
    outcome: "Know how they're actually doing — without interrogating them.",
    image: "/assets/parents-feature-1.png",
    imagePosition: "right",
  },
  {
    number: "02",
    title: "Peace of Mind, Built In",
    problem:
      "You can't be there 24/7. And even when you are, they don't always share.",
    solution:
      "AthleteQ monitors patterns in the background. If something needs your attention — a dip in mood, unusual responses, signs of pressure — you'll know.",
    outcome: "Catch small issues before they become big problems.",
    image: "/assets/parents-feature-2.png",
    imagePosition: "left",
  },
  {
    number: "03",
    title: "Professionals Have Their Back",
    problem:
      "You're not a psychologist. When things get serious, you don't know how to help.",
    solution:
      "Your club has access to vetted sports psychologists and crisis protocols. When it's beyond parenting, experts step in.",
    outcome: "You provide love and support. Professionals handle the rest.",
    image: "/assets/parents-feature-3.png",
    imagePosition: "right",
  },
];

const FeaturesSection = () => {
  return (
    <section className="parents-features-section">
      <div className="parents-features-inner">
        {/* Header */}
        <div className="parents-features-header">
          <span className="parents-features-label">How AthleteQ Helps</span>
          <h2 className="parents-features-title">What You Get as a Parent</h2>
        </div>
        {/* Features */}
        <div className="parents-features-list">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`parents-feature-item ${
                feature.imagePosition === "left" ? "image-left" : "image-right"
              }`}
            >
              {/* Content */}
              <div className="parents-feature-content">
                <span className="parents-feature-number">{feature.number}</span>
                <h3 className="parents-feature-title">{feature.title}</h3>

                <div className="parents-feature-block">
                  <span className="parents-feature-block-label">
                    The Problem
                  </span>
                  <p className="parents-feature-block-text">
                    {feature.problem}
                  </p>
                </div>

                <div className="parents-feature-block">
                  <span className="parents-feature-block-label">
                    The Solution
                  </span>
                  <p className="parents-feature-block-text">
                    {feature.solution}
                  </p>
                </div>

                <div className="parents-feature-block">
                  <span className="parents-feature-block-label">
                    The Outcome
                  </span>
                  <p className="parents-feature-block-text highlight">
                    {feature.outcome}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="parents-feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
