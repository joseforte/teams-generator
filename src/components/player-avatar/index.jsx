import React from 'react'

class PlayerAvatar extends React.Component {
  render() {
  	return (
      <figure className="media-left">
        <img className="media-object" width="64px" alt={`${this.props.picture}`} src={`${this.props.picture}`} />
      </figure>
    )
  }
}

// We export it to use it in our App, like for example, in the player module
export default PlayerAvatar