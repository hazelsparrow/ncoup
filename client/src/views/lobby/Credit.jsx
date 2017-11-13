import React from 'react';
import {observer} from 'mobx-react';

const Credit = observer(({}) => {
  return (
    <div className='right mt2 h6'>
      built by <a href='http://catchsparrow.com/gregory-vorobyev/'>hazelsparrow</a> | <a href='https://github.com/hazelsparrow/ncoup' className='text-primary'><i class="fa fa-github" aria-hidden="true"></i></a> | <a href='https://www.linkedin.com/in/gregoryvorobyev/'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
    </div>
  );
});

export default Credit;
