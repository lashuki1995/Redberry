// export default function Buttons() {
//   return (
//     <div className="input-next-previous">
//       <input className="information-next ukan" type="button" value="უკან" />
//       <input
//         className="information-next shemdegi"
//         type="button"
//         value="შემდეგი"
//       />
//     </div>
//   );
// }
import styled from "styled-components";
import "../App.css";

const Button = ({ value, style, type }) => {
  return (
    <Buttons>
      <input style={style} type={type} value={value} />
    </Buttons>
  );
};

const Buttons = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  & input {
    background-color: #6b40e3;
    padding: 12px 45px;
    outline: none;
    border-radius: 3px;
    border: none;
    color: white;
    font-weight: bolder;
    cursor: pointer;
  }
`;
export default Button;
