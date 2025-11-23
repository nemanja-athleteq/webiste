import { useState, useEffect } from "react";

// Realistic Phone Mockup matching Figma design with glassmorphism
const AnimatedPhoneMockup = () => {
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState(null); // 'athlete' or 'coach'
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const runAnimation = () => {
      // Step 0: Show athlete typing
      if (animationStep === 0) {
        setMessages([]);
        setTypingUser("athlete");
        setTimeout(() => setAnimationStep(1), 1000);
      }
      // Step 1: Show first athlete message
      else if (animationStep === 1) {
        setTypingUser(null);
        setMessages([{
          id: 1,
          type: "athlete",
          text: "Big match tomorrow. Feeling nervous 😰",
          meta: "Today 09:15"
        }]);
        setTimeout(() => setAnimationStep(2), 1200);
      }
      // Step 2: Show coach typing
      else if (animationStep === 2) {
        setTypingUser("coach");
        setTimeout(() => setAnimationStep(3), 1000);
      }
      // Step 3: Show coach response
      else if (animationStep === 3) {
        setTypingUser(null);
        setMessages(prev => [...prev, {
          id: 2,
          type: "coach",
          text: "I see you're stressed. Let's work on that together 💪",
          meta: "Emma - Today 09:16"
        }]);
        setTimeout(() => setAnimationStep(4), 1800);
      }
      // Step 4: Show athlete typing
      else if (animationStep === 4) {
        setTypingUser("athlete");
        setTimeout(() => setAnimationStep(5), 1000);
      }
      // Step 5: Show athlete response
      else if (animationStep === 5) {
        setTypingUser(null);
        setMessages(prev => [...prev, {
          id: 3,
          type: "athlete",
          text: "What should I focus on?",
          meta: "Today 09:17"
        }]);
        setTimeout(() => setAnimationStep(6), 1500);
      }
      // Step 6: Show coach typing
      else if (animationStep === 6) {
        setTypingUser("coach");
        setTimeout(() => setAnimationStep(7), 1200);
      }
      // Step 7: Show coach advice
      else if (animationStep === 7) {
        setTypingUser(null);
        setMessages(prev => [...prev, {
          id: 4,
          type: "coach",
          text: "Breathing exercises and visualization. You've got this! 🎯",
          meta: "Emma - Today 09:18"
        }]);
        setTimeout(() => setAnimationStep(8), 2000);
      }
      // Step 8: Show athlete typing
      else if (animationStep === 8) {
        setTypingUser("athlete");
        setTimeout(() => setAnimationStep(9), 1000);
      }
      // Step 9: Show final athlete message
      else if (animationStep === 9) {
        setTypingUser(null);
        setMessages(prev => [...prev, {
          id: 5,
          type: "athlete",
          text: "Thanks coach! Feeling better already 💚",
          meta: "Today 09:19"
        }]);
        setTimeout(() => setAnimationStep(10), 1500);
      }
      // Step 10: Pause before restart
      else if (animationStep === 10) {
        setTimeout(() => setAnimationStep(0), 2500);
      }
    };

    runAnimation();
  }, [animationStep]);

  return (
    <div className="phone-mockup-wrapper">
      {/* Phone SVG Frame */}
      <img
        src="/assets/phone-frame.svg"
        alt="Phone"
        className="phone-svg-frame"
      />

      {/* Chat UI Overlay */}
      <div className="chat-ui-overlay">
        {/* Status Bar */}
        <div className="phone-status-bar">
          {/* <span className="status-time">9:41</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div> */}
        </div>
        {/* Chat Screen */}
        <div className="chat-screen-overlay">
          {/* Chat Header - Glassmorphism from Figma */}
          <div className="chat-header-glass">
            <div className="coach-profile">
              <div className="coach-avatar-glass">
                <img src="/assets/emma-avatar.jpg" alt="Emma" />
              </div>
              <div className="coach-info-glass">
                <div className="coach-name-row">
                  <span className="coach-name">Emma</span>
                  <span className="coach-subtitle-inline">
                    - Athlete Intelligence Coach
                  </span>
                </div>
                <span className="online-status-glass">Online</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages-glass">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-wrapper message-${msg.type}`}
              >
                <div className={`message-bubble-glass ${msg.type}`}>
                  <p>{msg.text}</p>
                </div>
                <span className="message-meta-glass">{msg.meta}</span>
              </div>
            ))}

            {typingUser === "coach" && (
              <div className="message-wrapper message-coach">
                <div className="message-bubble-glass coach typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}

            {typingUser === "athlete" && (
              <div className="message-wrapper message-athlete">
                <div className="message-bubble-glass athlete typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input - Glassmorphism from Figma */}
          <div className="chat-input-glass">
            <div className="input-container-glass">
              <input
                type="text"
                placeholder="Start typing your question..."
                readOnly
              />
              <button className="btn-send-glass">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M16.5 1.5L8.25 9.75M16.5 1.5L11.25 16.5L8.25 9.75M16.5 1.5L1.5 6.75L8.25 9.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="btn-mic-glass">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 13.75C11.7259 13.75 13.125 12.3509 13.125 10.625V5.625C13.125 3.89911 11.7259 2.5 10 2.5C8.27411 2.5 6.875 3.89911 6.875 5.625V10.625C6.875 12.3509 8.27411 13.75 10 13.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.25 9.375V10.625C16.25 14.0787 13.4537 16.875 10 16.875C6.54625 16.875 3.75 14.0787 3.75 10.625V9.375"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.875V18.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPhoneMockup;
