import { useState } from "react";
import "./App.css";

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  return (
    <div
      className="portfolio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">OG</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main id="home" className="hero">

        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Omkar Gupta</h1>

          <h2>
            CSE Student & <span>Developer</span>
          </h2>

          <p className="description">
            I build projects, solve DSA problems and continuously
            explore Web Development and Generative AI.
          </p>

          <div className="hero-buttons">
            <button>View Projects</button>
            <button className="outline-btn">Contact Me</button>
          </div>
        </div>

        {/* Interactive Photo */}
        <div
          className="hero-photo"
          style={{
            transform: `translate(${mouse.x * 12}px, ${mouse.y * 12}px)
                        rotateX(${mouse.y * -4}deg)
                        rotateY(${mouse.x * 4}deg)`,
          }}
        >
          <div className="photo-placeholder">
            OG
          </div>
        </div>

      </main>

    </div>
  );
}

export default App;