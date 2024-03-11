import React from "react";

const Folder = ({ name, children }) => {
  if (!children.length) {
    return <p>{name}</p>;
  }
  return <div>
    <p>{name}</p>
    {children.map(child => {
        return <Folder key={child.name} name={child.name} children={child.children} /> ;
    })}
  </div>;
};

export default Folder;
