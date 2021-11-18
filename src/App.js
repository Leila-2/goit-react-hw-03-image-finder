import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Modal from "./components/Modal/Modal";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
        <Button />
        <Loader
          type="Circles"
          color="#00BFFF"
          height={50}
          width={50}
          timeout={3000} //3 secs
          className="Loader"
        />
      </div>
    );
  }
}

export default App;
