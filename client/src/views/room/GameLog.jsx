import React from 'react';
import {observer} from 'mobx-react';
import GAME_STATUS from '../../game/gameStatus';

const LogEntry = observer(({entry}) => {
  return (
    <div className='py1'>
      {entry}
    </div>
  );
});

const GameLog = observer(({store}) => {
  if (store.game.status === GAME_STATUS.LOADING) return null;

  return (
    <div className='bg-white p2 GameLog'>
      {store.game.messages.map(m => <LogEntry entry={m}/>)}
    </div>
  );
});

export default GameLog;
