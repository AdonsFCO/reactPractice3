import { Component } from "react";
import ArticleComponent from "./components/Article/Article";
import Card from "./components/Card/Card";
import FooterCom from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";

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

          <div>
            <Showcase />

            <div className="cardContainer">
              <Card Title="Card One">
                Commodo eu labore sit ipsum ea duis id amet sunt cupidatat esse
                elit do sunt. Consequat sint est nulla proident laboris
                reprehenderit pariatur qui officia minim. Cupidatat deserunt in
                ut duis proidentm.
              </Card>
              <Card Title="Card Two">
                Commodo eu labore sit ipsum ea duis id amet sunt cupidatat esse
                elit do sunt. Consequat sint est nulla proident laboris
                reprehenderit pariatur qui officia minim. Cupidatat deserunt in
                ut duis proidentm.
              </Card>
              <Card Title="Card Three">
                Commodo eu labore sit ipsum ea duis id amet sunt cupidatat esse
                elit do sunt. Consequat sint est nulla proident laboris
                reprehenderit pariatur qui officia minim. Cupidatat deserunt in
                ut duis proidentm.
              </Card>
            </div>
          </div>
        
        </div>
        <FooterCom/>
      </>
    );
  }
}

export default App;
