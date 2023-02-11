import "./App.css";
import Headerr from "./components/Header";
import Resume from "./Resume";
import { Input } from "./components/Input";
import Textarea from "./components/Textarea";
import Button from "./components/Buttons-next-previous";

export default function Personal() {
  return (
    <div className="main-information">
      <div className="information-main-coteiner">
        <Headerr titleName="პირადი ინფო" titlePagee="1/3"  />
        <form className="information-main1-conteiner">
          <div className="information-name-lastName">
            <Input
              label="სახელი"
              placeholder="ლაშა"
              description="მინიმუმ 2 ასო, ქართული ასოები"
            />
            <Input
              label="გვარი"
              placeholder="გიორგაძე"
              description="მინიმუმ 2 ასო, ქართული ასოები"
            />
          </div>
          <div className="information-personal-photo-upload-form" action="">
            <label className="information-upload-photo-label" htmlFor="">
              პირადი ფოტოს ატვირთვა
            </label>
            <input
              className="information-upload-photo-input-file"
              type="file"
            />
            <button className="information-upload-photo-button">
              ატვირთვა
            </button>
          </div>
          <div className="titlee">
            <Textarea
              title="ჩემ შესახებ (არასავალდებულო)"
              value="ზოგადი ინფო შენ შესახებ"
            />
          </div>
          <Input
            type="text"
            label="ელ.ფოსტა"
            placeholder="ზოგადი ინფო შენ შესახებ"
            description="უნდა მთავრდებოდეს @redberry.ge-ით"
          />
          <Input
            type="text"
            label="მობილურის ნომერი"
            placeholder="ზოგადი ინფო შენ შესახებ"
            description="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
          />

          <Button type="button" value="უკან" style={{ float: "left" }} />
          <Button type="button" value="შემდეგი" style={{ float: "right" }} />
        </form>
      </div>
      <Resume />
    </div>
  );
}
