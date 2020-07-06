import React, { useRef } from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';

const HitBoxOutSide = ({ onClickOutSide }) => {
  const clickRef = useRef();
  useClickOutSide(clickRef, onClickOutSide);

  return (
    <div
      className="hix-box-outside"
      ref={clickRef}
      style={{
        border: '5px dashed blue',
        height: 300,
        width: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
      }}
    >
      <p>Don't hit the box</p>
    </div>
  )
}

export default HitBoxOutSide