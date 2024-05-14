import Image1 from "../../assets/img/portfolio/img_1.png";
import Image2 from "../../assets/img/portfolio/img.png";
import Image3 from "../../assets/img/portfolio/img_6.png";
import Image4 from "../../assets/img/portfolio/img_2.png";
import Image5 from "../../assets/img/portfolio/img_3.png";
import Image6 from "../../assets/img/portfolio/img_4.png";
import Image7 from "../../assets/img/portfolio/img_5.png";


const PortfolioData = [
    {
        id: 1,
        type: "Maraboo",
        image: Image1,
        tag: ["CTO"],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Maraboo",
                client: "Maraboo",
                language: "Python, Rabbitmq, Docker, AWS, FastAPI, SQLAlchemy, TortoiseORM",
                preview: "www.mara.boo",
                link: "https://www.mara.boo",
                description: "Maraboo is a cross-boarder payment system that operators between Canada and Francophone west African countries",
            },
        ],
    },
    {
        id: 2,
        type: "Storri AI",
        image: Image2,
        tag: ["Lead Software engineer"],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Storri AI",
                client: "Storri AI",
                language: "Python, Rabbitmq, Docker, Pandas, ChatGPT, Flask, SQLAlchemy, Redis, PostgreSQL, MongoDB",
                preview: "www.storri.vercel.app",
                link: "https://storri.vercel.app",
                description: "Storri AI is a Generative AI that focuses on converting Text based data to Interactive and descriptive videos",
            },
        ],
    },
    {
        id: 3,
        type: "Speed manager",
        image: Image3,
        tag: ["Lead Software engineer"],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Speed manager",
                client: "Speed manager",
                language: "Python, Rabbitmq, Docker, Apache kafka, Twisted Python, SQLAlchemy, Sockets, Web-sockets, Redis, MySQL, PostgreSQL",
                preview: "www.speedmanager.com",
                link: "https://www.speedmanager.com",
                description: "Speed manager is a suite of softwares built around vehicle tracking and fleet management. It involves hardware installations in vehicles and configurations as well as full scale real-time GPS tracking",
            },
        ],
    },
    {
        id: 4,
        type: "Mkobo Microfinance bank",
        image: Image4,
        tag: ["Python and DevOps engineering consultant"],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Mkobo Microfinance bank",
                client: "Mkobo Microfinance bank",
                language: "Python, Rabbitmq, Docker, RPC, Redis, Kubernetes, Typescript, SQLAlchemy, TortoiseORM, PostgreSQL, AWS",
                preview: "www.mkobo.bank",
                link: "https://www.mkobo.bank",
                description: "Mkobo is a Microfinance bank that provides digital banking services.",
            },
        ],
    },
    {
        id: 5,
        type: "Deepview",
        image: Image5,
        tag: ["Scala engineer and DevOps Engineer"],
        delayAnimation: "100",
        modalDetails: [
            {
                project: "Deepview",
                client: "Deepview",
                language: "Python, Scala, Akka, Google cloud(GCP), Redis cluster, Apache Kafka, Kubernetes, Docker, Monix, gRPC, Web-socket, MongoDB, Cats, Functional programming",
                preview: "www.deepview.com",
                link: "https://www.deepview.com",
                description: "DeepView delivers a unified platform for managing risk on digital platforms. With interactive secure portal allowing our 'Buddies' to enable employees to engage their networks securely and compliantly.",
            },
        ],
    },
    {
        id: 6,
        type: "Layer (Ubanquity)",
        image: Image6,
        tag: ["Software engineer"],
        delayAnimation: "200",
        modalDetails: [
            {
                project: "Layer",
                client: "Layer",
                language: "Python, Golang, Linux Administration, Apache Kafka,  ISO8583, BPMN, PostgreSQL",
                preview: "www.wearelayer.com",
                link: "https://www.wearelayer.com",
                description: "Layer is a banking platform that apply digital and innovative transformations to existing bank infrastructure without replacing the core banking systems.",
            },
        ],
    },
    {
        id: 7,
        type: "Evince Nigeria Limited",
        image: Image7,
        tag: ["Junior Software engineer"],
        delayAnimation: "0",
        modalDetails: [
            {
                project: "Evince Nigeria Limited",
                client: "Evince Nigeria Limited",
                language: "Python, PostgreSQL, Apache Camel, Apache Spark, Scala, Playframework, Akka, ReactJS, Javascript, HTML, CSS, Java, Spring framework",
                preview: "www.evincesystems.com",
                link: "https://www.evincesystems.com",
                description: "Evince is a consulting company that offer software engineering services to financial institutions and other data driven companies.",
            },
        ],
    }
];

export default PortfolioData;
