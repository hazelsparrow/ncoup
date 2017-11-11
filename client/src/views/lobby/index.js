import Lobby from './Lobby';
import LobbyStore from './LobbyStore';
import {withStore} from '../../core';

export default withStore(Lobby, LobbyStore);
