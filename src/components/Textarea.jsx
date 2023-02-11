import styled from "styled-components";

const Textarea = ({ title, placeholder, rows, name, onChange, value }) => (
  <TextareaWrapper>
    <label>{title}</label>
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  </TextareaWrapper>
);

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & textarea {
    padding: 10px 0 70px 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 2px solid #bcbcbc;
    resize: none;
    overflow: hidden;
  }
  & label {
    font-weight: bolder;
  }
`;
export default Textarea;
