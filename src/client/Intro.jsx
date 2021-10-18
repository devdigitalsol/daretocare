import { useContext, useState } from "react";
import Banner from "../assets/images/introBanner.png";
import bottomSanofiLogo from "../assets/images/bottomSanofiLogo.svg";
import AppContext from "../context/AppContext";
const Intro = () => {
  const { step, setStep } = useContext(AppContext);
  const [check, setCheck] = useState(true);
  const checkChange = (e) => {
    setCheck(!check);
  };
  const goNext = () => {
    setStep(step + 1);
  };
  return (
    <div className="wrapper">
      <div className="intro-page">
        <img src={Banner} alt="logo" />
        <div className="intro-inner">
          <label htmlFor="checkForm">
            <input type="checkbox" id="checkForm" onChange={checkChange} />
            <i className="checkboxIcon"></i>I have read and agree to the{" "}
            <span>terms and conditions.</span>
          </label>
          <button className="btn" disabled={check} onClick={goNext}>
            Submit
          </button>
          <img
            src={bottomSanofiLogo}
            alt="Sanofi"
            className="bottomSanofiLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
