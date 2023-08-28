// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachDetails

  const emojiTouch = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-containers">
      <button type="button" className="emoji-btn" onClick={emojiTouch}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
