import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Olalekan" },
  { meta: "last name", metaInfo: "Adebari" },
  { meta: "Age", metaInfo: "30 Years" },
  { meta: "Nationality", metaInfo: "Nigerian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Nigeria" },
  { meta: "phone", metaInfo: "+2348129014778" },
  { meta: "Email", metaInfo: "Adebari.olalekan.oluwaseun@gmail.com" },
  { meta: "Skype", metaInfo: " horlahlekhon" },
  { meta: "languages", metaInfo: "English, Pidgin, Yoruba" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
