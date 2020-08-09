import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {movieRequiredTypes, funcRequiredTypes, stringNotRequiredTypes, objectRequiredTypes} from "../../types/types";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {getSendFavotiteStatus} from "../../store/reducer/data/selectors";


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
      const {movie, onMyListButtonClick, authorizationStatus, history} = this.props;
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        this.setState({
          isFavorite: !isFavorite,
        });

        onMyListButtonClick(movie, !isFavorite);
      } else {
        history.push(AppRoute.SIGN_IN_PAGE);
      }
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
    movie: movieRequiredTypes,
    onMyListButtonClick: funcRequiredTypes,
    authorizationStatus: stringNotRequiredTypes,
    history: objectRequiredTypes,
  };


  const mapStateToProps = (state) => {
    return {
      authorizationStatus: getAuthorizationStatus(state),
      sendFavotiteStatus: getSendFavotiteStatus(state),
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    onMyListButtonClick(movieId, status) {
      dispatch(DataOperations.postFavoriteStatusMovie(movieId, status));
    }
  });


  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithFavoriteMovie));
};


export default withFavoriteMovie;
