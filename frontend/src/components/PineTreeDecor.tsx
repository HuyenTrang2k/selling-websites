import React from 'react';

function PineTree() {
  return (
    <div className='pine-tree fixed bottom-0 left-0 right-0 flex justify-center z-[-1]'>
      <img
        className='pine-tree-left absolute bottom-0 left-1vw cursor-pointer animate-shake transform matrix[-0.99,-0.14,-0.14,0.99,0,0] z-2'
        src={'/src/assets/images/light-pine-tree.png'}
        alt='Pine Tree'
      />
      <img
        className='pine-tree-right absolute bottom-0 right-1vw cursor-pointer animate-shake transform rotate-[-8.21deg] z-2'
        src={'/src/assets/images/pine-tree.png'}
        alt='Pine Tree'
      />
      <img
        className='santa-left absolute bottom-0 left-0 cursor-pointer z-2 w-6vw'
        src={'/src/assets/images/santa-left.png'}
        alt='Santa Claus'
      />
      <img
        className='santa-right absolute bottom-0 right-0 cursor-pointer z-2 w-3vw'
        src={'/src/assets/images/santa-right.png'}
        alt='Santa Claus'
      />
    </div>
  );
}

export default PineTree;
