// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {result, onClickPlayAgainBtn, score} = props
  const imgUrl =
    result === 'win'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = result === 'win' ? 'You Won' : 'You lose'
  const BestScore = result === 'win' ? 'Best Score' : 'Score'
  const onClickPlayAgain = () => {
    onClickPlayAgainBtn()
  }
  let output
  if (result === 'win') {
    output = (
      <>
        <h1>You Won</h1>
        <p>Best Score</p>
      </>
    )
  } else {
    output = (
      <>
        <h1>You Lose</h1>
        <p>Score</p>
      </>
    )
  }

  return (
    <div className="result-container">
      <div>
        {output}
        <p>{score}/12</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
