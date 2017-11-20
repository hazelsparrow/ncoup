import io from 'socket.io-client';

class GameClient {
  socket;

  connect() {
    this.socket = io('http://localhost:3001', {
      path: '/socket.io',
      transports: ['websocket']
    });
  }
}

export default GameClient;
