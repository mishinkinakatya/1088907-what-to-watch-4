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
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
