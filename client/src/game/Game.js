import io from 'socket.io-client';
import {observable, extendObservable} from 'mobx';
import Player from './Player';

class Game {
  client;

  constructor() {
    extendObservable(this, {
      messages: [],
      players: []
    });
  }

  connect() {
    this.socket = io('http://localhost:3001');

    this.socket.on('connect', () => this.onConnected());
    this.socket.on('player_connected', player => this.onPlayerConnected(player));
  }

  onConnected() {
    this.socket.emit('auth', window.localStorage.getItem('ncoupPlayerId'));
  }

  onPlayerConnected(player) {
    this.messages.push(`${player.name} connected.`);
    this.players.push(new Player(player));
  }
}

const singleton = new Game();

singleton.connect();

export default singleton;
