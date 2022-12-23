import { Component } from "react";
import ArticleComponent from "./components/Article/Article";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
       <Header />
      <div className="container">
       
        <ArticleComponent title="Bussines Name Or Tagline">
          Do ex proident deserunt nisi.Id dolor consectetur cupidatat
          exercitation reprehenderit pariatur. Deserunt incididunt aute ad id
          aliquip do Lorem proident culpa pariatur laborum culpa officia
          commodo. Ea excepteur et officia ullamco deserunt anim occaecat
          excepteur cupidatat aute commodo velit deserunt anim.
        </ArticleComponent>
      </div>
      </>
    );
  }
}

export default App;
