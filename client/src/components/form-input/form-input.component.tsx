import React from 'react';

import './form-input.styles.scss';

interface Props {
  name: string;
  type: string;
  value: string;
  handleChange: () => any;
}

const FormInput: React.FC<Props> = ({ name, type, value, handleChange }) => {
  const handleShrink = (labelName: string) => {
    let shrinkClass: string;
    switch (labelName) {
      case ("displayName"):
        labelName = "display name"
        break;
      case ("email"):
        labelName = "email"
        break;
      case ("password"):
        labelName = "password"
        break;
      case ("confirmPassword"):
        labelName = "confirm password"
        break;
    }
    shrinkClass = value.length ? "shrink" : "";
    return (
      <label className={`form-input-label ${shrinkClass}`}>
        {labelName}
      </label>
    )
  }
  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={handleChange()}
        required={true}
      />
    {handleShrink(name)}
    </div>
  )
}

export default FormInput;