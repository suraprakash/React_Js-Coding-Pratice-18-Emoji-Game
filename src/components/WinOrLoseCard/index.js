// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainGame} = props
  let {totalScore} = props

  const resultEmojiImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const againPlay = () => {
    playAgainGame()
  }
  const resultText = score === 12 ? 'You Won' : 'You Lose'
  const scoreBoard = score === 12 ? 'Best Score' : 'Score'
  totalScore = score === 12 ? 12 : totalScore

  return (
    <div className="result-container">
      <img src={resultEmojiImg} alt="win or lose" className="result-img" />
      <div className="score-result-container">
        <h1 className="head-result">{resultText}</h1>
        <p className="score-card">{scoreBoard}</p>
        <p className="score-result-card">
          {score}/{totalScore}
        </p>
        <button type="button" className="play-btn" onClick={againPlay}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
