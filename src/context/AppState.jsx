import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuth, setIsAuth] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [step, setStep] = useState(1);
  const [defaultLang, setDefaultLang] = useState("english");
  const [defaultTemp, setDefaultTemp] = useState("");
  const [modal, setModal] = useState(false);
  const [picData, setPicData] = useState("");

  const [drData, setDrData] = useState({
    name: "",
    profession: "",
    designation: "",
    state: "",
    city: "",
  });
  useEffect(() => {
    let getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser == null) {
      setIsAuth(false);
      setCurrentUser(null);
    } else {
      if (getUser.admin) {
        setIsAdmin(true);
      }
      setIsAuth(true);
      setCurrentUser(getUser);
    }
  }, []);
  let store = {
    isAuth,
    setIsAuth,
    isAdmin,
    setIsAdmin,
    currentUser,
    setCurrentUser,
    step,
    setStep,
    drData,
    setDrData,
    defaultLang,
    setDefaultLang,
    defaultTemp,
    setDefaultTemp,
    modal,
    setModal,
    picData,
    setPicData,
  };
  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};
export default AppState;
