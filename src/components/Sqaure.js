import React from 'react';

const Sqaure = ({value , onClick , isWinningSquare }) => {
  return (
    <button
        type="button"
        className='square'
        onClick={onClick}
        style={{fontWeight : isWinningSquare ? 'bold' : 'normal'}}
    >
        {value}
    </button>
  )
}

export default Sqaure