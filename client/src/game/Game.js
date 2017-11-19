import GameClient from './GameClient';

class Game {
  client;

  connect() {
    this.client = new GameClient();
    this.client.connect();
  }
}

const singleton = new Game();

singleton.connect();

export default singleton;
