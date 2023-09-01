// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmojiFunction} = props
  const {id, emojiUrl, emojiName} = emoji

  const onClickEmoji = () => {
    onClickEmojiFunction(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
