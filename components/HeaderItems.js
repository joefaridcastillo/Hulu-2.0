import React from "react";

function HeaderItems({ title, Icon }) {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default HeaderItems;
