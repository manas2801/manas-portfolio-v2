import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>🎓 Smart Student Management System</h3>
          <p>
           Full-stack Django application for managing students,
attendance, marks, fees, reports and academic records.
          </p>

          <div className="project-tech">
  <span>Django</span>
  <span>PostgreSQL</span>
  <span>Bootstrap</span>
  <span>Cloudinary</span>
  <span>Git</span>
  <span>Render</span>
</div>

         <div className="project-buttons">
  <a
    href="https://github.com/manas2801/smart-student-management-system"
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

  <a
    href="https://smart-student-management-system-fnt2.onrender.com"
    target="_blank"
    rel="noreferrer"
  >
    <button>Live Demo</button>
  </a>
</div>

        </div>

        <div className="project-card">
          <h3>💰 Donation Web App</h3>
          <p>
           Donation management platform built with Django and PostgreSQL,
allowing users to contribute, manage records and track donations.
          </p>

          <div className="project-tech">
  <span>Django</span>
  <span>PostgreSQL</span>
  <span>HTML</span>
  <span>CSS</span>
</div>
          <div className="project-buttons">
            <a
              href="https://github.com/manas2801/donation-web-app"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
            
           
          </div>
        </div>

        <div className="project-card">
          <h3>⚔️ Battlemode</h3>
          <p>
            Interactive gaming project showcasing frontend and logic building skills.
          </p>

          <div className="project-tech">
  <span>JavaScript</span>
  <span>HTML</span>
  <span>CSS</span>
  <span>Game Logic</span>
</div>
            <div className="project-buttons">
              <a
                href="https://github.com/manas2801/Battlemode"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
            </div>
        </div>

        <div className="project-card">
          <h3>🎨 Portfolio V2</h3>
          <p>
            Modern React portfolio with animations, responsive design and premium UI.
          </p>

          <div className="project-tech">
  <span>React</span>
  <span>Vite</span>
  <span>JavaScript</span>
  <span>CSS</span>
</div>
          <div className="project-buttons">
  <a
    href="https://github.com/manas2801/manas-portfolio-v2"
    target="_blank"
    rel="noreferrer"
  >
    <button>GitHub</button>
  </a>

     <a
  href="https://manas-portfolio-v2.vercel.app"
  target="_blank"
  rel="noreferrer"
>
  <button>Live Demo</button>
</a>
</div>
        </div>

      </div>
    </section>
  );
}

export default Projects;