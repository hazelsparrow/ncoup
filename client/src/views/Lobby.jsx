import React from 'react';
import {observer} from 'mobx-react';
import NewRoom from './NewRoom';

const Lobby = observer(({}) => {
  return (
    <div className=''>
      <div className=''>
        This is a lobby.
      </div>
      <NewRoom/>
    </div>
  );
});

export default Lobby;
