import React, { useState, useCallback, useMemo } from 'react';

function Demo({ items }) {
  const calculateTotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  const handleClick = useCallback(() => {
    console.log('Button clicked ');
  }, []); 

  return (
    <div>
      <p>Total Price: {calculateTotal}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default Demo