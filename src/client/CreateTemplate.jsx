import { useContext } from "react";
import AppContext from "../context/AppContext";
import templateData from "../utils/templateData";

const CreateTemplate = () => {
  const { defaultLang, defaultTemp, drData } = useContext(AppContext);
  let allTemps = [];

  const filtered = Object.keys(templateData)
    .filter((key) => defaultTemp.includes(key))
    .reduce((obj, key) => {
      obj[key] = templateData[key];
      return obj;
    }, {});
  for (let name in filtered) {
    // console.log(filtered[name]);
    allTemps.push(filtered[name]);
  }
  let path = allTemps[0].filter((item) => {
    return item.lang === defaultLang;
  });
  // console.log(path[0].path);

  return (
    <div className="wrapper">
      <div className="create-page">
        <img src={`${path[0].path}/images/top.png`} alt="img" />
        <img src={`${path[0].path}/images/mid.png`} alt="img" />
        <div className="insertImgContainer">
          <div id="showImg">
            <div className="imgOverlay">Selected photo will appear here</div>
          </div>
          <div id="userInfo">
            <p id="userName">{drData.name}</p>
            <p id="userDesignation">{drData.designation}</p>
            <p id="userState">{drData.state}</p>
            <p id="userCity">{drData.city}</p>
            <p id="userCampaign"></p>
          </div>
        </div>
        <img src={`${path[0].path}/images/ref.png`} alt="img" />
      </div>
    </div>
  );
};

export default CreateTemplate;
