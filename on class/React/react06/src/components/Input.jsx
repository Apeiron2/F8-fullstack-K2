import React, { useId } from "react";

const Input = ({ type = "text", label }) => {
  const id = useId();
  return (
    <div className="d-flex flex-column g-3" style={{ width: "200px" }}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} placeholder={label} id={id} className="form-control" />
    </div>
  );
};

export default Input;
