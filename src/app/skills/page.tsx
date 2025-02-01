import Image from "next/image";
export default function skills() {
  return (
    <div>
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
    </div>
  );
}