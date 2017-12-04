import React from 'react';
import {observer} from 'mobx-react';

const PlayerDeciding = observer(({store}) => {
  const player = store.game.currentAction.actor;

  return (
    <div>
      {player.name} is thinking...
    </div>
  );
});

export default PlayerDeciding;
