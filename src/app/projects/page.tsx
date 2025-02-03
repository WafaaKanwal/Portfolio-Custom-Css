import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        {/* Live Projects Section */}
        <div className="live-projects-section">
          <h2>Live Projects</h2>
          <div className="live-projects-container">
            <div className="live-project-card">
              <a href="https://dynamic-blog-wk.vercel.app/" target="_blank">
                <Image src="/images/live2.png" alt="Live Project 1" width={400} height={200} />
              </a>
              <div className="content">
                <h3>Dynamic Blog</h3>
                <p>A dynamic blog website built with Next.js, featuring seamless navigation, dynamic routing, and an interactive comment section for a professional and engaging user experience.</p>
              </div>
            </div>
          

            <div className="live-project-card">
              <a href="https://your-vercel-link-2.vercel.app" target="_blank">
                <Image src="/images/live1.png" alt="Live Project 2" width={400} height={200} />
              </a>
              <div className="content">
                <h3>Dynamic E-Commerce Website with Custom API</h3>
                <p>A custom e-commerce website built with Next.js, leveraging a custom API for seamless product management, dynamic shopping experiences, and a professional design.</p>
              </div>
            </div>

            <div className="live-project-card">
              <a href="https://html-css-website-ruby.vercel.app/" target="_blank">
                <Image src="/images/live4.png" alt="Live Project 2" width={400} height={200} />
              </a>
              <div className="content">
                <h3>Responsive HTML & CSS Website</h3>
                <p>A responsive website built using HTML and CSS, ensuring a clean design, smooth user experience, and cross-device compatibility.</p>
              </div>
            </div>

            <div className="live-project-card">
              <a href="https://milestone4-editable-resume-amber.vercel.app/" target="_blank">
                <Image src="/images/live3.png" alt="Live Project 2" width={400} height={200} />
              </a>
              <div className="content">
                <h3>Editable Resume Builder</h3>
                <p>An editable resume builder built with Next.js, allowing users to create, customize, and generate professional resumes dynamically with a seamless user experience.</p>
              </div>
            </div>

            <div className="live-project-card">
              <a href="https://next-js-multi-pages-website-assignment-1.vercel.app/" target="_blank">
                <Image src="/images/live5.png" alt="Live Project 2" width={400} height={200} />
              </a>
              <div className="content">
                <h3>Next.js Component-Based Website</h3>
                <p>A modular website built with Next.js, utilizing reusable components for a scalable, efficient, and maintainable web experience..</p>
              </div>
            </div>
            {/* Add more live project cards as needed */}
          </div>
        </div>

        {/* Other Projects Section */}
        <h2>My Projects</h2>
        <div className="project-card-container">
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/simple-calculator" target="_blank">
              <Image src="/images/cal.jpg" alt="Calculator" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Calculator</h3>
              <p>A simple calculator project built with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Atm" target="_blank">
              <Image src="/images/atm.jpg" alt="ATM Machine" width={400} height={200} />
            </a>
            <div className="content">
              <h3>ATM Machine</h3>
              <p>An ATM machine simulation built with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/To-Do-App" target="_blank">
              <Image src="/images/todo.jpg" alt="ToDo App" width={400} height={200} />
            </a>
            <div className="content">
              <h3>ToDo App</h3>
              <p>A ToDo app to manage tasks and keep track of daily activities.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Count-Down-Timer" target="_blank">
              <Image src="/images/ct.jpg" alt="Countdown Timer" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Countdown Timer</h3>
              <p>A countdown timer built with HTML, CSS, and JavaScript that lets you set a timer for a specific event or goal.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Next.js-Assignment1" target="_blank">
              <Image src="/images/web.png" alt="Web App" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Web App</h3>
              <p>A modern web application built using Next.js, React, and Tailwind CSS.</p>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/WafaaKanwal/Next.js-Assignment2" target="_blank">
              <Image src="/images/figma.png" alt="Figma Next.js" width={400} height={200} />
            </a>
            <div className="content">
              <h3>Figma Next.js</h3>
              <p>A Figma design converted into a responsive Next.js web application.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}