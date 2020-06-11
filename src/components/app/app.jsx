import React from "react";
import MainPage from "../main-page/main-page.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, year} = props;

  return (
    <MainPage title={title} genre={genre} year={year} />
  );
};

export default App;
