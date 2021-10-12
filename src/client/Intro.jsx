import { useState } from "react";
import Logo from "../assets/images/logo.png";
const Intro = () => {
  const [check, setCheck] = useState(true);
  const checkChange = (e) => {
    setCheck(!check);
  };
  return (
    <div className="wrapper">
      <div className="intro-page">
        <img src={Logo} alt="logo" />
        <h3>intro text here</h3>
        <label htmlFor="checkForm">
          <input type="checkbox" id="checkForm" onChange={checkChange} />
          <i className="checkboxIcon"></i>I have read and agree to the{" "}
          <span>terms and conditions.</span>
        </label>
        <button className="btn" disabled={check}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Intro;
