import ACTION_TYPES from './actionTypes';
import GAME_STATUS from './gameStatus';

function startGame(game) {
  return {
    name: 'Start game',
    actionType: ACTION_TYPES.START_GAME,
    disabled: game.players.length <= 1
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

function takeOneCoin(game) {
  return {
    name: 'I take one coin',
    actionType: ACTION_TYPES.ONE_COIN
  }
}

function takeTwoCoins(game) {
  return {
    name: 'I take two coins',
    actionType: ACTION_TYPES.TWO_COINS
  }
}

function takeThreeCoins(game) {
  return {
    name: 'I take three coins',
    actionType: ACTION_TYPES.THREE_COINS
  }
}

function coup(game) {
  return {
    name: 'Coup!',
    actionType: ACTION_TYPES.COUP
  }
}

function assassinate(game) {
  return {
    name: 'I assassinate...',
    actionType: ACTION_TYPES.ASSASSINATE
  }
}

function steal(game) {
  return {
    name: 'I steal two coins from...',
    actionType: ACTION_TYPES.STEAL
  }
}

function changeCards(game) {
  return {
    name: 'I change my cards',
    actionType: ACTION_TYPES.CHANGE_CARDS
  }
}

export {
  startGame,
  abandonGame,
  takeOneCoin,
  takeTwoCoins,
  takeThreeCoins,
  coup,
  assassinate,
  steal,
  changeCards
}
