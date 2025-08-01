import React, { useState, useEffect } from "react";

import "./HeaderStyle.css";
import NightModeToggle from "../../Components/nigthModeToggle/NightModeToggle";

import logo from "../../assets/images/logo.png";
import code from "../../assets/work-photos/code.png";
import { FaBars } from "react-icons/fa";

function Header({ isNightMode, toggleNightMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Intersection Observer for active section detection
      const sections = ["Landing", "Services", "Work", "Contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentSection = sectionElements.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id.toLowerCase());
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Handle smooth scroll to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle home navigation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("landing");
    setIsMobileMenuOpen(false);
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${
        isNightMode ? "header--night" : ""
      }`}
    >
      <nav
        className="header__container"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo and Brand */}
        <div className="header__brand">
          <button
            className="header__logo-btn"
            onClick={scrollToTop}
            onKeyDown={(e) => handleKeyDown(e, scrollToTop)}
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Abdelrahman Emad Logo"
              className="header__logo"
            />
          </button>
          <div className="header__brand-text">
            <h1 className="header__name">Abdelrahman Emad</h1>
            <span className="header__title">
              <img className="header__code-icon" src={code} alt="Developer" />
              Front-End Developer
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="header__nav header__nav--desktop">
          {[
            { id: "Landing", label: "Home" },
            { id: "Services", label: "Services" },
            { id: "Work", label: "Work" },
            { id: "Contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id} className="header__nav-item">
              <button
                className={`header__nav-link ${
                  activeSection === id.toLowerCase()
                    ? "header__nav-link--active"
                    : ""
                }`}
                onClick={() => scrollToSection(id)}
                onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(id))}
                aria-current={
                  activeSection === id.toLowerCase() ? "page" : undefined
                }
              >
                {label}
              </button>
            </li>
          ))}
          <button
            className="header__hire-button"
            onClick={() => scrollToSection("Contact")}
          >
            Hire ME
          </button>
        </ul>
          <NightModeToggle
            isNightMode={isNightMode}
            onToggle={toggleNightMode}
          />

        {/* Mobile Menu Button */}
        <button
          className={`header__mobile-toggle ${
            isMobileMenuOpen ? "header__mobile-toggle--open" : ""
          }`}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <FaBars className="header__hamburger-icon" />
        </button>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`header__mobile-menu ${
            isMobileMenuOpen ? "header__mobile-menu--open" : ""
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Night Mode Toggle in Mobile Menu */}
          <NightModeToggle
            isNightMode={isNightMode}
            onToggle={toggleNightMode}
            isMobile={true}
          />

          <ul className="header__nav header__nav--mobile">
            {[
              { id: "Landing", label: "Home" },
              { id: "Services", label: "Services" },
              { id: "Work", label: "Work" },
              { id: "Contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id} className="header__nav-item">
                <button
                  className={`header__nav-link ${
                    activeSection === id.toLowerCase()
                      ? "header__nav-link--active"
                      : ""
                  }`}
                  onClick={() => scrollToSection(id)}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection(id))}
                  aria-current={
                    activeSection === id.toLowerCase() ? "page" : undefined
                  }
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="header__overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
