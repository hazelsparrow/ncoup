import ACTION_TYPES from './actionTypes';
import _ from 'lodash';

const ONE_COIN_MESSAGES = [
 'plays it safe and takes one coin.',
 'takes one measly coin.',
 'is really living their life to the full and takes one coin.'
];

const TWO_COIN_MESSAGES = [
 'takes two coins and smiles like an idiot.',
 'hopes that no one would notice them taking two coins.'
];

const THREE_COIN_MESSAGES = [
 'claims to have a Duke, which is ridiculous, and takes three coins.'
];

function getLogMessageFor(action) {
  switch (action.actionType) {
    case ACTION_TYPES.START_GAME:
      return 'Game has started.';
    case ACTION_TYPES.ONE_COIN:
      return `${action.actor.name} ${_.sample(ONE_COIN_MESSAGES)}`;
    case ACTION_TYPES.TWO_COINS:
      return `${action.actor.name} ${_.sample(TWO_COIN_MESSAGES)}`;
    case ACTION_TYPES.THREE_COINS:
      return `${action.actor.name} ${_.sample(THREE_COIN_MESSAGES)}`;
  }
}

export default getLogMessageFor;
