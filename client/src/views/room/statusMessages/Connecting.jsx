import React from 'react';
import {observer} from 'mobx-react';

const Connecting = observer(() => {
  return (
    <div>
      <i class="fa fa-cog fa-spin fa-fw mr2" aria-hidden="true"></i>
      <span>Connecting to server...</span>
    </div>
  );
});

export default Connecting;
