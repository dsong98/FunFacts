import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export default class InfoBox extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          // backgroundColor: color,
          height: 1
        }}
      />
    );
    return (
      <div>
        <Button id="PopOver1" type="button" color="success">
          Click for more info
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="PopOver1"
          toggle={this.toggle}
          trigger="legacy"
        >
          <PopoverHeader>Chuck Norris Fact Generator</PopoverHeader>
          <PopoverBody>
            Select method of getting facts from the dropdown menu below it, then
            click 'Get a Fun Fact' to get a cool fact about Chuck Norris!
            <ColoredLine color="black" />
            Search: Find fact with specific phrase(s). Type your query into the
            searchbar, and then click the 'Get Fun Fact' button.
            <br />
            <br />
            Random: Find a random fact.
            <br />
            <br />
            Find a category: Simply gives you a type of category, sorry that is
            all the API returns.
            <br />
            <br />
            <ColoredLine color="black" />
            These facts are from the online API:
            https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
