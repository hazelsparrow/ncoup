import React from 'react';
import {observer} from 'mobx-react';
import Player from './Player';

const HARDCODED_PLAYERS = [
  {
    name: 'Greg',
    status: 'done',
    coins: 7,
    cards: 2
  },
  {
    name: 'MartyMartyMartyMartyMartyMartyMartyMarty',
    status: 'current',
    coins: 2,
    cards: 1
  },
  {
    name: 'Dan',
    status: 'waiting',
    coins: 0,
    cards: 2
  },
  {
    name: 'Steve',
    status: 'eliminated',
    coins: 0,
    cards: 0
  }
]

const Players = observer(({store}) => {
  return (
    <div className='mb2'>
      {HARDCODED_PLAYERS.map(p => <Player player={p} store={store}/>)}
    </div>
  );
});

export default Players;
