import './App.css';
import React, { useState, useEffect } from "react";
import { FaGithub, FaDiscord, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok, FaBug, FaMicrochip } from 'react-icons/fa';
import { Github, Shield, Bug, Terminal, Mail, Cpu, Network, Sun, Moon } from "lucide-react";

const projects = [
  {
    title: "WID_LoadLibrary",
    desc: "Reverse engineering winapi function loadlibrary.",
    tags: ["C++", "Windows", "RE"],
    links: [
      { label: "Repo", href: "https://github.com/paskalian/WID_LoadLibrary", target: "_blank" }
    ],
    icon: <FaBug size={18} />,
  },
  {
    title: "RetSpoofer",
    desc: "Spoof the return address of any function call.",
    tags: ["C++", "Assembly", "Windows", "RE"],
    links: [
      { label: "Repo", href: "https://github.com/paskalian/RetSpoofer", target: "_blank" }
    ],
    icon: <Cpu size={18} />,
  },
  {
    title: "Standby",
    desc: "Configurable easy to use dll injector.",
    tags: ["C++", "Assembly", "Windows", "RE"],
    links: [
      { label: "Repo", href: "https://github.com/paskalian/Standby", target: "_blank" }
    ],
    icon: <Cpu size={18} />,
  },
  {
    title: "PE-Parser",
    desc: "Portable Executable (PE) files parser.",
    tags: ["C++", "Assembly", "Windows", "RE"],
    links: [
      { label: "Repo", href: "https://github.com/paskalian/PE-Parser", target: "_blank" }
    ],
    icon: <Cpu size={18} />,
  },
  {
    title: "ThreadJacker",
    desc: "Make any function run with a hijacked thread.",
    tags: ["C++", "Assembly", "Windows", "RE"],
    links: [
      { label: "Repo", href: "https://github.com/paskalian/ThreadJacker", target: "_blank" }
    ],
    icon: <Cpu size={18} />,
  },
  {
    title: "Ennoble",
    desc: "Easy to use offset dumper.",
    tags: ["C++", "Assembly", "Windows", "RE"],
    links: [
      { label: "Repo", href: "https://github.com/paskalian/Ennoble", target: "_blank" }
    ],
    icon: <Cpu size={18} />,
  },
];

export default function REHome() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <Terminal size={18} />
          <span>github.com / <span className="highlight">paskalian</span></span>
        </div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="actions">
          <button className="btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> 
            {theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>} {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
          <a href="https://github.com/paskalian" className="btn" target="_blank" rel="noopener noreferrer"> <Github size={16}/> GitHub</a>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1>
			Paskalian <br/>
            <span className="gradient">Udemy Instructor and Researcher</span>
          </h1>
		  <br/>
          <p>
            This repo and site are focused on <strong>learning</strong>, <strong>research</strong>, and <strong>defense</strong>.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <div key={i} className="card">
                <h3>{p.icon} {p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                </div>
				<div className="links">
				  {p.links.map((l, k) => (
					<a
					  key={k}
					  href={l.href}
					  className="btn small"
					  target="_blank"
					  rel="noopener noreferrer"
					>
					  {l.label}
					</a>
				  ))}
				</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
		  <a href="https://github.com/paskalian?tab=repositories" className="btn" target="_blank" rel="noopener noreferrer">. . .</a>
          <h2>Contact</h2>
        <div className="contact">
		  <a href="https://github.com/paskalian" className="btn" target="_blank" rel="noopener noreferrer"><FaGithub size={16}/> GitHub</a>
		  <a href="https://discord.gg/Fh2UUAVyDk" className="btn" target="_blank" rel="noopener noreferrer"><FaDiscord size={16}/> Discord</a>
		  <a href="https://www.udemy.com/user/ps-k-4/" className="btn" target="_blank" rel="noopener noreferrer">Udemy</a>
		</div>
		<div className="contact">
		  <a href="https://www.instagram.com/paskal.1337/" className="btn" target="_blank" rel="noopener noreferrer"><FaInstagram size={16}/> Instagram</a>
		  <a href="https://www.tiktok.com/@paskal.1337" className="btn" target="_blank" rel="noopener noreferrer"><FaTiktok size={16}/> TikTok</a>
		  <a href="https://www.youtube.com/@paskal2193" className="btn" target="_blank" rel="noopener noreferrer"><FaYoutube size={16}/> YouTube</a>
		</div>
        </section>

        <section className="ethics">
          <h2><Shield size={18}/> Ethics & Legal Notice</h2>
          <ul>
            <li>Content is strictly for <strong>educational and defensive</strong> purposes.</li>
            <li>Compliance with laws and terms of service is essential.</li>
            <li>Shared code is provided <em>AS-IS</em>.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} paskalian — official website</span>
      </footer>
    </div>
  );
}
