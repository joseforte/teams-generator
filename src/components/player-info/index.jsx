import React from 'react'
import PlayerAvatar from '../player-avatar'

class PlayerInfo extends React.Component {
  // passing data from the child to the parent
  handleClick = (event) => {            // arrow functions allows us to avoid using .bind when invoking,
    var value = !this.props.isToggleOn; // as it will retain the context of where it is called.

    this.props.onToggle(this.props.id, value);  // updating the state for a player in its parent state
  }

  render() {
    return(
      <li className="media" onClick={ this.handleClick }>
        <PlayerAvatar picture={this.props.picture} />
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            <span className="label label-info">{this.props.position} </span>
          </p>
        </div>
          <div className="media-right">
            <button className="square"> { this.props.isToggleOn ? 'X' : '' } </button>
          </div>
        <hr/>
      </li>
    )
  }
}

export default PlayerInfo