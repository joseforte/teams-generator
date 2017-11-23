import React from 'react'
import Player from '../player'

class Teams extends React.Component {
  render() {
    let team1 = this.props.teams.slice(0,5)
    let team2 = this.props.teams.slice(5,10)
    return [
      <div className="media">
        <div className="media-left">
          <h2>Team 1</h2>
            { team1.map((player) => {
              return <Player key={ player.id }
                                  id={ player.id }
                                  name={ player.fullName } />
            })
          }
        </div>
        <div className="media-right">
          <h2>Team 2</h2>
            { team2.map((player) => {
              return <Player key={ player.id }
                                  id={ player.id }
                                  name={ player.fullName } />
            })
          }
          </div>
      </div>
    ]
  }
}

export default Teams