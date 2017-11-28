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
      sortedMessages: computed(() => [...this.messages].reverse()),
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
    this.socket.on('player_connected', payload => this.onPlayerConnected(payload));
    this.socket.on('player_left', payload => this.onPlayerLeft(payload));
  }

  onConnected() {
    this.socket.emit(
      'auth',
      this.selfId,
      this.roomId
    );
  }

  onPlayerConnected({room, player}) {
    if (!this.room) {
      this.room = room;
    }

    const newPlayer = new Player(player);

    this.messages.push(`${newPlayer.name} has connected.`);
    this.players = room.players.map(p => new Player(p));

    if (newPlayer.id === this.selfId) {
      this.status = GAME_STATUS.WAITING_TO_START;
      this.statusMessage = STATUS_MESSAGES.WAITING_TO_START;
    }
  }

  onPlayerLeft({room, player}) {
    const goner = new Player(player);

    this.messages.push(`${goner.name} has left the game.`);
    this.players = room.players.map(p => new Player(p));
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
      case GAME_STATUS.LOADING:
        return [];
      case GAME_STATUS.WAITING_TO_START:
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

    return this.self.id === this.room.ownerId;
  }

  getWaitingToStartActions() {
    if (this.isOwner) {
      return concatActions(
        startGame(this),
        abandonGame(this)
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
