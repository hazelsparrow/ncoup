import io from 'socket.io-client';
import {extendObservable, computed, action} from 'mobx';
import Player from './Player';
import _ from 'lodash';
import uuid from 'uuid';
import Action from './Action';
import STATUS_MESSAGES from './statusMessages';
import GAME_STATUS from './gameStatus';
import getLogMessageFor from './getLogMessageFor';
import {
  abandonGame,
  startGame,
  takeOneCoin,
  takeTwoCoins,
  takeThreeCoins,
  coup,
  assassinate,
  steal,
  changeCards
} from './actionCreators';



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
      allowedActions: computed(() => this.getAllowedActions()),
      status: GAME_STATUS.LOADING,
      statusMessage: STATUS_MESSAGES.CONNECTING,
      countdown: 0,
      currentAction: {}
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
    this.socket.on('action_taken', payload => this.onActionTaken(payload));
  }

  onConnected() {
    this.socket.emit(
      'auth',
      this.selfId,
      this.roomId
    );
  }

  refreshRoom(room) {
    this.players = room.players.map(p => new Player(p));
    this.currentAction = room.currentAction;
    if (room.actions.length) {
      this.status = GAME_STATUS.IN_PROGRESS;
    }
  }

  onPlayerConnected({room, player}) {
    if (!this.room) {
      this.room = room;
    }

    const newPlayer = new Player(player);

    this.addLogEntry(`${newPlayer.name} has connected.`);
    this.refreshRoom(room);

    if (newPlayer.id === this.selfId) {
      this.status = GAME_STATUS.WAITING_TO_START;
      this.statusMessage = STATUS_MESSAGES.WAITING_TO_START;
    }
  }

  onPlayerLeft({room, player}) {
    const goner = new Player(player);

    this.addLogEntry(`${goner.name} has left the game.`);
    this.players = room.players.map(p => new Player(p));
  }

  addLogEntry(text) {
    this.messages.push({
      key: uuid.v4(),
      text,
      timeStamp: new Date()
    });
  }

  onActionTaken({room}) {
    this.refreshRoom(room);
    this.statusMessage = STATUS_MESSAGES.PLAYER_DECIDING;
    this.addLogEntry(getLogMessageFor(this.currentAction));
  }

  endGame = action(() => {
    window.location = '/';
  });

  send(action) {
    this.socket.emit(
      'action',
      action
    );
  }

  concatActions(...rest) {
    const array = [...rest][0];
    if (_.isArray(array)) {
      return _.map([...array], i => new Action(i(this), this));
    }

    return _.map([...rest], i => new Action(i(this), this));
  }

  // computed

  getActions() {
    switch (this.status) {
      case GAME_STATUS.LOADING:
        return [];
      case GAME_STATUS.WAITING_TO_START:
        return this.waitingToStartActions;
      case GAME_STATUS.IN_PROGRESS:
        return this.allowedActions;
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
      return this.concatActions(
        startGame,
        abandonGame
      );
    }

    return this.concatActions(
      abandonGame
    );
  }

  getAllowedActions() {
    let actions = [];

    if (this.isOwner) {
      if (this.self.coins >= 10) {
        return this.concatActions(
          coup
        );
      }

      actions.push(
        takeOneCoin,
        takeTwoCoins,
        takeThreeCoins,
        steal,
        changeCards
      );

      if (this.self.coins >= 3) {
        actions.push(assassinate);
      }

      if (this.self.coins >= 7) {
        actions.push(coup);
      }
    }

    return this.concatActions(actions);
  }
}

const singleton = new Game();

singleton.connect();

export default singleton;
