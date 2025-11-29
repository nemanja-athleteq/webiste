// FAQ Section for Experts - "Questions Before You Apply"
import { useState } from 'react';

const faqData = [
  {
    question: "What qualifications do I need to join?",
    answer: "We accept licensed sports psychologists, certified mental performance consultants (CMPC), and professionals with equivalent credentials. You'll need at least 2 years of experience working with athletes and current professional liability insurance."
  },
  {
    question: "How does the client matching work?",
    answer: "Athletes from our partner clubs are matched to you based on specialty, language, sport expertise, and availability. You'll receive pre-qualified leads with 60 days of context—no cold outreach required."
  },
  {
    question: "What's the revenue split?",
    answer: "You set your own session rates. AthleteQ takes a small platform fee to cover client acquisition, AI support infrastructure, and payment processing. Most experts report earning more than private practice due to zero marketing costs and higher session volume."
  },
  {
    question: "How much time commitment is required?",
    answer: "Completely flexible. Set your own availability—from 5 hours to 40+ hours per week. The AI handles between-session support, so you only spend time on actual sessions and reviewing pre-session briefs."
  },
  {
    question: "What does the AI actually do?",
    answer: "The AI provides 24/7 athlete support through daily check-ins, Mental Reps exercises, and anxiety management conversations. It compiles insights into pre-session briefs for you. You remain the expert—AI handles the scalable support work."
  },
  {
    question: "Can I keep my existing private practice?",
    answer: "Absolutely. Many experts use AthleteQ alongside their private practice. Some use it to fill schedule gaps, others transition fully. There's no exclusivity requirement."
  },
  {
    question: "What's the acceptance rate?",
    answer: "We accept approximately 15% of applicants. We're building a curated network of top-tier professionals, not a marketplace flooded with options. Quality over quantity means better client matches for everyone."
  },
  {
    question: "How long does the application process take?",
    answer: "Initial review takes 48 hours. If you pass the first screen, you'll complete a brief video interview and credential verification. Most accepted applicants are onboarded within 2 weeks."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="experts-faq-section">
      <div className="experts-faq-inner">
        {/* Header */}
        <h2 className="experts-faq-title">
          Questions Before You Apply
        </h2>

        {/* FAQ Items */}
        <div className="experts-faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`experts-faq-item ${openIndex === index ? 'experts-faq-item-open' : ''}`}
            >
              <button
                className="experts-faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="experts-faq-question">{faq.question}</span>
                <span className="experts-faq-icon">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className={`experts-faq-plus-icon ${openIndex === index ? 'rotated' : ''}`}
                  >
                    <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="2" />
                    <line x1="17" y1="10" x2="17" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="horizontal-line" />
                  </svg>
                </span>
              </button>
              <div className="experts-faq-answer-wrapper">
                <div className="experts-faq-answer">
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
