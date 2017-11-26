import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../../../components';
import './index.css';

const ActionButton = observer(({onClick, children, className, disabled = false}) => {
  return (
    <Button onClick={onClick}
            disabled={disabled}
            className={`Btn ${className}`}>
      {children}
    </Button>
  );
});

export default ActionButton;
