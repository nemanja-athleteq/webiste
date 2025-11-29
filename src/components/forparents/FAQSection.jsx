// FAQ Section for Parents - "You're Probably Wondering..."
import { useState } from 'react';

const faqData = [
  {
    question: "Is this like therapy?",
    answer: "No. AthleteQ is a monitoring and early-warning tool, not therapy. It tracks patterns in mood, stress, and readiness through quick daily check-ins. If something needs professional attention, the system alerts the right people—but it's not a replacement for mental health professionals."
  },
  {
    question: "How much time does it take?",
    answer: "Daily check-ins take about 2 minutes. Your child answers a few quick questions on their phone. You receive a weekly summary email—no app to check constantly, no extra work for you."
  },
  {
    question: "Does this actually work or is it just motivational quotes?",
    answer: "No fluff. AthleteQ uses validated psychological assessments and tracks real data over time. You'll see actual readiness scores, mood trends, and early warning patterns—not generic advice."
  },
  {
    question: "Will my coach see everything?",
    answer: "Coaches see team-level readiness and aggregate trends. They don't see your child's private journal entries or detailed personal data. You get more visibility than coaches do."
  },
  {
    question: "Will other parents know I'm using this?",
    answer: "No. Your access is private. Other parents won't know you're receiving updates unless you choose to tell them."
  },
  {
    question: "What if my child stops using it?",
    answer: "Inconsistent usage itself is a signal. If check-ins suddenly stop, you'll know. We also see 85%+ sustained engagement because athletes find personal value in tracking their own patterns."
  },
  {
    question: "Does this actually prevent problems or just report them?",
    answer: "Both. Early pattern detection means issues get flagged before they escalate. The system has helped clubs intervene weeks before problems became crises—turning 'I had no idea' into 'we caught it early.'"
  },
  {
    question: "What if I'm already mentally strong?",
    answer: "Mental performance isn't about weakness. Elite athletes use these tools to optimize, not fix. Think of it like physical training data—you track it to improve, not because something's wrong."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="parents-faq-section">
      <div className="parents-faq-inner">
        {/* Header */}
        <h2 className="parents-faq-title">
          You're Probably Wondering...
        </h2>

        {/* FAQ Items */}
        <div className="parents-faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`parents-faq-item ${openIndex === index ? 'parents-faq-item-open' : ''}`}
            >
              <button
                className="parents-faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="parents-faq-question">{faq.question}</span>
                <span className="parents-faq-icon">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className={`parents-faq-plus-icon ${openIndex === index ? 'rotated' : ''}`}
                  >
                    <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="2" />
                    <line x1="17" y1="10" x2="17" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="horizontal-line" />
                  </svg>
                </span>
              </button>
              <div className="parents-faq-answer-wrapper">
                <div className="parents-faq-answer">
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
