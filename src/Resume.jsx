import mail from "./images/mail.png";
import number from "./images/phone.png";
import profile from "./images/profileimg.png";
import infologo from "./images/LogoRight.png";
import ResumeComponent from "./components/Resumeee";

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
          <ResumeComponent
            title="ჩემ შესახებ"
            resourse="ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ 
            ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ."
          />
          <div className="for-overflow">
            <ResumeComponent
              title="გამოცდილება"
              experience="React Native Developer, Microsoft"
              date="2020-09-23 - 2020-09-23"
              text="Experienced Javascript Native Developer with 5 years in the industry.
               proficient withreact. Used problem-solving aptitude to encahge application
                performance by 14%.created data visualisation tools and integrated designs. "
            />
            <ResumeComponent
              title="განათლება"
              experience="წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი"
              date="2020-09-23"
              text="ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა.
               ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა 
               და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი? "
            />
            <ResumeComponent
              title="განათლება"
              experience="წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი"
              date="2020-09-23"
              text="ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა.
               ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა 
               და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი? "
            />
            <ResumeComponent
              title="განათლება"
              experience="წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი"
              date="2020-09-23"
              text="ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა.
               ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა 
               და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი? "
            />
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
