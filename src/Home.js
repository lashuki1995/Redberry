import "./App.css";
import background from "./images/background.png";
import mainLogo from "./images/logo.png";
import LogoAbsolute from "./images/redberry-logo.png";

export default function Home() {
  return (
    <div className="App">
      <div className="main" style={{ backgroundImage: `url(${background})` }}>
        <figure className="mainLogo">
          <img className="main-logo-image" src={mainLogo} alt="mainLogo" />
        </figure>
        <hr className="hr-line" />
        <form className="main-form" action="">
          <input
            className="main-button"
            type="button"
            value="რეზიუმეს დამატება"
          />
        </form>
        <img className="logo-absolute" src={LogoAbsolute} alt="LogoAbsolute" />
      </div>
    </div>
  );
}
