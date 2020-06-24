import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {PromoMovie, movies} from "./mocks/movies.js";

ReactDOM.render(
    <App
      promoMovie={PromoMovie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
