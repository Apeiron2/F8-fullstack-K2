import React from "react";

const Color = (ParentComponent) => {
  const Component = (props) => {
    return <ParentComponent {...props} />;
  };
  return Component;
};

export default Color;
