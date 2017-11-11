import {extendObservable, action} from 'mobx';
import {api} from '../../core';

class LobbyStore {
  constructor() {
    extendObservable(this, {
      hintVisible: false,
      nameChangeFormVisible: false,
      editName: '',
      player: {
        id: '',
        name: 'Anonymous'
      }
    });
  }

  didMount() {
    this.restoreFromLocalStorage();
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
    this.editName = this.player.name;
  });

  hideChangeNameForm = action(async () => {
    this.nameChangeFormVisible = false;
  });

  updatePlayerName = action(name => {
    this.editName = name;
  });

  saveToLocalStorage(player) {
    window.localStorage.setItem('ncoupPlayerId', this.player.id);
    window.localStorage.setItem('ncoupPlayerName', this.player.name);
  }

  restoreFromLocalStorage() {
    this.player.id = window.localStorage.getItem('ncoupPlayerId') || this.player.id;
    this.player.name = window.localStorage.getItem('ncoupPlayerName') || this.player.name;
  }

  createOrUpdatePlayer = action(async () => {
    this.player.name = this.editName;
    if (this.player.id) {
      await api.patch(`players/${this.player.id}`, this.player);
    } else {
      const response = await api.post('players', this.player);
      this.player.id = response.data._id;
    }
    this.saveToLocalStorage(this.player);
    this.hideChangeNameForm();
  });
}

export default LobbyStore;
