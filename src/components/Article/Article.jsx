import "./Article.css";
import ButtonComp from "../Button/ButtonComp";
const ArticleComponent = ({ title, children, imageLink }) => {
  return (
    <article>
        <div>
            <img className="image" src="https://dummyimage.com/900x400/d9d2d9"/>
        </div>

      <div>
        <h1>{title}</h1>
        <p>{children}</p>
        <ButtonComp>Call to action!</ButtonComp>
      </div>
    </article>
  );
};

export default ArticleComponent;
