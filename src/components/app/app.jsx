import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";


const App = (props) => {
  const {title, genre, year, movieTitles} = props;

  return (
    <MainPage title={title} genre={genre} year={year} movieTitles={movieTitles} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movieTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
