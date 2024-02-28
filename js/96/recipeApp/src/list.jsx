import React from 'react';

export default function List(props) {
  const {name, items} = props;
  const itemsJsx = items.map((item, index) => <li key={index}>{item}</li>);
  return (
    <>
      <h4>{name}</h4>
      <ul className="bulletless">{itemsJsx}</ul>
    </>
  );
}




