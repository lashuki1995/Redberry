import "../App";
import styled from "styled-components";

const ResumeComponent = ({ experience, title, date, text, resourse }) => {
  return (
    <ResumeStyle>
      <h3>{title}</h3>
      <span className="person-info-information-known">{experience}</span>
      <span className="person-info-information-known-date">{date}</span>
      <p>{text}</p>
      <span className="forResourse">{resourse}</span>
      <hr />
    </ResumeStyle>
  );
};

const ResumeStyle = styled.div`
  & h3 {
    margin-top: 20px;
    color: #f93b1d;
  }
  & .person-info-information-known {
    display: block;
    font-weight: bolder;
    margin-top: 15px;
  }
  & .person-info-information-known-date {
    display: block;
    color: #909090;
    margin-top: 5px;
    width: 70%;
  }
  & p {
    display: block;
    margin-top: 15px;
    width: 95%;
    line-height: 25px;
  }
  & hr {
    margin-top: 20px;
    border: 1px solid #c8c8c8;
  }
  & .forResourse {
    display: block;
    width: 70%;
    line-height: 25px;
  }
`;

export default ResumeComponent;
