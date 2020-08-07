import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {movieTypes, onMyListButtonClickTypes} from "../../types/types";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";


const withFavoriteMovie = (Component) => {
  class WithFavoriteMovie extends PureComponent {
    constructor(props) {
      super(props);

      this.handleButtonClick = this.handleButtonClick.bind(this);

      this.state = {
        isFavorite: this.props.movie.isFavorite,
      };
    }

    handleButtonClick() {
      const {isFavorite} = this.state;
      const {movie, onMyListButtonClick} = this.props;

      this.setState({
        isFavorite: !isFavorite,
      });

      onMyListButtonClick(movie, !isFavorite);
    }

    render() {
      const {isFavorite} = this.state;

      return <Component
        {...this.props}
        isFavorite={isFavorite}
        onMyListButtonClick={this.handleButtonClick}
      />;
    }
  }

  WithFavoriteMovie.propTypes = {
    movie: movieTypes,
    onMyListButtonClick: onMyListButtonClickTypes,
  };


  const mapDispatchToProps = (dispatch) => ({
    onMyListButtonClick(movieId, status) {
      dispatch(DataOperations.postFavoriteStatusMovie(movieId, status));
    }
  });

  return connect(null, mapDispatchToProps)(WithFavoriteMovie);
};

export default withFavoriteMovie;
