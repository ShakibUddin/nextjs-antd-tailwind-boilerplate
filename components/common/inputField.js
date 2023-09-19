import { Input } from "antd";
import React from "react";

const InputField = ({
  title,
  type,
  placeholder,
  required,
  className,
  onChange,
  onBlur,
  error,
  errorMessage,
  disabled,
  iconRender,
  readOnly,
}) => {
  return (
    <div>
      <span className="input-title">{title}</span>
      {type === "password" ? (
        <Input.Password
          type={type}
          required={required}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
          disabled={disabled}
          iconRender={iconRender}
        />
      ) : (
        <Input
          type={type}
          required={required}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
          disabled={disabled}
        />
      )}
      <span className="error-message">{error ? errorMessage : ""}</span>
    </div>
  );
};

export default InputField;
