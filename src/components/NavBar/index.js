// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, totalScore} = props

  return (
    <nav className="nav-card">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {score === 12 ? (
        ''
      ) : (
        <div className="score-container">
          <p className="score-text">Score: {score}</p>
          <p className="score-text">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
