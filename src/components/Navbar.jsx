import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <h2>Manas Mayank</h2>

      <ul>
       <li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#certificates">Certificates</a></li>
<li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-buttons">
        <a
  href="https://github.com/manas2801"
  target="_blank"
  rel="noreferrer"
  className="nav-btn"
>
  GitHub
</a>
       <a
  href="/resume.pdf"
  download
  className="nav-btn"
>
  Resume
</a>
      </div>
    </nav>
  );
}

export default Navbar;