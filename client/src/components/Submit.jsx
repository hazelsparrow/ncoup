import React from 'react';
import {observer} from 'mobx-react';
import Button from './Button';

const Submit = observer(({type, children, ...rest}) => {
  return (
    <Button type='submit' {...rest}>
      {children}
    </Button>
  );
});

export default Submit;
