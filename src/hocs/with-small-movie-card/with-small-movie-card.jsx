import React, {PureComponent} from "react";
import {movieTypes, onCardClickTypes} from "../../types/types";


const withSmallMovieCard = (Component) => {
  class WithSmallMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.handleMouseEvent = this.handleMouseEvent.bind(this);

      this.state = {
        isPlaying: false,
      };
    }

    handleMouseEvent(val) {
      this.setState({
        isPlaying: val,
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
    movie: movieTypes,
    onCardClick: onCardClickTypes,
  };

  return WithSmallMovieCard;
};

export default withSmallMovieCard;
