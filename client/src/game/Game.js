import io from 'socket.io-client';
import {extendObservable} from 'mobx';

class Game {
  client;
  roomId;

  constructor() {
    extendObservable(this, {
      messages: []
    });
  }

  connect() {
    this.socket = io('http://localhost:3001');

    this.socket.on('connect', () => this.onConnected());
    this.socket.on('player_connected', player => this.onPlayerConnected(player));
  }

  onConnected() {
    this.socket.emit(
      'auth',
      window.localStorage.getItem('ncoupPlayerId'),
      this.roomId
    );
  }

  onPlayerConnected(player) {
    this.messages.push(`${player.name} connected.`);
  }
}

const singleton = new Game();

singleton.connect();

export default singleton;
