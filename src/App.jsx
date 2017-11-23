import React, { Component } from 'react';
import Players from './components/players'
import Teams from './components/teams'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home : true
      //selected : [] // I'm going to save here the state of each player on the list
    };

    this.players = [
      { id: 1, fullName: "Piqué", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_8639.png" },
      { id: 2, fullName: "M. ter Stegen", position: "Goal keeper", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_61672.png" },
      { id: 3, fullName: "J. Cillessen", position: "Goal keeper", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_38635.png" },
      { id: 4, fullName: "L. Messi", position: "Offense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_7511.png" },
      { id: 5, fullName: "J. Mascherano", position: "Offense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_7056.png" },
      { id: 6, fullName: "S. Umtiti", position: "Offense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_45330.png" },
      { id: 7, fullName: "T. Vermaelen", position: "Middle", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_6263.png" },
      { id: 8, fullName: "Jordi Alba", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_40425.png" },
      { id: 9, fullName: "L. Digne", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_45089.png" },
      { id: 10, fullName: "Marc Cucurella", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_116575.png" },
      { id: 11, fullName: "Nélson Semedo  ", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_108696.png" },
      { id: 12, fullName: "Sergi Roberto  ", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_42892.png" },
      { id: 13, fullName: "Aleix Vidal", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_58829.png" },
      { id: 14, fullName: "Busquets", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_38568.png" },
      { id: 15, fullName: "I. Rakitić", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_36625.png" },
      { id: 16, fullName: "Iniesta", position: "Defense", pic: "http://www.pesmaster.com/pes-2018/graphics/players/player_4073.png" },
    ]
  }

  handleClickCB = (index, value) => {
    var newState = {};
    newState[index] = value;

    this.setState(newState);
  }


  generateTeams = () => {
    this.teams = this.shufflbert(this.players).splice(1,10)
    
    return this.teams;
  }

  shufflbert = (list) => { // by Alberto Masuelli
    var randomized = [];
    var copy = list.slice();
    while(copy.length)
      randomized.push(
        copy.splice(parseInt(Math.random() * copy.length, 10), 1)[0]
      );
    return randomized;
  }

  goHome = () => {
    this.setState({home: true});
  }

  goTeams = () => {
    this.generateTeams()
    this.setState({home: false});
  }

  render() {
    if (this.state.home) { // im in Home
      return [
        <button onClick={ () => this.goTeams() } >TeamSelector button</button>,
        <Players listado={ this.players } handleClick={ this.handleClickCB } parentState={ this.state }/>
      ];
    } else { // im in Teams
      return [
        <button onClick={ () => this.goHome() } >Home</button>,
        <Teams teams={ this.teams} />
      ];
    }
  }
}

export default App;
