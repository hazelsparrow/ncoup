const {Card} = require('../models');

function startGame(action, room) {
  console.log('====== STARTING GSME')
  room.players[0].coins = 7;
  room.players[1].coins = 11;
  for (const p of room.players) {
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
