
import './App.css'

function App() {
  

  return <div className="container py-5">
  <div className="row bg-white shadow rounded-4 p-4">
    <div className="col-md-4 bg-dark text-white p-4 rounded-4 mb-4 mb-md-0">
      <div className="mb-4">
        <h4>Contact</h4>
        <ul className="list-unstyled small">
          <li>Email: your.email@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Location: Your City, Country</li>
          <li>LinkedIn: /in/yourprofile</li>
          <li>GitHub: /yourgithub</li>
        </ul>
      </div>
      <div>
        <h4>Skills</h4>
        <ul className="list-unstyled small">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>

    {/* Main Section */}
    <div className="col-md-8">
      <header className="mb-4">
        <h1 className="display-5 fw-bold">Your Name</h1>
        <p className="lead text-muted">Full Stack Developer</p>
      </header>

      <section className="mb-4">
        <h4 className="border-bottom pb-2">Experience</h4>
        <div>
          <h5>Software Developer Intern @ Company XYZ</h5>
          <p className="text-muted small">June 2024 – August 2024</p>
          <ul className="small">
            <li>Developed a dashboard using React and Bootstrap.</li>
            <li>Integrated APIs and improved performance by 30%.</li>
          </ul>
        </div>
      </section>

      <section className="mb-4">
        <h4 className="border-bottom pb-2">Education</h4>
        <div>
          <h5>B.Tech in CSE - ABC University</h5>
          <p className="text-muted small">2021 – 2025 | CGPA: 8.2</p>
        </div>
      </section>

      <section>
        <h4 className="border-bottom pb-2">Projects</h4>
        <div>
          <h5>Student Score Predictor</h5>
          <p className="small">Built a Flask app to predict student scores using ML and deployed on Render.</p>
        </div>
        <div>
          <h5>Cricbuzz Clone</h5>
          <p className="small">A React-based SPA with live cricket data using RapidAPI.</p>
        </div>
      </section>
    </div>
  </div>
</div>

}
export default App;
