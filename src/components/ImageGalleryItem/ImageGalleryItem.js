import React, { Component } from "react";
import s from "./ImageGalleryItem.module.css";

import Modal from "../Modal/Modal";
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const showModal = this.state.showModal;
    const toggleModal = this.toggleModal;
    const { webformatURL, id, largeImageURL } = this.props;
    return (
      <>
        <li key={id} className={s.ImageGalleryItem} onClick={toggleModal}>
          <img className={s.ItemImage} src={webformatURL} alt="" />
        </li>
        {showModal && <Modal onClose={toggleModal} url={largeImageURL} />}
      </>
    );
  }
}
export default ImageGalleryItem;
