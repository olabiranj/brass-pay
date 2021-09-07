import React from 'react';

function Button({ styleClass, func, name }: buttonTypes) {
  return (
    <button className={`btn ${styleClass}`} onClick={() => func && func()}>
      {name}
    </button>
  );
}

export default Button;
