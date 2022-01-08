import React from "react";
//AIzaSyD--nrdJDSPz2I3sy4H6AzU8pl6hBQ9IzM
class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(term) {
    this.setState({ term });
    //this.props.onFormSubmit(term);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.onInputChange(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
