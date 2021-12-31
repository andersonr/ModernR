//SearchBar feito do jeito antigo, com evento apenas a nível de componente, sem passar para filho e vice e versa
import React from "react";

class OldSearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();    
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              //   onChange={this.onInputChange}
              // não colocar os parentesis () numa função que será chamado via evento
              //     -- O JS iria executar o método se tivesse os parentesis
              // Geralmente se utiliza com arrow function () => {}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default OldSearchBar;
