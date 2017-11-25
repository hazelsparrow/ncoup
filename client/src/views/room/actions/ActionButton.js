import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../../../components';

const ActionButton = observer(({onClick, children, disabled = false}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
});

export default ActionButton;
