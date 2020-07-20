import React, {PureComponent} from "react";
import {TabsName} from "../../utils/const";


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.handleItemClick = this.handleItemClick.bind(this);

      this.state = {
        activeItem: TabsName.OVERVIEW,
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
        onItemEvent={this.handleItemClick}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
