import "./App.css";
import Headerr from "./components/Header";
import Resume from "./Resume";
import { Input } from "./components/Input";
import Button from "./components/Buttons-next-previous";
import Textarea from "./components/Textarea";

export default function Experience() {
  return (
    <div className="main-information">
      <div className="information-main-coteiner">
        <Headerr titleName="პირადი ინფო" titlePagee="2/3" />
        <form className="information-main1-conteiner">
          <div className="information-name-lastName dashoreba">
            <Input
              label="თანამდებობა"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              description="მინიმუმ 2 ასო, ქართული ასოები"
            />
          </div>

          <Input
            type="text"
            label="დამსაქმებელი"
            placeholder="დამსაქმებელი"
            description="მინიმუმ 2 სიმბოლო"
          />
          <div className="information-name-lastName ">
            <Input
              type="date"
              label="დაწყების რიცხვი"
              placeholder="mm / dd / yyyy"
            />
            <Input
              type="date"
              label="დამთავრების რიცხვი"
              placeholder="mm &nbsp;/ dd / yyyy"
            />
          </div>
          <div className="titlee">
            <Textarea
              title="აღწერა"
              value="როლი თანამდებობაზე და ზოგადი აღწერა"
            />
          </div>
          <hr className="linius" />
          <button className="information-upload-photo-buttonn">
            მეტი გამოცდილების დამატება
          </button>
          <Button type="button" value="უკან" style={{ float: "left" }} />
          <Button type="button" value="შემდეგი" style={{ float: "right" }} />
        </form>
      </div>
      <Resume />
    </div>
  );
}
