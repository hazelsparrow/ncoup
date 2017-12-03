import React from 'react';
import {observer} from 'mobx-react';
import _ from 'lodash';
import GAME_STATUS from '../../game/gameStatus';

const RANDOM_ICONS = [
  'fa fa-globe',
  'fa fa-leaf',
  'fa fa-glass',
  'fa fa-fighter-jet',
  'fa fa-car',
  'fa fa-umbrella',
  'fa fa-paper-plane-o'
];

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

const PlayerStatus = observer(({player, store}) => {
  return (
    <div className={`mb1 p1 ${STYLES_BY_STATUS[player.status]}`}>
      {player.status && <i className={`${ICONS_BY_STATUS[player.status]} h1`} aria-hidden="true"></i>}
      {store.game.status === GAME_STATUS.WAITING_TO_START && <i className={`${_.sample(RANDOM_ICONS)} h1`} aria-hidden="true"></i>}
    </div>
  );
});

const Coins = observer(({player}) => {
  if (!player.coins) return '-';

  return (
    <div>
      <div className='h5'>{player.coins}</div>
      <div>
        {[...Array(player.coins)].map((e, i) => <i className='fa fa-diamond inline-block h6' aria-hidden='true'></i>)}
      </div>
    </div>
  );
});

const CHARACTER_ICONS = {
  'captain': 'fa fa-copyright',
  'ambassador': 'fa fa-globe',
  'assassin': 'fa fa-user-secret',
  'contessa': 'fa fa-shield',
  'duke': 'fa fa-bank',
  'unknown': 'fa fa-question-circle-o'
}

const Card = observer(({card}) => {
  return (
    <div className=''>
      <i className={CHARACTER_ICONS[card.character]} aria-hidden='true'></i>
    </div>
  );
});

const Cards = observer(({player}) => {
  if (!player.cards.length) return '-';

  return (
    <div>
      {player.cards.map(c => <Card card={c}/>)}
    </div>
  );
});

const Player = observer(({player, store}) => {
  return (
    <div className={`Player inline-block border rounded box-shadow center mr2 mt2 ${CONTAINER_CLASS_BY_STATUS[player.status]}`}>
      <PlayerStatus player={player} store={store}/>
      <p className='truncate h4 bold secondary'>{player.name}</p>
      <div className='border-top mt1'>
        <div className='col col-6'>
          <div className='p1 h3 center'>
            <Cards player={player}/>
          </div>
        </div>
        <div className='col col-6 border-left'>
          <div className='p1 h3 center'>
            <Coins player={player}/>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Player;
