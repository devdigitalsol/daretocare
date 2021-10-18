import { useContext } from "react";
import AppContext from "../context/AppContext";
import CreateTemplate from "./CreateTemplate";
import Form from "./Form";
import Intro from "./Intro";
import Language from "./Language";
import Template from "./Template";
const Client = () => {
  const { step } = useContext(AppContext);

  if (step === 1) {
    return <Intro />;
  } else if (step === 2) {
    return <Form />;
  } else if (step === 3) {
    return <Template />;
  } else if (step === 4) {
    return <Language />;
  } else if (step === 5) {
    return <CreateTemplate />;
  } else {
    return <Intro />;
  }
};

export default Client;
