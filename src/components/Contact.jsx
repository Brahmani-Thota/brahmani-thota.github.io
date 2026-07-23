import './Contact.css';

export default function Contact() {
  return (
    <footer className="section contact-section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="container">
        <p className="eyebrow">contact.env</p>
        <h2 className="section-title">Let's talk data</h2>
        <p className="section-desc">
          Open to Senior / Data Engineer roles working with regulated, high-stakes financial data — healthcare, fintech, or beyond.
        </p>

        <div className="contact-grid">
          <a href="mailto:thotasadhvika@gmail.com" className="contact-card">
            <span className="contact-key">email</span>
            <span className="contact-value">thotasadhvika@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/brahmani-thota/" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-key">linkedin</span>
            <span className="contact-value">/in/brahmani-thota</span>
          </a>
          <a href="tel:9082907971" className="contact-card">
            <span className="contact-key">phone</span>
            <span className="contact-value">908-290-7971</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
