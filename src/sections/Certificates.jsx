import "../styles/Certificates.css";

function Certificates() {
  return (
    <section id="certificates" className="certificates">

      <h2>Certifications</h2>

      <div className="certificate-grid">

        <div className="certificate-card">
          <h3>TCS iON Career Edge</h3>
          <p>Young Professional Program</p>
        </div>

        <div className="certificate-card">
          <h3>NPTEL</h3>
          <p>Data Science Using Python</p>
        </div>

        <div className="certificate-card">
          <h3>Web Development Bootcamp</h3>
          <p>Udemy Certification</p>
        </div>

      </div>

    </section>
  );
}

export default Certificates;