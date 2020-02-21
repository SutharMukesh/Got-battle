import React, { Component } from "react";
import SearchBar from "./searchbar";
import BattleCards from "./battlecards";

class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <SearchBar />
        <BattleCards />
      </div>
    );
  }
}

export default Home;
