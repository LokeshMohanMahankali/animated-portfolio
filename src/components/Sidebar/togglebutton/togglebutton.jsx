import React from "react";

const togglebutton = ({ setopen }) => {
  return <button onClick={() => setopen((prev) => !prev)}>button</button>;
};

export default togglebutton;
