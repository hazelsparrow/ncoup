import React from 'react';
import {observer} from 'mobx-react';

const HARDCODED_LOG = [
  {
    'text': 'The game has commenced.'
  },
  {
    'text': 'Greg takes three coins.'
  }
]

const LogEntry = observer(({entry}) => {
  return (
    <div className='py1'>
      {entry.text}
    </div>
  );
});

const GameLog = observer(({store}) => {
  console.log(store);
  return (
    <div className='bg-white p2 GameLog'>
      {HARDCODED_LOG.map(l => <LogEntry entry={l}/>)}
    </div>
  );
});

export default GameLog;
