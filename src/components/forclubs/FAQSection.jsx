// FAQ Section for Clubs - "Common Questions from Club Decision Makers"
import { useState } from 'react';

const faqData = [
  {
    question: "What's the actual ROI on mental performance tools?",
    answer: "Based on industry data, one prevented mental health crisis saves €50-200k in rehabilitation, replacement, and lost performance costs. AthleteQ costs roughly €12k/year—one prevented incident pays for years of the platform."
  },
  {
    question: "How long until we see measurable results?",
    answer: "Most clubs see initial insights within 2 weeks of full adoption. Meaningful patterns and early warning capabilities develop within 30 days as the AI learns your team's baseline."
  },
  {
    question: "Does this replace our sports psychologist?",
    answer: "No—it amplifies their impact. AthleteQ provides daily data and early warnings so psychologists can focus on athletes who need attention most, rather than spending time on manual check-ins."
  },
  {
    question: "What about player data privacy and GDPR?",
    answer: "Fully GDPR compliant. Athletes own their data. Coaches see team-level insights and readiness scores. Sensitive personal information stays private unless the athlete explicitly shares it."
  },
  {
    question: "Will players actually use it consistently?",
    answer: "Daily check-ins take 2 minutes. Our athlete adoption rate exceeds 85% after the first month. Players see personal value through insights about their own patterns and performance."
  },
  {
    question: "How does integration with existing systems work?",
    answer: "We integrate with all major GPS providers (Catapult, STATSports, Playermaker) and performance platforms. Our API connects to your existing infrastructure with minimal IT involvement."
  },
  {
    question: "What's the implementation timeline?",
    answer: "Week 1-2: Technical integration. Week 2-3: Staff training and athlete onboarding. Week 3+: Full operation with daily insights. Most clubs are fully operational within 3 weeks."
  },
  {
    question: "Can we pilot before a full commitment?",
    answer: "Yes. We offer a 30-day pilot with full support. You'll see real data and results before making any long-term decision."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="clubs-faq-section">
      <div className="clubs-faq-inner">
        {/* Header */}
        <h2 className="clubs-faq-title">
          Common Questions from Club Decision Makers
        </h2>

        {/* FAQ Items */}
        <div className="clubs-faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`clubs-faq-item ${openIndex === index ? 'clubs-faq-item-open' : ''}`}
            >
              <button
                className="clubs-faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="clubs-faq-question">{faq.question}</span>
                <span className="clubs-faq-icon">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className={`clubs-faq-plus-icon ${openIndex === index ? 'rotated' : ''}`}
                  >
                    <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="2" />
                    <line x1="17" y1="10" x2="17" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="horizontal-line" />
                  </svg>
                </span>
              </button>
              <div className="clubs-faq-answer-wrapper">
                <div className="clubs-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
