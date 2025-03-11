import React from 'react';

function NightModeToggle(isNightMode, onToggle) {
  return (
    <div>
      <button className="btn">{isNightMode ? 'Day Mode' : 'Night Mode'}</button>
    </div>
  );
}

export default NightModeToggle;
