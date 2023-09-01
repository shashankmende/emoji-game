// Write your code here.
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="navbar-heading">
          <div className="logo-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1>Emoji Game</h1>
          </div>
          <div className="scores-container">
            <p>Score: 0</p>
            <p>Top Score: 0</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
