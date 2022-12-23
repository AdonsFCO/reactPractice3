import "./Showcase.css";
const Showcase = ({
  children = "This call to action card is great place to showcase some important information or display a clever tagline.",
}) => {
  return (
    <div className="showCase">
      <p>{children}</p>
    </div>
  );
};

export default Showcase;
