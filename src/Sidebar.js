import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="left">
      <h1>Menu</h1>
      <br></br>
      <ul>
          <li>
              Home
          </li>
          <li>
              Setting
          </li>
          <li>
              Help
          </li>
          <li>
              Exit
          </li>
      </ul>
    </div>
  );
}

export default Sidebar;
