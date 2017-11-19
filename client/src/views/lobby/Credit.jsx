import React from 'react';
import {observer} from 'mobx-react';

const Credit = observer(() => {
  return (
    <div className='right mt2 h6'>
      built by <a href='http://catchsparrow.com/gregory-vorobyev/'>hazelsparrow</a>&nbsp;|&nbsp;
      <a href='https://github.com/hazelsparrow/ncoup'
         title='View source on Github'
         className='text-primary'>
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>&nbsp;|&nbsp;
      <a href='https://www.linkedin.com/in/gregoryvorobyev/'
         title='Greg Vorobyev on LinkedIn'>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
    </div>
  );
});

export default Credit;
