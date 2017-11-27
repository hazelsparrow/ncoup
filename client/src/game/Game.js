import io from 'socket.io-client';
import {observable, extendObservable, computed, action} from 'mobx';
import Player from './Player';
import _ from 'lodash';
import Action from './Action';
import STATUS_MESSAGES from './statusMessages';
import GAME_STATUS from './gameStatus';
import {
  abandonGame,
  startGame
} from './actionCreators';

function concatActions(...rest) {
  return _.map([...rest], i => new Action(i));
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
      isOwner: computed(() => this.getIsOwner()),
      waitingToStartActions: computed(() => this.getWaitingToStartActions()),
      status: GAME_STATUS.LOADING,
      statusMessage: STATUS_MESSAGES.CONNECTING
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
    setTimeout(() => {

    this.socket.emit(
      'auth',
      this.selfId,
      this.roomId
    );
  }, 2000)
  }

  onPlayerConnected(player) {
    const newPlayer = new Player(player);

    this.messages.push(`${newPlayer.name} connected.`);
    this.players.push(newPlayer);

    if (newPlayer.id === this.selfId) {
      this.status = GAME_STATUS.WAITING_TO_START;
    }
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
      case 'LOADING':
        return [];
      case 'WAITING_TO_START':
        return this.waitingToStartActions;
      default:
        throw new Error(`Game status ${this.status} is not supported.`);
    }
  }

  getSelf() {
    return _.find(this.players, {id: this.selfId});
  }

  getIsOwner() {
    if (!this.players.length || !this.self) return false;

    return this.self.id === this.players[0].id;
  }

  getWaitingToStartActions() {
    console.log('hey')
    if (this.isOwner) {
      return concatActions(
        abandonGame(this),
        startGame(this)
      );
    }

    return concatActions(
      abandonGame(this)
    );
  }
}

const singleton = new Game();

singleton.connect();

export default singleton;
