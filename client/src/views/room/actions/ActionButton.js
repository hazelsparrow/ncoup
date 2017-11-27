import React from 'react';
import {observer} from 'mobx-react';
import {Button} from '../../../components';
import './index.css';

const ActionButton = observer(({onClick, children, className, disabled = false}) => {
  return (
    <div className='Action pl2 pt2 inline-block'>
      <Button onClick={onClick}
              disabled={disabled}
              className={`Btn Action-btn ${className}`}>
        {children}
      </Button>
    </div>
  );
});

export default ActionButton;
