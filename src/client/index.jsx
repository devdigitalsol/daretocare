import { useContext } from "react";
import AppContext from "../context/AppContext";
import Form from "./Form";
import Intro from "./Intro";
import Template from "./Template";
const Client = () => {
  const { step } = useContext(AppContext);

  if (step === 1) {
    return <Intro />;
  } else if (step === 2) {
    return <Form />;
  } else if (step === 3) {
    return <Template />;
  } else {
    return <Intro />;
  }
};

export default Client;
