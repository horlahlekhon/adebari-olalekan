import React from "react";

// Experiences
// * CTO -  Maraboo - 2023 to present
//
// Maraboo is a cross-boarder payment system that operators between Canada and Francophone west African countries
// website: https://www.mara.boo
//     Skills and tools: Python, Rabbitmq, Docker, AWS, FastAPI, SQLAlchemy, TortoiseORM
//
//
// * Lead Software engineer - Storri AI - 2022 - 2023
// Storri AI is a Generative AI that focuses on converting Text based data to Interactive and descriptive videos
// website: https://storri.vercel.app/
//     Skills and tools: Python, Rabbitmq, Docker, Pandas, ChatGPT, Flask, SQLAlchemy, Redis, PostgreSQL, MongoDB
//
// * Lead Software engineer - Speed manager - 2021 to 2022
// Speed manager is a suite of softwares built around vehicle tracking and fleet management. It involves hardware installations in vehicles and configurations as well as full scale real-time GPS tracking
// Skills and tools: Python, Rabbitmq, Docker, Apache kafka, Twisted Python, SQLAlchemy, Sockets, Web-sockets, Redis, MySQL, PostgreSQL,
//
// * Python and DevOps engineering consultant - Mkobo Microfinance bank - 2020 to 2021
// Mkobo is a Microfinance bank that provides digital banking services.
//     website: https://www.mkobo.bank/
//     Skills and tools: Python, Rabbitmq, Docker, RPC, Redis, Kubernetes, Typescript, SQLAlchemy, TortoiseORM, PostgreSQL, AWS
//
// * Scala engineer and DevOps Engineer - Deepview - 2019 to 2021
// DeepView delivers a unified platform for managing risk on digital platforms. With interactive secure portal allowing our 'Buddies' to enable employees to engage their networks securely and compliantly.
//     website: https://deepview.com/
//     Skills and tools: Python, Scala, Akka, Google cloud(GCP), Redis cluster, Apache Kafka, Kubernetes, Docker, Monix, gRPC, Web-socket, MongoDB, Cats, Functional programming
//
// * Software engineer - Ubanquity(now Layer) - 2019
// Layer is a banking platform that apply digital and innovative transformations to existing bank infrastructure without replacing the core banking systems.
//     website: https://www.wearelayer.com/
//     Skills and tools: Python, Golang, Linux Administration, Apache Kafka,  ISO8583, BPMN, PostgreSQL.
//
// * Junior Software engineer - Evince Nigeria Limited  - 2017 to 2018
// Evince is a consulting company that offer software engineering services to financial institutions and other data driven companies.
//     website: https://evincesystems.com/
//     Skills and tools: Python, PostgreSQL, Apache Camel, Apache Spark, Scala, Playframework, Akka, ReactJS, Javascript, HTML, CSS, Java, Spring framework,

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
