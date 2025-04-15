import React from 'react';
import './Container.css';

function Container({
  direction = "row",
  header = "",
  textPosition = "left",
  contentPosition = "right",
  children
}) {
  return (
    <div className={`container ${direction}`}>
      {header && <h2 className={`text-${textPosition}`}>{header}</h2>}
      <div className={`content-${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
