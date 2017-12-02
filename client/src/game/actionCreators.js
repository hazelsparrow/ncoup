import ACTION_TYPES from './actionTypes';
import GAME_STATUS from './gameStatus';

function startGame(game) {
  return {
    name: 'Start game',
    actionType: ACTION_TYPES.START_GAME,
    disabled: game.players.length <= 1
    // execute: function(game) {
    //   game.send(this)
    // }
  };
}

function abandonGame(game) {
  return {
    name: game.status === GAME_STATUS.IN_PROGRESS ? 'Abandon game' : 'Leave',
    actionType: ACTION_TYPES.ABANDON_GAME,
    execute: function(game) {
      game.endGame();
    }
  };
}

export {
  startGame,
  abandonGame
}
