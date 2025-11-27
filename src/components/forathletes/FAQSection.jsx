// FAQ Section - "Common Questions from Athletes"
import { useState } from 'react';

const faqData = [
  {
    question: "Is AthleteQ free for me as a player?",
    answer: "Yes! AthleteQ is included in your club's subscription. You get full access to AI Coach, Mental Reps, and all features at no personal cost."
  },
  {
    question: "How much time does it take daily?",
    answer: "Just 5 minutes. A quick check-in takes 60 seconds, and a full AI Coach session is about 2-3 minutes. Fits easily between training sessions."
  },
  {
    question: "Can my coach see my private conversations?",
    answer: "No. Your AI Coach conversations are 100% private. Coaches only see your AQ readiness score—never your personal chats or sensitive details."
  },
  {
    question: "Will this actually help my performance?",
    answer: "82% of athletes report feeling less stressed within one week. Users see measurable improvements in focus, confidence, and pressure handling."
  },
  {
    question: "I'm not struggling mentally. Is this still for me?",
    answer: "Absolutely. AthleteQ isn't just for problems—it's for optimization. Elite athletes use it to sharpen focus, prepare for big matches, and maintain peak mental fitness."
  },
  {
    question: "How is this different from talking to a psychologist?",
    answer: "AthleteQ is available 24/7 for daily support and preparation. It complements—not replaces—professional help. Think of it as your daily mental training tool."
  },
  {
    question: "What if I don't want my teammates to know I use it?",
    answer: "Your usage is private. No one—not teammates, not coaches—can see whether or how often you use AthleteQ. It's your personal mental training space."
  },
  {
    question: "Can I use it on match day?",
    answer: "Yes! Many athletes use the AI Coach for pre-match preparation, visualization exercises, and calming nerves. It's designed for exactly those moments."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="athletes-faq-section">
      <div className="athletes-faq-inner">
        <h2 className="faq-title">
          Common Questions from Athletes
        </h2>

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
