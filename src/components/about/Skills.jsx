import React from "react";

const skillsContent = [
    {skillClass: "p80", skillPercent: "80", skillName: "HTML"},
    {skillClass: "p50", skillPercent: "50", skillName: "JAVASCRIPT"},
    {skillClass: "p30", skillPercent: "30", skillName: "JAVA"},
    {skillClass: "p30", skillPercent: "30", skillName: "Go"},
    {skillClass: "p80", skillPercent: "80", skillName: "PYTHON"},
    {skillClass: "p50", skillPercent: "50", skillName: "Scala"},
    {skillClass: "p50", skillPercent: "50", skillName: "Akka"},
    {skillClass: "p20", skillPercent: "20", skillName: "Cats"},
    {skillClass: "p70", skillPercent: "70", skillName: "Redis"},
    {skillClass: "p70", skillPercent: "70", skillName: "PostgreSQL"},
    {skillClass: "p50", skillPercent: "50", skillName: "MySQL"},
    {skillClass: "p50", skillPercent: "50", skillName: "MongoDB"},
    {skillClass: "p20", skillPercent: "20", skillName: "Apache CassandraDB"},
    {skillClass: "p70", skillPercent: "70", skillName: "FastAPI"},
    {skillClass: "p90", skillPercent: "90", skillName: "Flask"},
    {skillClass: "p80", skillPercent: "80", skillName: "Django"},
    {skillClass: "p50", skillPercent: "50", skillName: "NestJS"},
    {skillClass: "p30", skillPercent: "30", skillName: "Typescript"},
    {skillClass: "p40", skillPercent: "40", skillName: "Functional programming"},
    {skillClass: "p90", skillPercent: "90", skillName: "Object oriented programming"},
    {skillClass: "p40", skillPercent: "40", skillName: "Agile"},
    {skillClass: "p40", skillPercent: "40", skillName: "Scrum"},
    {skillClass: "p30", skillPercent: "30", skillName: "ReactJS"},
    {skillClass: "p60", skillPercent: "60", skillName: "Apache Kafka"},
    {skillClass: "p20", skillPercent: "20", skillName: "Apache spark"},
    {skillClass: "p40", skillPercent: "40", skillName: "Linux"},
    {skillClass: "p70", skillPercent: "70", skillName: "RabbitMQ"},
    {skillClass: "p40", skillPercent: "40", skillName: "Http4s"},
    {skillClass: "p80", skillPercent: "80", skillName: "Docker"},
    {skillClass: "p30", skillPercent: "30", skillName: "Kubernetes"},
    {skillClass: "p50", skillPercent: "50", skillName: "Github Actions"},
    {skillClass: "p30", skillPercent: "30", skillName: "Play framework"},
    {skillClass: "p95", skillPercent: "95", skillName: "Git"},
    {skillClass: "p20", skillPercent: "20", skillName: "AWS"},
];

const Skills = () => {
    return (
        <>
            {skillsContent.map((val, i) => (
                <div className="col-6 col-md-2 mb-3 mb-sm-5" key={i}>
                    <div className={`c100 ${val.skillClass}`}>
                        <span>{val.skillPercent}%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                    <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {val.skillName}
                    </h6>
                </div>
            ))}
        </>
    );
};

export default Skills;
