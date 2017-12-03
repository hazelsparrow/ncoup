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
  const actor = _.find(room.players, p => p._id.equals(action.actor._id));
  actor.coins += 1;
}

function takeTwoCoins(action, room) {
  const actor = _.find(room.players, p => p._id.equals(action.actor._id));
  actor.coins += 2;
}

function takeThreeCoins(action, room) {
  const actor = _.find(room.players, p => p._id.equals(action.actor._id));
  actor.coins += 3;
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
