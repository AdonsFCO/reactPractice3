import { Component } from "react";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
