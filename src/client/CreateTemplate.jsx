import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import html2canvas from "html2canvas";
import templateData from "../utils/templateData";
import Modal from "./Modal";

const CreateTemplate = () => {
  const {
    defaultLang,
    defaultTemp,
    drData,
    setStep,
    step,
    modal,
    setModal,
    picData,
  } = useContext(AppContext);
  const [viewImg, setViewImg] = useState(null);
  let allTemps = [];

  const filtered = Object.keys(templateData)
    .filter((key) => defaultTemp.includes(key))
    .reduce((obj, key) => {
      obj[key] = templateData[key];
      return obj;
    }, {});
  for (let name in filtered) {
    allTemps.push(filtered[name]);
  }
  let path = allTemps[0].filter((item) => {
    return item.lang === defaultLang;
  });

  const openModal = () => {
    setModal(true);
  };

  const getScreenShot = () => {
    if (!picData) {
      alert("Please select image");
    } else {
      html2canvas(document.getElementById("fullImg"), {
        allowTaint: true,
      })
        .then((canvas) => {
          var myImage = canvas.toDataURL("image/jpeg", 0.9);
          setViewImg(myImage);
        })
        .catch(function (error) {
          console.log(error);
          alert("oops, something went wrong!", error);
        });
    }
  };

  const backBtn = () => {
    setStep(step - 1);
  };
  const downloadBtn = () => {
    const url = viewImg;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.setAttribute("download");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="wrapper">
      {viewImg === null && (
        <div className="create-page" id="fullImg">
          <img src={`${path[0].path}/images/top.png`} alt="img" />
          <img src={`${path[0].path}/images/mid.png`} alt="img" />
          <div className="insertImgContainer">
            <div id="showImg">
              {!picData && (
                <div className="imgOverlay">
                  Selected photo will appear here
                </div>
              )}
              {picData && <img src={picData} alt="img" />}
            </div>
            <div id="userInfo">
              <div id="userName">{drData.name}</div>
              <div id="userDesignation">{drData.designation}</div>
              <div id="userState">{drData.state}</div>
              <div id="userCity">{drData.city}</div>
              <div id="userCampaign"></div>
            </div>
          </div>
          <img src={`${path[0].path}/images/ref.png`} alt="img" />
        </div>
      )}

      {viewImg !== null && (
        <div className="last-page">
          <img src={viewImg} className="finalImg" alt="img" id="generatedImg" />
        </div>
      )}

      <div className="buttonsAction">
        {viewImg === null ? (
          <>
            <button type="button" onClick={openModal}>
              Select Photo
            </button>
            {picData && (
              <button type="button" onClick={getScreenShot}>
                Done
              </button>
            )}
            <button type="button" onClick={backBtn}>
              Back
            </button>
          </>
        ) : (
          <>
            <button type="button" className="btn" onClick={downloadBtn}>
              Download
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => window.location.reload()}
            >
              Reset
            </button>
          </>
        )}
      </div>
      {modal && <Modal />}
    </div>
  );
};

export default CreateTemplate;
