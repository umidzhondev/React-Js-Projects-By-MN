import React from "react";
import CockTailList from "../CockTailList";
import SearchForm from "../SearchForm";

const Home = () => {
  return (
    <>
      <main>
        <SearchForm />
        <CockTailList />
      </main>
    </>
  );
};

export default Home;
