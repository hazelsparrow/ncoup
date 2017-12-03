import React from 'react';
import {observer} from 'mobx-react';
import Player from './Player';

const Players = observer(({store}) => {
  const {players} = store.game;

  return (
    <div className='mb2'>
      {players.map(p => <Player key={p.id} player={p} store={store}/>)}
    </div>
  );
});

export default Players;
