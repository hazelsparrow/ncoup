import React from 'react';
import {observer} from 'mobx-react';
import ActionButton from './ActionButton';
import ACTION_TYPES from '../../../game/actionTypes';

function getClassName(actionType) {
  switch (actionType) {
    case ACTION_TYPES.START_GAME:
      return 'Action--start-game';
    case ACTION_TYPES.ABANDON_GAME:
      return 'Action--abandon-game'
    default:
      return '';
  }
}

const Action = observer(({action, store}) => {
  return (
    <ActionButton onClick={() => action.execute(store.game)}
                  className={getClassName(action.type)}
                  disabled={action.disabled}>
      {action.name}
    </ActionButton>
  );
});

export default Action;
