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

let emojisContainerResult
const shuffledEmojisList = list => {
  console.log('list=', list)
  return list.sort(() => Math.random() - 0.5)
}
let gameResult

class EmojiGame extends Component {
  state = {
    ListOfEmojis: this.props,
    idsList: [],
    score: 0,
    total: 0,
    isWin: false,
    toDisplay: false,
  }

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
      isWin: false,
      toDisplay: false,
    })
    gameResult = ''
    emojisContainerResult = ''
  }

  onClickEmojiFunction = id => {
    const {ListOfEmojis, idsList, score} = this.state
    const isIdExist = idsList.includes(id)
    console.log(isIdExist)
    const {emojisList} = ListOfEmojis
    const givenListLength = emojisList.length
    const lengthOfIdsList = idsList.length
    if (isIdExist === false) {
      console.log('inside function', emojisList)

      if (lengthOfIdsList === givenListLength - 1) {
        this.setState({
          ListOfEmojis,
          idsList: [...idsList, id],
          score: score + 1,
          isWin: true,
          toDisplay: true,
        })

        gameResult = (
          <WinOrLoseCard
            result="win"
            onClickPlayAgainBtn={this.onClickPlayAgainBtn}
            score={score + 1}
          />
        )
      } else {
        this.setState({
          emojisList: shuffledEmojisList(emojisList),
          idsList: [...idsList, id],
          score: score + 1,
          isWin: false,
          toDisplay: false,
        })
      }
    } else {
      this.setState({
        emojisList,
        isWin: true,
        toDisplay: true,
      })
      gameResult = (
        <WinOrLoseCard
          result="loss"
          onClickPlayAgainBtn={this.onClickPlayAgainBtn}
          score={score}
        />
      )
      emojisContainerResult = ''
    }
  }

  render() {
    const {ListOfEmojis, idsList, score, total, isWin, toDisplay} = this.state
    const {emojisList} = ListOfEmojis
    console.log('Is win =', isWin)
    console.log('idslist = ', idsList)

    if (toDisplay === false) {
      console.log('len = 12 and win')
      emojisContainerResult = (
        <ul className="emojis-container">
          {emojisList.map(each => (
            <EmojiCard
              emoji={each}
              key={each.id}
              onClickEmojiFunction={this.onClickEmojiFunction}
            />
          ))}
        </ul>
      )
    } else {
      emojisContainerResult = ''
    }

    return (
      <>
        <NavBar score={score} total={total} isWin={isWin} />
        <div className="emoji-game-container">
          {emojisContainerResult}
          {gameResult}
        </div>
      </>
    )
  }
}
export default EmojiGame
