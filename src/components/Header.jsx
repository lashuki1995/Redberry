import "../App.css";
import headback from "../images/arrow left.png";
import headbackbackground from "../images/Ellipse 1.png";

const Header = ({ titleName, titlePagee, style }) => (
  <div className="headerStyles">
    <div className="information-head1">
      <div className="information-head">
        <figure className="information-head-figure">
          <img
            className="information-head-back"
            src={headback}
            alt="mainLogo"
          />
          <img
            className="information-head-back-background"
            src={headbackbackground}
            alt="mainLogo"
          />
        </figure>
        <div className="personal-info">
          <h2 className="personal-information">{titleName}</h2>
          <p className="personal-information1" style={style}>
            {titlePagee}
          </p>
        </div>
      </div>
      <hr className="information-line" />
    </div>
  </div>
);

export default Header;
