import { useState, useEffect, useRef, useCallback } from "react";

// Realistic Phone Mockup matching Figma design with glassmorphism
const AnimatedPhoneMockup = () => {
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState(null); // 'coach' only now
  const [animationStep, setAnimationStep] = useState(0);
  const [inputText, setInputText] = useState('');
  const [isTypingInInput, setIsTypingInInput] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const typingIntervalRef = useRef(null);

  // Typewriter effect function
  const typeMessage = useCallback((text, onComplete) => {
    let index = 0;
    setIsTypingInInput(true);
    setInputText('');

    typingIntervalRef.current = setInterval(() => {
      if (index < text.length) {
        setInputText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingIntervalRef.current);
        // Pause before "sending"
        setTimeout(() => {
          setIsSending(true);
          setTimeout(() => {
            setInputText('');
            setIsTypingInInput(false);
            setIsSending(false);
            onComplete();
          }, 300);
        }, 500);
      }
    }, 55); // typing speed
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // Athlete messages data
  const athleteMessages = [
    { id: 1, text: "Big match tomorrow. Feeling nervous 😰", meta: "Today 09:15" },
    { id: 3, text: "What should I focus on?", meta: "Today 09:17" },
    { id: 5, text: "Thanks coach! Feeling better already 💚", meta: "Today 09:19" }
  ];

  useEffect(() => {
    const runAnimation = () => {
      // Step 0: Athlete types first message in input field
      if (animationStep === 0) {
        setMessages([]);
        setTypingUser(null);
        typeMessage(athleteMessages[0].text, () => {
          setMessages([{ ...athleteMessages[0], type: "athlete" }]);
          setTimeout(() => setAnimationStep(1), 800);
        });
      }
      // Step 1: Show coach typing
      else if (animationStep === 1) {
        setTypingUser("coach");
        setTimeout(() => setAnimationStep(2), 1200);
      }
      // Step 2: Show coach response
      else if (animationStep === 2) {
        setTypingUser(null);
        setMessages(prev => [...prev, {
          id: 2,
          type: "coach",
          text: "I see you're stressed. Let's work on that together 💪",
          meta: "Emma - Today 09:16"
        }]);
        setTimeout(() => setAnimationStep(3), 1500);
      }
      // Step 3: Athlete types second message
      else if (animationStep === 3) {
        typeMessage(athleteMessages[1].text, () => {
          setMessages(prev => [...prev, { ...athleteMessages[1], type: "athlete" }]);
          setTimeout(() => setAnimationStep(4), 800);
        });
      }
      // Step 4: Show coach typing
      else if (animationStep === 4) {
        setTypingUser("coach");
        setTimeout(() => setAnimationStep(5), 1400);
      }
      // Step 5: Show coach advice
      else if (animationStep === 5) {
        setTypingUser(null);
        setMessages(prev => [...prev, {
          id: 4,
          type: "coach",
          text: "Breathing exercises and visualization. You've got this! 🎯",
          meta: "Emma - Today 09:18"
        }]);
        setTimeout(() => setAnimationStep(6), 1800);
      }
      // Step 6: Athlete types final message
      else if (animationStep === 6) {
        typeMessage(athleteMessages[2].text, () => {
          setMessages(prev => [...prev, { ...athleteMessages[2], type: "athlete" }]);
          setTimeout(() => setAnimationStep(7), 1500);
        });
      }
      // Step 7: Pause before restart
      else if (animationStep === 7) {
        setTimeout(() => setAnimationStep(0), 2500);
      }
    };

    runAnimation();
  }, [animationStep, typeMessage]);

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
          </div>

          {/* Chat Input - Glassmorphism from Figma */}
          <div className={`chat-input-glass ${isTypingInInput ? 'is-typing' : ''}`}>
            <div className={`input-container-glass ${isTypingInInput ? 'typing-active' : ''}`}>
              <div className="input-text-display">
                {inputText || (!isTypingInInput && <span className="input-placeholder">Start typing your question...</span>)}
                {isTypingInInput && <span className="typing-cursor">|</span>}
              </div>
              <button className={`btn-send-glass ${isSending ? 'sending' : ''} ${inputText ? 'has-text' : ''}`}>
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
