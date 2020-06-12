import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieDescription = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const MOVIE_TITLES = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`];

ReactDOM.render(
    <App
      title={MovieDescription.TITLE}
      genre={MovieDescription.GENRE}
      year={MovieDescription.YEAR}
      movieTitles={MOVIE_TITLES}
    />,
    document.querySelector(`#root`)
);
