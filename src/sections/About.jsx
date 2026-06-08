import "../styles/About.css";
function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p>
        I am a passionate Full Stack Developer focused on building
real-world web applications using React, Django,
PostgreSQL and modern web technologies. I enjoy creating
practical solutions and continuously improving my skills
through hands-on projects.
      </p>

      <div className="stats">

        <div className="stat-card">
  <h3>4+</h3>
  <p>Projects</p>
</div>

        <div className="stat-card">
          <h3>75%</h3>
          <p>Academic Score</p>
        </div>

        <div className="stat-card">
  <h3>React + Django</h3>
  <p>Tech Stack</p>
</div>

       <div className="stat-card">
  <h3>Open</h3>
  <p>To Work</p>
</div>

      </div>
    </section>
  );
}

export default About;