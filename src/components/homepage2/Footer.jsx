// Footer Component - EXACT COPY from homepage2.html
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#clubs">For Clubs</a></li>
              <li><a href="#tour">Product Tour</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#founder">Founder Story</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#research">Research & Science</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#demo">Book a Demo</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#gdpr">GDPR Compliance</a></li>
              <li><a href="#security">Data Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a href="#linkedin">LinkedIn</a> •
          <a href="#twitter">Twitter/X</a> •
          <a href="#instagram">Instagram</a> •
          <a href="#youtube">YouTube</a>
        </div>

        <div className="footer-separator"></div>

        <p className="footer-copyright">
          © 2025 AthleteQ. Built by coaches, for coaches. Powered by AI. Proven by science.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
