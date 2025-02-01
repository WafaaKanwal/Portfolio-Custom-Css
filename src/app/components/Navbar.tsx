"use client"; // Mark this component as a Client Component

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo">
            <Link href="/">Wafa Kanwal</Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div
            className={`navbar__hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navbar Links */}
          <ul className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}