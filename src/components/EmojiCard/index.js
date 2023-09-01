// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmojiFunction} = props
  const {emojiUrl} = emoji

  const onClickEmoji = () => {
    onClickEmojiFunction()
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
