import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies} from "./mocks/movies.js";
import {promoMovie} from "./mocks/promo-movie.js";

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
