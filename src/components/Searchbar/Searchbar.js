import s from "./Searchbar.module.css";
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.Button}>
            <span className={s.ButtonLabel}>Search</span>
          </button>

          <input
            className={s.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // onChange={onChange}
            //value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
