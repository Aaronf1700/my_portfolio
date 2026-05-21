import "./App.css";

const projects = [
  {
    title: "PrepVision AI",
    desc: "AI-driven placement preparation platform with resume parsing, mock interviews, aptitude modules, and personalized preparation roadmaps.",
    stack: "React • FastAPI • MongoDB • Gemini API • OpenCV",
  },
  {
    title: "WaterGuard",
    desc: "IoT + ML water quality monitoring system using Arduino sensors with dashboard-based visualization and water quality prediction.",
    stack: "Arduino • Python • Flask • Plotly • Machine Learning",
  },
  {
    title: "Business Analytics Dashboard",
    desc: "Operational dashboards for sales, customer insights, investor payments, AOV, and business KPI tracking.",
    stack: "Looker Studio • Excel • Google Sheets • Apps Script",
  },
  {
    title: "ERP Inventory Workflow",
    desc: "Worked on Odoo inventory workflows, stock tracking, staff support, and operational process management.",
    stack: "Odoo ERP • Inventory • Operations • Analytics",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <h2>Aaron Fernandes</h2>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-animation">
        <div className="blob blob-blue"></div>
        <div className="blob blob-green"></div>
        </div>
        <div className="hero-container">
          <p className="role">
            Software Developer • Data Analytics • AI & IoT Projects
          </p>

          <h1>
            Building practical software systems, dashboards,
            and AI-driven applications.
          </h1>

          <p className="hero-text">
            BE IT engineering student with experience in backend development,
            analytics dashboards, IoT systems, ERP workflows, and real-world
            operational projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="mailto:aaronfernandes1215@student.sfit.ac.in"
              className="secondary-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About</h2>

          <div className="about-card">
            <p>
              I am an IT engineering student focused on software development,
              analytics, backend systems, ERP workflows, AI applications, and
              IoT-based monitoring solutions. I enjoy building practical systems
              that solve operational and real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section gray-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming</h3>
              <p>Python, JavaScript, SQL</p>
            </div>

            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, HTML, CSS, Tailwind CSS</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>FastAPI, Flask, REST APIs</p>
            </div>

            <div className="skill-card">
              <h3>Databases</h3>
              <p>MongoDB, Firebase, PostgreSQL</p>
            </div>

            <div className="skill-card">
              <h3>Analytics</h3>
              <p>Looker Studio, Power BI, Excel</p>
            </div>

            <div className="skill-card">
              <h3>IoT & AI</h3>
              <p>Arduino, Sensors, OpenCV, Scikit-learn</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-card">
            <h3>Inventory Management / ERP Intern</h3>

            <p className="company">
              Go-Karting Operations & ERP Workflow Support
            </p>

            <ul>
              <li>
                Assisted with Odoo ERP inventory workflows and stock tracking.
              </li>

              <li>
                Supported operational reporting and dashboard-based analysis.
              </li>

              <li>
                Helped streamline inventory and process management activities.
              </li>

              <li>
                Assisted staff and managers in ERP usage and workflow support.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section gray-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="stack">{project.stack}</div>

                <div className="project-links">
                  <a href="#">GitHub</a>
                  <a href="#">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>

          <div className="contact-card">
            <p>
              Open to fresher opportunities in software development,
              backend engineering, analytics, ERP/integration, and
              technology-focused roles.
            </p>

            <div className="contact-links">
              <a href="mailto:aaronfernandes1215@gmail.com">
                Email
              </a>

              <a href="https://www.linkedin.com/in/aaron-fernandes-b346b8247/">LinkedIn</a>

              <a href="https://github.com/Aaronf1700">GitHub</a>

              <a href="https://drive.google.com/file/d/1h6IuEVMaXe0daL-iEFgC__gWx4MJyRp_/view?usp=drive_link">Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}