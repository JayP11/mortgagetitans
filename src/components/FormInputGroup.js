import React from "react";

function FormInputGroup({
  text,
  icon,
  placeholder,
  value,
  onInput,
  onkeyup,
  readOnly = false,
}) {
  return (
    <div
      className="input-group mb-3 "
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
      <span className="input-group-text ">
        {text} {icon}
      </span>
      <input
        type="number"
        value={value}
        className="form-control"
        placeholder={placeholder}
        onInput={onInput}
        onKeyUp={onkeyup}
        readOnly={readOnly}
      />
    </div>
  );
}

export default FormInputGroup;
