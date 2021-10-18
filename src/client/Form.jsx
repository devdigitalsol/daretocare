import { useContext, useState } from "react";
import Banner from "../assets/images/introBanner.png";
import AppContext from "../context/AppContext";
import stateData from "../utils/states";
const Form = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("Select your profession");
  const [designation, setDesignation] = useState("");
  const [state, setState] = useState("Select state");
  const [city, setCity] = useState("");

  const { setDrData, step, setStep } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDrData({
      name,
      profession,
      designation,
      state,
      city,
    });
    setStep(step + 1);
  };
  return (
    <div className="wrapper">
      <div className="form-page">
        <img src={Banner} alt="logo" />
        <div className="form-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <select
                name="checkUser"
                id="checkUser"
                className="form-control"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              >
                <option value="Select your profession" disabled>
                  Select your profession
                </option>
                <option value="doctor">Doctor</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="Select state" disabled>
                  Select state
                </option>
                {stateData &&
                  stateData.map((item, index) => {
                    return (
                      <option value={item.state} key={index}>
                        {item.state}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-control"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="btn"
              disabled={
                name.length < 1 ||
                designation.length < 1 ||
                profession === "Select your profession" ||
                state === "Select state" ||
                city.length < 1
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
