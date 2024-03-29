import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
      return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">RNGesus</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0" action="https://roll20.net/compendium/dnd5e/searchbook/" method="GET" target="_blank">
              <input className="form-control mr-sm-2" type="text" name="terms" placeholder="Search Roll20" aria-label="Search"></input>
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      );
  }

}

export default NavBar;
