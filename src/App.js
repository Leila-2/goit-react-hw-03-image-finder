import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    showModal: false,
    value: "",
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleFormSubmit = (value) => {
    console.log(value);
    this.setState({ value: value });
  };
  render() {
    const handleFormSubmit = this.handleFormSubmit;
    return (
      <div className="App">
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery value={this.state.value} />
      </div>
    );
  }
}

export default App;
