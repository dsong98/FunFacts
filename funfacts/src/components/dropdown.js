import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Select way to get facts</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Choose one!</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.props.setMethodSearch}>
            Search
          </DropdownItem>
          <DropdownItem onClick={this.props.setMethodRandom}>
            Random
          </DropdownItem>
          <DropdownItem onClick={this.props.setMethodCategory}>
            Type of Category
          </DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
    );
  }
}
