import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeHandler);
  }
  closeHandler = (e) => {
    if (e.code === "Escape") {
      console.log("ESC :)");
      this.props.onClose();
    }
  };
  backdropHandler = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.backdropHandler}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
