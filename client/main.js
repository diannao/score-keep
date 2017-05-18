import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

// Tracker.autorun(function() {
//   console.log('Players list', Players.find().fetch());
//
// });
// setTimeout(function() {
// }, 1000);

// const players = [{
//   _id: '1',
//   name: 'Lauren',
//   score: 99
// },{
//   _id: '2',
//   name: 'Cory',
//   score: -1
// },{
//   _id: '3',
//   name: 'Andrew',
//   score: -12
// }];

// const renderPlayers = (playersList) => {
//   return playersList.map((player) => {
//     return <Player key={player._id} player={player}/>;
//   });
//
//   // let numbers = [{val: 9}, {val: 2}, {val: 3}, {val: 101}];
//   //
//   // return numbers.map(function(number) {
//   //   return <p key={number.val}>{number.val}</p>;
//   // });
//
// };





Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {"score": -1, "name": 1}}).fetch();
    let positionPlayers = calculatePlayerPositions(players);

    console.log(positionPlayers);

    let title = 'Score Keep';

    ReactDOM.render(<App title={title} players={positionPlayers} />, document.getElementById('app'));  });

    // Players.insert({
    //   name: 'Vikram',
    //   score: 99
    // });

});











// //import someDefault, {greetUser, name} from './../imports/utils';
// import someDefault from './../imports/utils';
//
// console.log('log from /client/main.js');
// // console.log(greetUser());
// // console.log(name);
// console.log(someDefault);
