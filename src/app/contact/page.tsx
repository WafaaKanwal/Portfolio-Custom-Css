import Image from 'next/image';

export default function Contact() {
  return (
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
              width={32}
              height={32}
            />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/WafaaKanwal?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
