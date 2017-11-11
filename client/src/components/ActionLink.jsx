import React from 'react';

const ActionLink = ({onClick, children, href, className, ...rest}) => {
  return (
    <a href={href} className={className} onClick={e => {e.preventDefault(); onClick();}} {...rest}>
      {children}
    </a>
  );
};

ActionLink.defaultProps = {
  href: '#',
  onClick: () => {},
  className: ''
};

export default ActionLink;
