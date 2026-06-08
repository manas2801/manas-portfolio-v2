import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Let's Connect</h2>

      <div className="contact-grid">

        <a
          href="mailto:mayank.manas.2801@gmail.com"
          className="contact-card"
        >
          <h3>📧 Email</h3>
          <p>Send a Message</p>
        </a>

        <a
          href="https://github.com/manas2801"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>🐙 GitHub</h3>
          <p>View Profile</p>
        </a>

        <a
          href="https://www.linkedin.com/in/mayankmanas28"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <h3>💼 LinkedIn</h3>
          <p>Connect With Me</p>
        </a>

        <a
          href="#"
          className="contact-card"
        >
          <h3>📄 Resume</h3>
          <p>Download Resume</p>
        </a>

      </div>

    </section>
  );
}

export default Contact;