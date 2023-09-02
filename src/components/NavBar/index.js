// Write your code here.
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {score, total, isWin} = this.props

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
          {!isWin && (
            <div className="scores-container">
              <p>Score: {score}</p>
              <p>Top Score: {total}</p>
            </div>
          )}
        </div>
      </nav>
    )
  }
}

export default NavBar
