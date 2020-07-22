import React, {PureComponent} from "react";


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.handleItemClick = this.handleItemClick.bind(this);

      this.state = {
        activeItem: null,
      };
    }

    handleItemClick(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onActiveItemEvent={this.handleItemClick}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
