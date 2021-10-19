import { useState, useRef, useCallback, useContext } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import AppContext from "../context/AppContext";
const Modal = () => {
  const { setPicData, setModal } = useContext(AppContext);
  const cropperRef = useRef();
  const fileRef = useRef();
  const types = ["image/png", "image/jpeg"];
  const [src, setSrc] = useState();

  const selectImg = (e) => {
    let file = e.target.files[0];
    if (file && types.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        setSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file (jpeg or jpg)");
    }
  };

  const cropImg = useCallback(() => {
    setPicData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    setModal(false);
  }, [setModal, setPicData]);
  return (
    <div className="imgPop">
      <div className="uploadImgContainer upload-demo">
        <label type="button" htmlFor="upload" className="btn">
          <input
            type="file"
            placeholder="Browse Photo"
            onChange={selectImg}
            ref={fileRef}
            id="upload"
          />
          <span>Browse Photo</span>
        </label>
        {!src && (
          <div className="imageCropContainer">
            <div className="upload-msg">
              Photo preview
              <br />
              will appear here
            </div>
            <div className="upload-demo-wrap">
              <div id="upload-demo"></div>
            </div>
          </div>
        )}
        {src && (
          <>
            <div className="imageCropContainer">
              <Cropper
                ref={cropperRef}
                src={src}
                style={{ height: 230, width: 230 }}
                guides={false}
                aspectRatio={1 / 1}
                type={"square"}
                crossOrigin={"true"}
                enableOrientation={true}
                enableExif={true}
                viewMode={3}
                cropBoxMovable={false}
                cropBoxResizable={false}
                dragMode={"move"}
              />
            </div>
            <div className="btnGrp">
              <button
                className="btn warn"
                onClick={() => cropperRef.current.cropper.rotate(90)}
              >
                Rotate
              </button>
              <button onClick={cropImg} type="button" className="btn warn">
                Use Photo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
