import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  //Obrigatório por ser o construtor, igual ao construtor do JS
  // constructor(props) {
  //   super(props);

  //   //Inicialização do state, sempre dentro do construtor e somente uma vez
  //   this.state = {
  //     lat: null,
  //     errorMessage: "",
  //   };
  // }

  //Inicialização moderna do state, não se utiliza mais o construtor
  state = { lat: null, errorMessage: "" };

  //Conselho:
  // Fazer um método para renderizar o conteúdo fora do render
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Por favor aceite a solicitação da localização!" />;
  }

  //Obrigatório
  // Evitar ter vários return dentro do render
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }

  componentDidMount() {
    console.log("Componente montado");

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //Ao chamar o setState o render será chamado
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("Componente atualizado");
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
