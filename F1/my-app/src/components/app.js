import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // old mas muito comum
    // axios
    //   .get("https://api.unsplash.com/search/photos", {
    //     headers: {
    //       Authorization:
    //         "Client-ID 4ODhv39NrMVVQ4hbwEsqJCePkc6ZfUqm6kOiD8fF-o8",
    //     },
    //     params: { query: term },
    //   })
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });

    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.length} images found
      </div>
    );
  }
}

export default App;
