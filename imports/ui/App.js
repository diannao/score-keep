import React from 'react';

import Player from './Player';
import AddPlayer from './AddPlayer';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <TitleBar title={this.props.title} subtitle="Created by Andrew Mead"/>

      <div className="wrapper">
        <PlayerList players={this.props.players}/>

        <AddPlayer/>
      </div>
    </div>
  );
}
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};