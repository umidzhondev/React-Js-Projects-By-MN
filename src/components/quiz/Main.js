import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Modal from "./Modal";
import SetupForm from "./SetupForm";
import "./Main.css";

const Main = () => {
  const [
    waiting,
    laoding,
    questions,
    index,
    correct,
    error,
    isModalOpen,
    quiz,
  ] = useGlobalContext();

  if(waiting){
    return <SetupForm/>
}
  if(laoding){
    return <Loading/>
}

  return <div>Main</div>;
};

export default Main;
