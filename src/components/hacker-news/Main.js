import React from "react";
import Button from "./Button";
import Stories from "./Stories";
import SearchForm from "./SearchForm";
import "./Main.css";

const Main = () => {
  return (
    <>
      <SearchForm />
      <Button />
      <Stories />
    </>
  );
};

export default Main;
