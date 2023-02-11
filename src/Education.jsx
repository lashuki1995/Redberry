import "./App.css";
import Headerr from "./components/Header";
import Resume from "./Resume";
import { Input } from "./components/Input";
import Button from "./components/Buttons-next-previous";
import Textarea from "./components/Textarea";

export default function Education() {
  return (
    <div className="main-information">
      <div className="information-main-coteiner">
        <Headerr titleName="პირადი ინფო" titlePagee="3/3" />
        <form className="information-main1-conteiner">
          <div className="information-name-lastName dashoreba">
            <Input
              label="სასწავლებელი"
              placeholder="სასწავლებელი"
              description="მინიმუმ 2 სიმბოლო"
            />
          </div>

          <div className="information-name-lastName ">
            <Input type="text" label="ხარისხი" placeholder="აირჩიეთ ხარისხი" />
            <Input type="date" label="დამთავრების რიცხვი" />
          </div>
          <Textarea title="აღწერა" placeholder="განათლების აღწერა" />
          <hr className="linius" />
          <button className="information-upload-photo-buttonn">
            სხვა სასწავლებლის დამატება
          </button>

          <Button type="button" value="უკან" style={{ float: "left" }} />
          <Button type="button" value="შემდეგი" style={{ float: "right" }} />
        </form>
      </div>
      <Resume />
    </div>
  );
}
