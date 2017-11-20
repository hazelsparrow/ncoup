import React from 'react';
import {observer} from 'mobx-react';

// const HARDCODED_LOG = [
//   {
//     'text': 'The game has commenced.'
//   },
//   {
//     'text': 'Greg takes three coins.'
//   }
// ]

const LogEntry = observer(({entry}) => {
  return (
    <div className='py1'>
      {entry}
    </div>
  );
});

const GameLog = observer(({store}) => {
  // console.log(store);
  return (
    <div className='bg-white p2 GameLog'>
      {store.game.messages.map(m => <LogEntry entry={m}/>)}
    </div>
  );
});

export default GameLog;
