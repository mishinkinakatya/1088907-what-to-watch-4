import React, {PureComponent} from "react";
import {movieRequiredTypes} from "../../types/types";


const withSmallMovieCard = (Component) => {
  class WithSmallMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.handleMouseEvent = this.handleMouseEvent.bind(this);

      this.state = {
        isPlaying: false,
      };
    }

    handleMouseEvent(isPlaying) {
      this.setState({
        isPlaying,
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        isPlaying={isPlaying}
        onCardMouseEvent={this.handleMouseEvent}
      />;
    }
  }

  WithSmallMovieCard.propTypes = {
    movie: movieRequiredTypes,
  };

  return WithSmallMovieCard;
};

export default withSmallMovieCard;
