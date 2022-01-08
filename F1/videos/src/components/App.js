import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  OnTermSubmmit = (term) => {
    youtube.get("/search", { params: { q: term } });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.OnTermSubmmit} />
      </div>
    );
  }
}

export default App;
