import io from 'socket.io-client';
import {observable, extendObservable, computed, action} from 'mobx';
import Player from './Player';
import _ from 'lodash';
import ACTION_TYPES from './actionTypes';
import Action from './Action';
import STATUS_MESSAGES from './statusMessages';

const GAME_STATUS = {
  WAITING_TO_START: 'WAITING_TO_START',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

function waitingToStartActions(game) {
  return [
    {
      name: 'Start game',
      type: ACTION_TYPES.START_GAME,
      disabled: true,
      execute: function(game) {
        game.startGame();
      }
    },
    {
      name: 'Leave',
      type: ACTION_TYPES.ABANDON_GAME,
      // execute: function(game) {
      //   game.endGame();
      // }
    }
  ].map(i => new Action(i));
}

class Game {
  client;
  roomId;
  selfId;

  constructor() {
    extendObservable(this, {
      messages: [],
      players: [],
      actions: computed(() => this.getActions()),
      self: computed(() => this.getSelf()),
      status: GAME_STATUS.WAITING_TO_START,
      statusMessage: STATUS_MESSAGES.WAITING_TO_START
    });
  }

  connect() {
    this.socket = io('http://localhost:3001');
    this.selfId = window.localStorage.getItem('ncoupPlayerId');
    if (!this.selfId) {
      throw new Error('Must be authorized to join a room.');
    }

    this.socket.on('connect', () => this.onConnected());
    this.socket.on('player_connected', player => this.onPlayerConnected(player));
  }

  onConnected() {
    this.socket.emit(
      'auth',
      this.selfId,
      this.roomId
    );
  }

  onPlayerConnected(player) {
    const newPlayer = new Player(player);

    this.messages.push(`${newPlayer.name} connected.`);
    this.players.push(newPlayer);
  }

  startGame = action(() => {
    console.log('starting game!');
  });

  endGame = action(() => {
    window.location = '/';
  });

  send(action) {
    this.socket.emit(
      'action',
      action
    );
  }

  // computed

  getActions() {
    switch (this.status) {
      case 'WAITING_TO_START':
        return waitingToStartActions(this);
        break;
      default:
        throw new Error(`Game status ${this.status} is not supported.`);
    }
  }

  getSelf() {
    return _.find(this.players, {id: this.selfId});
  }
}

const singleton = new Game();

singleton.connect();

export default singleton;
