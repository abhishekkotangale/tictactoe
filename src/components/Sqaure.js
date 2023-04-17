import React from 'react';

const Sqaure = ({value , onClick}) => {
  return (
    <button
        type="button"
        className='square'
        onClick={onClick}
    >
        {value}
    </button>
  )
}

export default Sqaure