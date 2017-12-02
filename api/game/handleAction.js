const {Card} = require('../models');

function startGame(action, room) {
  for (const p of room.players) {
    p.coins = 2;
    p.cards = [
      new Card({
        character: 'ambassador'
      }),
      new Card({
        character: 'captain'
      })
    ]
  }
}

function handleAction(action, room) {
  switch (action.actionType) {
    case 'START_GAME':
      startGame(action, room);
      break;
    default:
      throw new Error(`Action ${action.actionType} is not supported.`);
  }
}

module.exports = handleAction;
