import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

const titleHandler = () => {};

const App = (props) => {
  const {promoMovie, movies} = props;

  return (
    <MainPage promoMovie={promoMovie} movies={movies} onTitleClick={titleHandler} />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
