import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="logo">
          <li></li>
        </ul>
        <ul className="links">
          <li>About</li>
          <li>Notes</li>
          <li>Projects</li>
        </ul>
      </div>
    );
  }
}
