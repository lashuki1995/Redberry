import styled from "styled-components";

export const Input = ({ label, placeholder, description, type }) => {
  return (
    <Inputson>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      <span>{description}</span>
    </Inputson>
  );
};

const Inputson = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 30px;
  & input {
    padding: 10px 10px;
    margin: 5px 0;
    border-radius: 4px;
    border: 2px solid #bcbcbc;
  }
  & label {
    font-weight: bolder;
  }
`;
