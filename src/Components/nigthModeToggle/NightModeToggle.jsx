import React from "react";
import "./nightmode.css";

function NightModeToggle({
  isNightMode,
  onToggle,
  isMobile = false,
  className = "",
}) {
  if (isMobile) {
    // Mobile version for menu integration
    return (
      <div className="mobile-night-toggle">
        <span className="mobile-night-toggle-label">
          {isNightMode ? "Dark Mode" : "Light Mode"}
        </span>
        <button
          onClick={onToggle}
          className={`nighty ${isNightMode ? "night-mode" : ""} ${className}`}
          aria-label={
            isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"
          }
          title={isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        >
          <span className="nighty-text">
            {isNightMode ? "Day Mode" : "Night Mode"}
          </span>
        </button>
      </div>
    );
  }

  // Desktop version (floating)
  return (
    <div className="nighty-holder">
      <button
        onClick={onToggle}
        className={`nighty ${isNightMode ? "night-mode" : ""} ${className}`}
        aria-label={isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        title={isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
      >
        <span className="nighty-text">
          {isNightMode ? "Day Mode" : "Night Mode"}
        </span>
      </button>
    </div>
  );
}

export default NightModeToggle;
