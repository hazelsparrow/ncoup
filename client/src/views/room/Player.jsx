import React from 'react';
import {observer} from 'mobx-react';

const STYLES_BY_STATUS = {
  current: 'TurnInProgress primary',
  waiting: '',
  done: 'success',
  eliminated: 'subtle'
};

const ICONS_BY_STATUS = {
  current: 'fa fa-refresh',
  waiting: 'fa fa-question',
  done: 'fa fa-check',
  eliminated: 'fa fa-ban'
};

const CONTAINER_CLASS_BY_STATUS = {
  current: 'bg-white ',
  waiting: 'Player-waiting',
  done: 'Player-waiting',
  eliminated: 'faded'
};

const PlayerStatus = observer(({player}) => {
  return (
    <div className={`mb1 p1 ${STYLES_BY_STATUS[player.status]}`}>
      <i className={`${ICONS_BY_STATUS[player.status]} h1`} aria-hidden="true"></i>
    </div>
  );
});

const Player = observer(({player, store}) => {
  return (
    <div className={`Player inline-block border center mr2 mt2 ${CONTAINER_CLASS_BY_STATUS[player.status]}`}>
      <PlayerStatus player={player}/>
      <p className='truncate h4 bold secondary'>{player.name}</p>
      <div className='border-top mt1'>
        <div className='col col-6 border-right'>
          {player.cards}
        </div>
        <div className='col col-6'>
          {player.coins}
        </div>
      </div>
    </div>
  );
});

export default Player;
