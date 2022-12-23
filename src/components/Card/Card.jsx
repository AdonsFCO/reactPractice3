import "./Card.css";
import "./Card.css";
import ButtonComp from "../Button/ButtonComp";



const Card = ({Title, children}) => {
  return (
    <div className="card">
      <h2>
        {Title}
      </h2>
      <p>{children}</p>
        <ButtonComp>
            More Info
        </ButtonComp>
    </div>
  );
};

export default Card;
