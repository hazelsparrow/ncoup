import React from 'react';
import {observer} from 'mobx-react';
import GAME_STATUS from '../../game/gameStatus';
import moment from 'moment';

const LogEntry = observer(({entry}) => {
  return (
    <div className='py1'>
      <span className='subtle'>[{moment(entry.timeStamp).format('hh:mm')}]</span> {entry.text}
    </div>
  );
});

const GameLog = observer(({store}) => {
  if (store.game.status === GAME_STATUS.LOADING) return null;

  return (
    <div className='bg-white p2 GameLog'>
      {store.game.sortedMessages.map(m => <LogEntry key={m.key} entry={m}/>)}
    </div>
  );
});

export default GameLog;
