
'use client'
import Image from "next/image";

export default function Home() {
  // Function to handle CV view
  const handleViewCV = () => {
    // Replace this URL with the actual URL of your CV image
    const cvUrl = "/images/wk-cv.png"; // Path to your CV image in the public folder
    window.open(cvUrl, "_blank"); // Opens the image in a new tab
  };

  return (
    <div>
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              I&apos;m <span className="highlight-text">Wafa</span>, <br />
              a Web Developer
            </h1>
            <p className="home-description">
              Over the years, I have worked on a variety of projects, building responsive, scalable, and visually engaging websites.
              <br />Currently, I am diving deep into modern frameworks like <strong>Next.js</strong>, exploring Cloud AI, and expanding my knowledge
              in <strong>Autonomous AI Agents</strong> technologies to stay ahead of the curve. I believe in continuous learning and am constantly looking
              for ways to improve my skills and contribute to exciting projects.
            </p>

            <div className="button-group">
              <button className="hire-button">Hire Me</button>
              {/* Updated button to View CV */}
              <button className="portfolio-button" onClick={handleViewCV}>View CV</button>
            </div>
          </div>
          <div className="home-image">
            <Image
              src="/images/dp.jpg"
              alt="Wafa Kanwal"
              width={320}
              height={320}
              className="profile-picture"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate and dedicated Web Developer with a strong foundation in front-end and back-end technologies, including
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>TypeScript</strong>. My journey in web
          development began as a personal project and evolved into a career driven by a love for creating user-centric, high-quality
          web experiences.
        </p>
        <p>
          Over the years, I have worked on a variety of projects, building responsive, scalable, and visually engaging websites.
          Currently, I am diving deep into modern frameworks like <strong>Next.js</strong>, exploring Cloud AI, and expanding my knowledge
          in <strong>Web 3.0</strong> technologies to stay ahead of the curve. I believe in continuous learning and am constantly looking
          for ways to improve my skills and contribute to exciting projects.
        </p>
        <p>
          Outside of coding, I am passionate about collaborating with like-minded individuals to solve real-world problems through
          technology. Whether working on a personal project, collaborating with a team, or contributing to open-source, I am always
          eager to build something meaningful and impactful.
        </p>
        <p>
          Let&apos;s work together to bring innovative ideas to life and create the future of the web. I am always open to new
          opportunities, so feel free to reach out and connect with me!
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>My Skills</h2>
        <div className="grid-container">
          <div className="skill-item">
            <Image src="/images/html.png" alt="HTML" width={64} height={64} />
            <h3>HTML</h3>
            <p>90%</p>
          </div>
          <div className="skill-item">
            <Image src="/images/css.webp" alt="CSS" width={64} height={64} />
            <h3>CSS</h3>
            <p>80%</p>
          </div>
          <div className="skill-item">
            <Image src="/images/js.png" alt="JavaScript" width={64} height={64} />
            <h3>JavaScript</h3>
            <p>70%</p>
          </div>
          <div className="skill-item">
            <Image src="/images/ts.png" alt="TypeScript" width={64} height={64} />
            <h3>TypeScript</h3>
            <p>80%</p>
          </div>
          <div className="skill-item">
            <Image src="/images/next.png" alt="Next.js" width={64} height={64} />
            <h3>Next.js</h3>
            <p>20%</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>MY PROJECTS</h2>
        <div className="project-card-container">
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/simple-calculator" target="_blank" rel="noopener noreferrer">
              <Image src="/images/cal.jpg" alt="Calculator" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Calculator</h3>
              <p>A simple calculator project built with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Atm" target="_blank" rel="noopener noreferrer">
              <Image src="/images/atm.jpg" alt="ATM Machine" width={400} height={200} />
            </a>
            <div className="content">
              <h3>ATM Machine</h3>
              <p>An ATM machine simulation built with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/To-Do-App" target="_blank" rel="noopener noreferrer">
              <Image src="/images/todo.jpg" alt="ToDo App" width={400} height={200} />
            </a>
            <div className="content">
              <h3>ToDo App</h3>
              <p>A ToDo app to manage tasks and keep track of daily activities.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Count-Down-Timer" target="_blank" rel="noopener noreferrer">
              <Image src="/images/ct.jpg" alt="Countdown Timer" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Countdown Timer</h3>
              <p>A countdown timer built with HTML, CSS, and JavaScript that lets you set a timer for a specific event or goal.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Next.js-Assignment1" target="_blank" rel="noopener noreferrer">
              <Image src="/images/web.png" alt="Web App" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Web App</h3>
              <p>A modern web application built using Next.js, React, and Tailwind CSS.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Next.js-Assignment2" target="_blank" rel="noopener noreferrer">
              <Image src="/images/figma.png" alt="Figma Next.js" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Figma Next.js</h3>
              <p>A Figma design converted into a responsive Next.js web application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>
            I&apos;m always excited to connect with new people, whether it&apos;s for
            collaborations, networking, or just to chat about cool projects. If
            you have any inquiries or would like to discuss a potential
            partnership, feel free to reach out!
          </p>
          <p className="email">
            Email: <a href="mailto:wafakanwal@email.com">wafakanwal@email.com</a>
          </p>

          <p className="availability">
            I&apos;m currently open to freelance opportunities and collaborations.
            Let&apos;s create something amazing together!
          </p>

          <div className="social-icons">
            <p className="social-heading">
              You can also connect with me on these platforms:
            </p>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/wafa-kanwal-467376279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                alt="LinkedIn"
                width={35}
                height={35}
              />
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/WafaaKanwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
