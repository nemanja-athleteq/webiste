// Sound Familiar Section - Pain Points for Athletes

// Pain Card Component
const PainCard = ({ emoji, title, description, pain, stat, source }) => (
  <div className="athletes-pain-card">
    <div className="pain-card-header">
      <span className="pain-card-emoji">{emoji}</span>
      <h3 className="pain-card-title">{title}</h3>
    </div>
    <p className="pain-card-description">{description}</p>
    <div className="pain-card-content">
      <p className="pain-card-pain">
        <span className="pain-label">The pain:</span>
        <br />
        <span className="pain-text">{pain}</span>
      </p>
    </div>
    <div className="pain-card-divider"></div>
    <p className="pain-card-stat">
      {stat} (<strong>{source}</strong>)
    </p>
  </div>
);

const SoundFamiliarSection = () => {
  const painPoints = [
    {
      emoji: "🎯",
      title: '"The Big Moment Freeze"',
      description: "89th minute, one-on-one with keeper, your legs feel like concrete—you miss.",
      pain: "You train hard but choke when it matters most.",
      stat: "68% of athletes say mental mistakes cost them matches",
      source: "UEFA, 2023"
    },
    {
      emoji: "🪑",
      title: '"The Mystery Benching"',
      description: 'Fit. Sharp. Ready. But coach says "not today" with zero explanation.',
      pain: "You're benched without feedback on your mental readiness.",
      stat: "47% say lack of feedback is their #1 frustration",
      source: "SPJ, 2024"
    },
    {
      emoji: "🧠",
      title: '"The Mental Replay Loop"',
      description: "Saturday's mistake. Tuesday night. Still replaying it. Can't sleep.",
      pain: "You can't turn off your brain after bad matches.",
      stat: "76% say mental fatigue affects next performance",
      source: "AthleteQ, 2024"
    },
    {
      emoji: "🔇",
      title: '"The Silent Pressure"',
      description: "Team's laughing. You smile. But inside you're drowning—can't say it out loud.",
      pain: "Pressure feels like weakness if you admit it.",
      stat: '61% hide mental struggles to "not look weak"',
      source: "MHS Report, 2023"
    },
    {
      emoji: "📊",
      title: '"The Invisible Progress"',
      description: "Coach tracks speed, heart rate, shots. Mental performance? Nothing.",
      pain: "You can't measure if you're getting mentally stronger.",
      stat: "Only 8% of clubs track mental performance",
      source: "STS, 2024"
    }
  ];

  return (
    <section className="athletes-familiar-section">
      <div className="athletes-familiar-inner">
        <h2 className="athletes-familiar-title">Sound Familiar?</h2>

        <div className="athletes-familiar-grid">
          {/* First row - 3 cards */}
          <div className="athletes-familiar-row">
            {painPoints.slice(0, 3).map((point, index) => (
              <PainCard key={index} {...point} />
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="athletes-familiar-row athletes-familiar-row-centered">
            {painPoints.slice(3, 5).map((point, index) => (
              <PainCard key={index + 3} {...point} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundFamiliarSection;
