import mail from "./images/mail.png";
import number from "./images/phone.png";
import profile from "./images/profileimg.png";
import infologo from "./images/LogoRight.png";

const Resume = () => {
  return (
    <div className="information-carieli">
      <div className="experience-div-allmostMain">
        <figure className="person-info-profile">
          <img src={profile} alt="" />
        </figure>
        <h2 className="person-info-nameLastname">ლაშა გიორგაძე</h2>
        <span className="person-info-mailnumber">
          <span className="person-info-mail">
            <img className="person-info-mail-img imgimg " src={mail} alt="" />
            <span className="person-info-mail-mail">
              mr.lashuki.giorgadze@redberry.ge
            </span>
          </span>
          <span className="person-info-number">
            <img className="person-info-mail-img imgimg" src={number} alt="" />
            <span className="person-info-mail-number">+995 551 87 27 77</span>
          </span>
        </span>
        <section className="person-info">
          <div className="person-main-info">
            <h3 className="personal-info-about-me">ჩემ შესახებ</h3>
            <p className="personal-info-about-me-yes">
              ძალიან მიყვარს დიზაინის კეთება. დლით ადრე რომ ავდგები
              გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
            </p>
            <hr className="personal-info-line" />
          </div>
          <div className="for-overflow">
            <div className="person-main-info2">
              <h3 className="person-info-information">გამოცდილება</h3>
              <span className="person-info-information-known">
                React Native Developer, Microsoft
              </span>
              <span className="person-info-information-known-date">
                2020-09-23 - 2020-09-23
              </span>
              <span className="person-info-information-known-datee">
                Experienced Javascript Native Developer with 5 years in the
                industry. proficient withreact. Used problem-solving aptitude to
                encahge application performance by 14%.created data
                visualisation tools and integrated designs.
              </span>
              <hr className="person-info-information-line2" />
            </div>
            <div className="person-main-info2">
              <h3 className="person-info-information">განათლება</h3>
              <span className="person-info-information-known">
                წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი
              </span>
              <span className="person-info-information-known-date">
                2020-09-23
              </span>
              <span className="person-info-information-known-datee">
                ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
                კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ
                კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ,
                დრო მოვა და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ
                დეველოპერი?
              </span>
            </div>
          </div>
        </section>
        <figure className="person-info-logo">
          <img src={infologo} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Resume;
