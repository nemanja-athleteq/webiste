// Testimonials Section Component - Updated with blob decoration
const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <h2>Trusted by Leaders Who Demand Results</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="avatar">
              <img src="/assets/Gemini_Generated_Image_lqwdg9lqwdg9lqwd 1.png" alt="Coach Martinez" />
            </div>
            <div className="testimonial-content">
              <p className="quote">Before AthleteQ, I was benching players based on gut feeling. With the readiness dashboard, I now see mental state data every morning. We've won 6 more matches this season because I make smarter lineup decisions.</p>
              <div className="author">
                <p className="name">— Coach Martinez</p>
                <p className="role">Head Coach, Segunda División Academy</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="avatar">
              <img src="/assets/Photo - Athlete 3.png" alt="Sam K." />
            </div>
            <div className="testimonial-content">
              <p className="quote">Mental Reps helped me stay calm in penalty situations. I used to freeze under pressure now I score 20% more in high-stakes moments. The AI Coach feels like having a sports psychologist in my pocket 24/7.</p>
              <div className="author">
                <p className="name">— Sam K.</p>
                <p className="role">Midfielder, 25 years old</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="avatar">
              <img src="/assets/Gemini_Generated_Image_5f0q4f5f0q4f5f0q 1.png" alt="James Thompson" />
            </div>
            <div className="testimonial-content">
              <p className="quote">We prevented 2 mental crises this year thanks to early detection—that's €100k+ saved in player development investment alone. Best ROI we've seen from any tech platform. AthleteQ pays for itself 10x over.</p>
              <div className="author">
                <p className="name">— James Thompson</p>
                <p className="role">Technical Director, Brooklands HC</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements positioned around testimonials */}
      <div className="decoration-blob"></div>
      <div className="decoration-lines decoration-lines-left"></div>
      <div className="decoration-lines decoration-lines-right"></div>
    </section>
  );
};

export default TestimonialsSection;
