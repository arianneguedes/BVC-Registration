import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/Search.css";
import Header_Buttons from "../HeaderButtons";

export class SearchMenu extends Component {
  render() {
    return (
      <form class="search-form">
        <div class="search-title">Program Search</div>
        <input type="text" class="search-text" required></input>
        <div className="radios">
          <input type="radio" id="search-by-code" name="optsearch" checked />
          <label for="search-by-code">By Code</label>
          <br />
          <input type="radio" id="search-by-name" name="optsearch" />
          <label for="search-by-name">By Name</label>
          <br />
          <br />
        </div>
        <div class="search-buttons">
          <button class="btn-search1" type="submit">
            Search
          </button>
          <button class="btn-search1">
            <Link className="btn-search1-link" to="">
              Cancel
            </Link>
          </button>
        </div>
      </form>
    );
  }
}

export default SearchMenu;
