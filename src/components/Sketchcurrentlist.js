import React from 'react';
import Card from './Card';

function Sketchcurrentlist({ list }) {
  console.log(list);
  return (
    <div className="listItem">
      {list.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Sketchcurrentlist;
