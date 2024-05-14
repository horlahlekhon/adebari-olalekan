import React from "react";

const experienceContent = [
  {
    year: "2023 - Present",
    position: "CTO",
    compnayName: "Maraboo",
    details: `Maraboo is a cross-boarder payment system that operators between Canada and Francophone west African countries`,
  },
  {
    year: "2022 - 2023",
    position: "Lead Software engineer",
    compnayName: "Storri AI",
    details: `Storri AI is a Generative AI that focuses on converting Text based data to Interactive and descriptive videos`,
  },
  {
    year: "2021 - 2022",
    position: "Lead Software engineer",
    compnayName: "Speed manager",
    details: `Speed manager is a suite of softwares built around vehicle tracking and fleet management. It involves hardware installations in vehicles and configurations as well as full scale real-time GPS tracking`,
  },
  {
    year: "2020 - 2021",
    position: "Python and DevOps engineering consultant",
    compnayName: "Mkobo Microfinance bank",
    details: `Mkobo is a Microfinance bank that provides digital banking services.`,
  },
  {
    year: "2019 - 2021",
    position: "Scala engineer and DevOps Engineer",
    compnayName: "Deepview",
    details: `DeepView delivers a unified platform for managing risk on digital platforms. With interactive secure portal allowing our 'Buddies' to enable employees to engage their networks securely and compliantly.`,
  },
  {
    year: "2019",
    position: "Software engineer",
    compnayName: "Ubanquity(now Layer)",
    details: `Layer is a banking platform that apply digital and innovative transformations to existing bank infrastructure without replacing the core banking systems.`,
  },
  {
    year: "2017 - 2018",
    position: "Junior Software engineer",
    compnayName: "Evince Nigeria Limited",
    details: `Evince is a consulting company that offer software engineering services to financial institutions and other data driven companies.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
