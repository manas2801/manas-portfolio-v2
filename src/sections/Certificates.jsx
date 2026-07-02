import "../styles/Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "TCS iON Career Edge",
      subtitle: "Young Professional Program",
      link: "https://drive.google.com/file/d/1JgfAt1xK3V2EoZ0iFOgxwtwJhINYev8a/view?usp=drive_link",
    },
    {
      title: "NPTEL",
      subtitle: "Data Science Using Python",
      link: "https://drive.google.com/file/d/1tBUrmPhTLzAhPK8ww2qXHQprYu12-ZSe/view?usp=drive_link",
    },
    {
      title: "Web Development Bootcamp",
      subtitle: "Udemy Certification",
      link: "https://drive.google.com/file/d/1YlNN8aOdquMXRZ_YnyvDkUz8REo3i8gk/view?usp=drive_link",
    },
    {
      title: "Web Development with Python",
      subtitle: "Froyo Technologies",
      link: "https://drive.google.com/file/d/1J10mIyJoZX7s3-TpYOcLn9pO6r1gCFS5/view?usp=drive_link",
    },
    {
      title: "Microsoft",
      subtitle: "Introduction to MS Excel",
      link: "https://drive.google.com/file/d/1N66xpAMAwS7YaOJIKnnUKsD9ruTVWj0N/view?usp=drive_link",
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certifications</h2>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <h3>{cert.title}</h3>
            <p>{cert.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;