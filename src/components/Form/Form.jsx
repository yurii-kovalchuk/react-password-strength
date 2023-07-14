import { useState } from "react";
import { getColorsForSections } from "../../utils/getColorsForSections";
import "./Form.style.css";

export const Form = () => {
  const [password, setPassword] = useState("");
  const validateRegex = ["[a-zA-Z]", "\\d", "\\W"];
  let strength = null;

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

  return (
    <>
      <form>
        <input
          type="password"
          name="password"
          className="input"
          onChange={onChange}
          required
        />
      </form>
      <div className="wrap">
        <div className={`section ${first}`}></div>
        <div className={`section ${second}`}></div>
        <div className={`section ${third}`}></div>
      </div>
    </>
  );
};
