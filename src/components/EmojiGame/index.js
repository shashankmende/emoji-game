/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

const shuffledEmojisList = list => {
  console.log('list=', list)
  return list.sort(() => Math.random() - 0.5)
}
let gameResult

class EmojiGame extends Component {
  state = {ListOfEmojis: this.props, idsList: [], score: 0, total: 0}

  onClickPlayAgainBtn = () => {
    console.log('Play again is clicked')
    const {ListOfEmojis, score} = this.state
    let {total} = this.state

    if (score > total) {
      total = score
    }

    this.setState({
      ListOfEmojis,
      idsList: [],
      score: 0,
      total: score,
    })
    gameResult = ''
  }

  onClickEmojiFunction = id => {
    const {ListOfEmojis, idsList, score} = this.state
    const isIdExist = idsList.includes(id)
    console.log(isIdExist)
    const {emojisList} = ListOfEmojis
    const givenListLength = emojisList.length
    if (isIdExist === false) {
      console.log('inside function', emojisList)

      this.setState({
        emojisList: shuffledEmojisList(emojisList),
        idsList: [...idsList, id],
        score: score + 1,
      })
    } else {
      const lengthOfIdsList = idsList.length
      if (lengthOfIdsList === givenListLength) {
        gameResult = (
          <WinOrLoseCard
            result="win"
            onClickPlayAgainBtn={this.onClickPlayAgainBtn}
            score={score}
          />
        )
      } else {
        gameResult = (
          <WinOrLoseCard
            result="loss"
            onClickPlayAgainBtn={this.onClickPlayAgainBtn}
            score={score}
          />
        )
      }
    }
  }

  render() {
    const {ListOfEmojis, idsList, score, total} = this.state
    const {emojisList} = ListOfEmojis
    console.log('idslist = ', idsList)

    return (
      <>
        <NavBar score={score} total={total} />
        <div className="emoji-game-container">
          <ul className="emojis-container">
            {emojisList.map(each => (
              <EmojiCard
                emoji={each}
                key={each.id}
                onClickEmojiFunction={this.onClickEmojiFunction}
              />
            ))}
          </ul>
          {gameResult}
        </div>
      </>
    )
  }
}
export default EmojiGame
