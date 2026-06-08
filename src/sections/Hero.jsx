import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";
import profileImage from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
       
       

        <img src={profileImage} alt="Manas Mayank" />

      </div>

      <div className="hero-content">

        
<div className="status">
 🟢 Available for Internships & Full-Time Roles
</div>
        <h1>Manas Mayank</h1>

       




        <h2>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2500,
              "Django Developer",
              2500,
              "React Developer",
              2500,
              "Open To Opportunities",
              2500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p>
          Passionate Full Stack Developer focused on building
          real-world web applications using React, Django,
          PostgreSQL and modern web technologies.
        </p>


<div className="stack-line">
      ⚛ React • ⚡ Django • 🐍 Python • 🗄 PostgreSQL • Git
</div>

        <div className="hero-buttons">
          <a
  href="#projects"
  className="hero-btn"
>
  View Projects
</a>
          <a
  href="/resume.pdf"
  download
  className="hero-btn"
>
  Download Resume
</a>
        </div>
      </div>

    </section>
  );
}

export default Hero;