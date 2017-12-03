const {Card} = require('../models'),
      _ = require('lodash');

function startGame(action, room) {
  for (const p of room.players) {
    p.coins = 2;
    p.cards = [
      new Card({
        character: 'contessa'
      }),
      new Card({
        character: 'duke'
      })
    ]
  }
}

function takeOneCoin(action, room) {
  console.log(action);
  const actor = _.find(room.players, p => p._id.equals(action.actor._id));
  console.log(room.players);
  console.log(action.actor._id)
  console.log(actor);
  actor.coins += 1;
}

function takeTwoCoins(action, room) {
  console.log(action);
  const actor = _.find(room.players, {_id: action.actor._id});
  console.log(room.players);
  console.log(action.actor._id)
  console.log(actor);
  actor.coins += 1;
}

function takeThreeCoins(action, room) {
  console.log(action);
  const actor = _.find(room.players, {_id: action.actor._id});
  console.log(room.players);
  console.log(action.actor._id)
  console.log(actor);
  actor.coins += 1;
}

function handleAction(action, room) {
  switch (action.actionType) {
    case 'START_GAME':
      startGame(action, room);
      break;
    case 'ONE':
      takeOneCoin(action, room);
      break;
    case 'TWO':
      takeTwoCoins(action, room);
      break;
    case 'THREE':
      takeThreeCoins(action, room);
      break;
    default:
      throw new Error(`Action ${action.actionType} is not supported.`);
  }
}

module.exports = handleAction;
