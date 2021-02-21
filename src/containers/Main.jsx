import React from "react";
import axios from "axios";

class App extends React.Component {

  componentDidMount() {
    // chequeamos que el pedido axios al nuestro server funcione correctamente! deberias poder ver desde la consola del browser lo siguiente: "This is your data:  api its working"
    axios
      .get("http://localhost:1337/api")
        .then(response => response.data)
        .then(data => console.log("This is your data: ", data));
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }

  
}

export default App;
