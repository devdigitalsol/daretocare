import { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuth, setIsAuth] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [step, setStep] = useState(1);
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
  };
  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};
export default AppState;
