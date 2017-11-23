import React from 'react'
import PlayerInfo from '../player-info'

class Players extends React.Component {
  handleClickCB = (index, value) => {
    this.props.handleClick(index, value);
  }

  render() {
    return [
      <h1>Players</h1>,
      <ul className="media-list">
        {
          this.props.listado.map((player) => {
            return <PlayerInfo key={ player.id }
                                id={ player.id }
                                name={ player.fullName }
                                picture={ player.pic }
                                position={ player.position }
                                onToggle={ this.handleClickCB }
                                isToggleOn={ this.props.parentState[player.id] } />
          })
        }
      </ul>
    ]
  }
}

export default Players