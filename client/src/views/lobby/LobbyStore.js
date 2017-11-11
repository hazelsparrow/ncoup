import {extendObservable, action} from 'mobx';
import {api} from '../../core';

class LobbyStore {
  constructor() {
    extendObservable(this, {
      hintVisible: false,
      nameChangeFormVisible: false,
      player: {
        id: '',
        name: 'Anonymous'
      }
    });
  }

  createNewRoom = action(async () => {
    const response = await api.post('rooms');
    this.router.history.push(`/rooms/${response.data.key}`);
  });

  toggleJoiningHint = action(async () => {
    this.hintVisible = !this.hintVisible;
  });

  showChangeNameForm = action(async () => {
    this.nameChangeFormVisible = true;
  });

  hideChangeNameForm = action(async () => {
    this.nameChangeFormVisible = false;
  });

  updatePlayerName = action(name => {
    this.player.name = name;
  });

  createOrUpdatePlayer() {

  }
}

export default LobbyStore;
