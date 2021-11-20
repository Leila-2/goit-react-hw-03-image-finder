import s from "./Searchbar.module.css";
import React, { Component } from "react";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    value: "",
  };
  onChange = (e) => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
    if (this.state.value.trim() === "") {
      toast("Введите тему для картинки :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.Button}>
            <span className={s.ButtonLabel}>Search</span>
          </button>

          <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
