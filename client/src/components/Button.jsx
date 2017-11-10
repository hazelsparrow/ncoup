import React from 'react';
import {observer} from 'mobx-react';
import {extendObservable} from 'mobx';

class Button extends React.Component {
  constructor() {
    super();

    extendObservable(this, {
      disabled: false
    });
  }

  handleClick = async (cb, e) => {
    if (this.disabled) return null;

    this.disabled = true;
    try {
      e.preventDefault();
      await Promise.resolve(cb(e));
    } finally {
      this.disabled = false;
    }
  };

  render() {
    const {className, onClick, children, ...rest} = this.props;
    const {disabled} = this;

    return (
      <button className={`${className} ${disabled || this.props.disabled ? 'disabled': ''}`}
              onClick={async (e) => this.handleClick(onClick, e)} {...rest}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: 'Btn',
  onClick: () => {},
  type: 'button'
};

export default observer(Button);
