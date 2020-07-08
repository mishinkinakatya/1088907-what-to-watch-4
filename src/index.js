import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {movies} from "./mocks/movies.js";
import {reviews} from "./mocks/reviews.js";
import {promoMovie} from "./mocks/promo-movie.js";
import {promoMovieReviews} from "./mocks/promo-movie-reviews.js";

ReactDOM.render(
    <App
      promoMovie={promoMovie}
      movies={movies}
      promoMovieReviews={promoMovieReviews}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
