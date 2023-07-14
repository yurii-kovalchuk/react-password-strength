import { useState } from "react";
import { getColorsForSections } from "../../utils/getColorsForSections";
import "./Form.style.css";

export const Form = () => {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const validateRegex = ["[a-zA-Z]", "\\d", "\\W"];
  let strength = null;

  const onToggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const onChange = (e) => {
    setPassword(e.target.value.trim());
  };

  if (password.length > 0) {
    strength = 0;
  }

  if (password.length >= 8) {
    validateRegex.forEach((regex) => {
      if (new RegExp(regex).test(password)) {
        strength += 1;
      }
    });
  }

  const [first, second, third] = getColorsForSections(strength);
  const buttonText = inputType === "password" ? "Show" : "Hide";

  return (
    <>
      <form>
        <div className="inputWrap">
          <input
            type={inputType}
            name="password"
            className="input"
            value={password}
            onChange={onChange}
            required
          />
          <button
            type="button"
            className="toggleBtn"
            onClick={onToggleInputType}
          >
            {buttonText}
          </button>
        </div>
      </form>
      <div className="wrap">
        <div className={`section ${first}`}></div>
        <div className={`section ${second}`}></div>
        <div className={`section ${third}`}></div>
      </div>
    </>
  );
};
