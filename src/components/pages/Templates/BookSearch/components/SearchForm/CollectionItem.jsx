import React from "react";

const CollectionItem = ({ name, size, setCollection }) => {
  return (
    <li onClick={() => setCollection(name)}>
      {name} ({size})
    </li>
  );
};

export default CollectionItem;
