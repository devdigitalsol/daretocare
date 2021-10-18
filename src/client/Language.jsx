import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import templateData from "../utils/templateData";
const Language = () => {
  const { step, setStep, defaultLang, setDefaultLang, defaultTemp } =
    useContext(AppContext);
  const [newLang, setNewLang] = useState(defaultLang);
  const [imgPath, setImgPath] = useState("");
  let selectedTemp = [];
  const langSelect = (e) => {
    setNewLang(e.target.value);
    let newTemp = selectedTemp.filter((item) => {
      return item.lang === e.target.value;
    });
    setImgPath(newTemp[0].path);
  };

  for (let name in templateData) {
    // console.log(templateData[name]);
    let temp = templateData[name].filter((item) => {
      return item.name === defaultTemp;
    });
    if (temp.length) {
      temp.forEach((element) => {
        selectedTemp.push(element);
      });
    }
  }

  const useTemp = () => {
    setDefaultLang(newLang);
    setStep(step + 1);
    // setSelectedLang(newLang);
    // setSelectLangPage(false);
    // setSelectFramePage(true);
  };

  const backBtn = () => {
    setStep(step - 1);
  };

  return (
    <div className="wrapper">
      <div className="language-page">
        <h3>Select your language</h3>
        <div className="form-group">
          <select
            name="langSelect"
            id="langSelect"
            onChange={langSelect}
            defaultValue={defaultLang}
            className="form-control"
          >
            {selectedTemp.length &&
              selectedTemp.map((item, index) => {
                return <option key={index}>{item.lang}</option>;
              })}
          </select>
        </div>
        <div className="langPreview">
          {imgPath.trim().length ? (
            <img src={`${imgPath}/thumb.png`} alt="img" />
          ) : (
            <img src={`${selectedTemp[0].path}/thumb.png`} alt="img" />
          )}
        </div>
        <button className="btn" onClick={useTemp}>
          Use this template
        </button>
        <button className="btn" onClick={backBtn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Language;
