/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, allEmojiList: [], isGameOver: false}

  clickEmoji = id => {
    const {allEmojiList} = this.state
    if (allEmojiList.includes(id)) {
      this.setState({
        isGameOver: true,
      })
    } else {
      this.setState(oldValue => ({
        score: oldValue.score + 1,
      }))
      this.setState(oldValue => ({
        allEmojiList: [...oldValue.allEmojiList, id],
      }))
    }
  }

  playAgainGame = () => {
    const {score, totalScore} = this.state

    this.setState({
      score: 0,
    })
    this.setState({
      isGameOver: false,
    })
    this.setState({
      allEmojiList: [],
    })
    if (score >= totalScore) {
      this.setState({totalScore: score})
    }
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {emojisList} = this.props
    const {score, totalScore, allEmojiList, isGameOver} = this.state
    const emojiShuffled = shuffledEmojisList()

    const isGameCheck = allEmojiList.length === emojisList.length

    return (
      <div className="bg-container">
        <div className="card-container">
          <NavBar score={score} totalScore={totalScore} />
          <div className="emoji-display-container">
            {isGameOver || isGameCheck ? (
              <WinOrLoseCard
                score={score}
                totalScore={totalScore}
                playAgainGame={this.playAgainGame}
              />
            ) : (
              <ul className="emoji-list-container">
                {emojiShuffled.map(eachEmoji => (
                  <EmojiCard
                    key={eachEmoji.id}
                    eachDetails={eachEmoji}
                    clickEmoji={this.clickEmoji}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
