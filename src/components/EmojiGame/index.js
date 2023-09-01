/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

const shuffledEmojisList = list => {
  console.log('list=', list)
  return list.sort(() => Math.random() - 0.5)
}

class EmojiGame extends Component {
  state = {ListOfEmojis: this.props}

  onClickEmojiFunction = () => {
    const {ListOfEmojis} = this.state
    const {emojisList} = ListOfEmojis
    console.log('inside function', emojisList)
    this.setState({
      emojisList: shuffledEmojisList(emojisList),
    })
  }

  render() {
    const {ListOfEmojis} = this.state
    const {emojisList} = ListOfEmojis
    console.log('Emojis list', ListOfEmojis)
    console.log('actaul list', emojisList)
    return (
      <>
        <NavBar />
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
        </div>
      </>
    )
  }
}
export default EmojiGame
