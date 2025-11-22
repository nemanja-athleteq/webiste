// Testimonials Section Component - EXACT COPY from homepage2.html
const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <h2>Trusted by Leaders Who Demand Results</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="avatar">
              <img src="http://localhost:3845/assets/9d08c4a53d8b9f186f0f00dc5c21cd7fc9b7474e.png" alt="Coach Martinez" />
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
              <img src="http://localhost:3845/assets/600a38f52a28a620e44ab42a1fb8b7e8cd7c8042.png" alt="Sam K." />
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
              <img src="http://localhost:3845/assets/7e1d4d48996b10fc1f4aef739ab41c73f9fc403e.png" alt="James Thompson" />
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
    </section>
  );
};

export default TestimonialsSection;
