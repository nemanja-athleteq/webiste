// FAQ Section - "Common Questions from Coaches"
import { useState } from 'react';

const faqData = [
  {
    question: "Do I have to pay for AthleteQ separately?",
    answer: "AthleteQ is included in your club's subscription. Individual coaches get full access through their club's license at no additional cost."
  },
  {
    question: "How long does it take to set up?",
    answer: "Most teams are up and running within 24 hours. Our onboarding team handles the technical setup, and we provide training sessions for coaches and staff."
  },
  {
    question: "Will athletes actually use it?",
    answer: "Yes! Our app is designed for athletes first. Daily check-ins take under 60 seconds, and athletes see immediate value through personalized insights and recommendations."
  },
  {
    question: "Does it integrate with our GPS system?",
    answer: "AthleteQ integrates with all major GPS providers including Catapult, STATSports, and Playermaker. Physical and mental data appear side-by-side in one dashboard."
  },
  {
    question: "What about player privacy?",
    answer: "Athletes control their data. Coaches see team-level insights and readiness scores, but sensitive personal details remain private unless the athlete chooses to share."
  },
  {
    question: "Can I try it before committing?",
    answer: "Absolutely. We offer a 30-day pilot program with full support. Most clubs see measurable results within the first two weeks."
  },
  {
    question: "How is this different from a sports psychologist?",
    answer: "AthleteQ complements psychology support—it doesn't replace it. We provide daily data and early warning systems so psychologists can focus on athletes who need help most."
  },
  {
    question: "What results can I expect?",
    answer: "On average, clubs report 15% fewer mental-related injuries, 20% improvement in team communication, and significant time savings on manual check-ins."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="coaches-faq-section">
      <div className="coaches-faq-inner">
        {/* Header */}
        <h2 className="faq-title">
          Common Questions from Coaches
        </h2>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className={`faq-plus-icon ${openIndex === index ? 'rotated' : ''}`}
                  >
                    <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="2" />
                    <line x1="17" y1="10" x2="17" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="horizontal-line" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
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
