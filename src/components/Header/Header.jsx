import "./Header.css";

const Header = () => {
  return (
    <header>
      <a className="brand">Start Bootstrap</a>
      <div className="buttonContainer">
        <a className="button">Home</a>
        <a className="button">About</a>
        <a className="button">Contact</a>
        <a className="button">Services</a>
      </div>
    </header>
  );
};

export default Header;
