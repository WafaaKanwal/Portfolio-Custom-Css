

import Image from "next/image";

export default function projects() {
  return (
   <div>
      <section id="projects">
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