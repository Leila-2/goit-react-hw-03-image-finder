import React, { Component } from "react";
import s from "./ImageGallery.module.css";
import Loader from "../Loader/LoaderComp";
import Button from "../Button/Button";

import { ToastContainer } from "react-toastify";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "react-toastify/dist/ReactToastify.css";

export default class ImageGallery extends Component {
  state = {
    imgInfo: null,
    error: null,
    page: 1,
    status: "idle",
  };
  componentDidUpdate(prevProps, prevState) {
    const newValue = this.props.value;
    const oldValue = prevProps.value;
    const newPage = this.state.page;
    const prevPage = prevState.page;
    const key = `23558220-fb5623a2d9636919de7621278`;
    let url = `https://pixabay.com/api/?q=${newValue}&page=${newPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

    if (oldValue !== newValue) {
      this.setState({ status: "pending" });

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          return data.hits;
        })
        .then((imgInfo) => {
          if (imgInfo.length === 0) {
            this.setState({ status: "rejected", error: new Error() });
            return Promise.reject(new Error(`Нет фото на тему ${newValue}`));
          }
          console.log(imgInfo);
          this.setState({ imgInfo, status: "resolved" });
        })
        .catch((error) => this.setState({ error }));
    }
    if (prevPage !== newPage) {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          return data.hits;
        })
        .then((imgInfo) => {
          if (imgInfo.length === 0) {
            this.setState({ status: "rejected", error: new Error() });
            return Promise.reject(new Error(`Нет фото на тему ${newValue}`));
          }

          this.setState((prevState) => ({
            imgInfo: [...prevState.imgInfo, ...imgInfo],
          }));
          this.setState({ status: "resolved" });
        })
        .catch((error) => this.setState({ error }));
    }
  }
  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { status, imgInfo, error } = this.state;

    if (status === "idle") {
      return <ToastContainer position="top-right" autoClose={5000} />;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "rejected") {
      return <p>{error.message}</p>;
    }

    if (status === "resolved") {
      return (
        <>
          <ul className={s.ImageGallery}>
            {imgInfo.map(({ webformatURL, id, largeImageURL }) => (
              <ImageGalleryItem
                webformatURL={webformatURL}
                key={id}
                largeImageURL={largeImageURL}
              />
            ))}
          </ul>
          <Button onClick={this.loadMore} />
        </>
      );
    }
  }
}
