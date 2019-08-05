import React from "react";
import "./App.css";
import {
  Button,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Spinner,
  // Toast,
  // ToastBody,
  // ToastHeader,
  Input,
  Form,
  FormGroup,
  Label
} from "reactstrap";

import NavigationBar from "./components/navbar";
// import SliderBar from "./components/carousel";
// import SliderBar from "./components/sliderbar"
import DropDownMenu from "./components/dropdown";
import InfoBox from "./components/infopopover";
// import ToastBox from "./components/toast";

// import { backendUrl } from "./constants";
// import pic2 from "./images/pic2.png";

import axios from "axios";

const apiUrl = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes";

let headers = {
  "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  "x-rapidapi-key": "9131989ee8mshbcf45cebe8333f2p1cea31jsn5c6c9fbf16fb",
  accept: "application/json"
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [],
      image: "",
      spinnerOn: 0,
      searchOn: 1,
      selectedMethod: "Search",
      query: ""
    };
  }

  displayMessage() {
    if (this.state.selectedMethod === "Random") {
      this.getRandom();
    } else if (this.state.selectedMethod === "Type of Category") {
      this.getCategory();
    } else {
      this.getSearch();
    }
  }
  getRandom() {
    this.toggleSpinner();
    const config = {
      headers: headers
    };
    axios.get(apiUrl + "/random", config).then(res => {
      var newMessage = res.data.value;
      var oldMessages = this.state.messages;
      var newMessages = [newMessage].concat(oldMessages);
      this.setState({
        message: newMessage,
        messages: newMessages,
        image: res.data.icon_url
      });
      console.log(newMessage);
      this.toggleSpinner();
    });
    // axios.get(backendUrl + '/getfact').then(res => {
    //   console.log(res)
    //   this.setState({
    //     message: newMessage,
    //     image: res.data.icon_url
    //   })
    // });
  }
  getCategory() {
    this.toggleSpinner();
    const randNum = Math.round(Math.random() * 14);
    const config = {
      headers: headers
    };
    axios.get(apiUrl + "/categories", config).then(res => {
      var oldMessages = this.state.messages;
      var newMessages = [res.data[randNum]].concat(oldMessages);
      this.setState({
        message: res.data[randNum],
        messages: newMessages
      });
      console.log(res.data[randNum]);
      this.toggleSpinner();
    });
  }
  getSearch() {
    this.toggleSpinner();
    const config = {
      headers: headers,
      params: {
        query: this.state.query
      }
    };
    axios
      .get(apiUrl + "/search", config)
      .then(res => {
        const randNum = Math.round(Math.random() * res.data.result.length);
        var newMessage = res.data.result[randNum].value;
        var oldMessages = this.state.messages;
        var newMessages = [newMessage].concat(oldMessages);
        this.setState({
          message: newMessage,
          messages: newMessages,
          image: res.data.result[randNum].icon_url
        });
        console.log(newMessage);
        this.toggleSpinner();
      })
      .catch(err => {
        this.toggleSpinner();
        alert("Search returned nothing, please try different query.");
      });
  }
  toggleSpinner() {
    var onOff = this.state.spinnerOn;
    if (onOff === 0) {
      onOff = 1;
    } else {
      onOff = 0;
    }
    this.setState({
      spinnerOn: onOff
    });
  }
  setMethodRandom() {
    this.setState({
      selectedMethod: "Random",
      searchOn: 0
    });
  }
  setMethodCategory() {
    this.setState({
      selectedMethod: "Type of Category",
      searchOn: 0
    });
  }
  setMethodSearch() {
    this.setState({
      selectedMethod: "Search",
      searchOn: 1
    });
  }
  render() {
    const facts = this.state.messages.map((item, index) => (
      <ListGroupItem
        color="info"
        key={index}
        style={{ fontSize: 16, marginBottom: 5 }}
      >
        {item}
      </ListGroupItem>
    ));
    // const ToastBox = props => {
    //   return (
    //     <div>
    //       <div className="p-3 my-10 rounded">
    //         <Toast style={{ width: 250 }}>
    //           <ToastHeader>Selected:</ToastHeader>
    //           <ToastBody style={{ color: "black" }}>
    //             {this.state.selectedMethod}
    //           </ToastBody>
    //         </Toast>
    //       </div>
    //     </div>
    //   );
    // };
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          // backgroundColor: color,
          height: 10
        }}
      />
    );
    return (
      <div>
        {/* NavBar */}
        <div sticky="top">
          <NavigationBar />

          {/* Container below Navbar */}
          <Container>
            <div style={{ height: "50px" }} />
            <Row>
              <Col xs="4" sm="4" className="centercol">
                {/* Popover for information on the page */}
                <div style={{ height: "80px" }} className="centerstuff">
                  <InfoBox />
                </div>

                <ColoredLine color="black" />

                {/* Button to get fact */}
                <div style={{ marginBottom: 25}} className="centerstuff">
                  <Button
                    color="primary"
                    style={{ width: "100%" }}
                    onClick={() => this.displayMessage()}
                  >
                    &#62;&#62; Get a Fun Fact &#60;&#60;
                  </Button>
                </div>

                <ColoredLine color="black" />

                {/* Dropdown to pick which type of API call */}
                <div className="centerstuff">
                  <DropDownMenu
                    setMethodRandom={this.setMethodRandom.bind(this)}
                    setMethodCategory={this.setMethodCategory.bind(this)}
                    setMethodSearch={this.setMethodSearch.bind(this)}
                  />
                </div>

                {/* Showing with Method is Selected */}
                <div className="centerstuff">
                  {/* <ToastBox /> */}
                  <text style={{fontSize: 20}}>{this.state.selectedMethod}</text>
                </div>

                <div className="centerstuff">
                  {/* <Form onKeyPress={() => this.displayMessage()} >
                    <FormGroup> */}
                  <Input
                    id="Input1"
                    placeholder="search by specific keyword(s)"
                    style={{ opacity: this.state.searchOn, width: "100%" }}
                    onChange={e => {
                      this.setState({
                        query: e.target.value
                      });
                      // console.log(this.state.query);
                    }}
                  />
                  {/* </FormGroup>
                  </Form> */}
                </div>
              </Col>

              <Col>
                {/* Image from API */}
                <div className="centerstuff">
                  <img
                    style={{ width: 100, fontSize: 16 }}
                    src={this.state.image}
                    alt=""
                  />
                </div>
                {/* Loading icon */}
                <div className="centerstuff">
                  <Spinner
                    color="primary"
                    style={{ opacity: this.state.spinnerOn }}
                  />
                </div>
                <div style={{ height: "30px" }} />
                {/* List of facts */}
                <div style={{ textAlign: "center" }}>
                  <ListGroup>{facts}</ListGroup>
                </div>
                <div style={{ height: "50px" }} />
              </Col>
            </Row>

            {/* <div style={{ flex: 1 }}>
            <SliderBar />
          </div> */}
          </Container>
        </div>
      </div>
    );
  }
}
