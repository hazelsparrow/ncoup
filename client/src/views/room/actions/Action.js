import React from 'react';
import {observer} from 'mobx-react';
import ActionButton from './ActionButton';
import ACTION_TYPES from '../../../game/actionTypes';

const Action = observer(({action, store}) => {
  switch (action.type) {
    case ACTION_TYPES.START_GAME:
    case ACTION_TYPES.ABANDON_GAME:
      return (
        <ActionButton onClick={() => action.execute(store.game)} disabled={action.disabled}>
          {action.name}
        </ActionButton>
      );
    default:
      throw new Error(`Action type ${action.type} is not supported.`);
  }
});

export default Action;
