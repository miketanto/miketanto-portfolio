const logotext = "MS";
const meta = {
    title: "Michael Sutanto",
    description: "Hi, I'm Michael an Electrical Engineering student in UIUC who loves developing new things! " ,
};

const introdata = {
    title: "Hi! I'm Michael Sutanto!",
    animated: {
        first: "I develop full stack!",
        second: "I love web3 🚀",
        third: "I am interested in new technologies!",
    },
    description: "Electrical Engineering and Computer Science student in UIUC who loves developing new things!",
    your_img_url: "https://i.ibb.co/9qTdtvC/IMG-2249.jpg"
};

const dataabout = {
    title: "about my self",
    aboutme: "I'm a student software engineer with a strong background in full stack web development, web3 programming, and robotics! I'm naturally curious and my core drivers while working on projects is learning new things!",
};
const courses = [{
        jobtitle: "CS225",
        where: "Data Structures and Algorithms",
        date: "A",
    },
    {
        jobtitle: "CS 440",
        where: "Machine Learning",
        date: "A",
    },
    {
        jobtitle: "ECE 385",
        where: "FPGA Programming",
        date: "B+",
    },
    {
        jobtitle: "ECE 391",
        where: "Computer Systems Engineering",
        date: "-Pending-",
    },
    {
        jobtitle: "ECE 428",
        where: "Distributed Systems",
        date: "-Pending-",
    }
];

const skills = [{
        name: "Javascript and JS Libraries",
        value: 90,
    },
    {
        name: "Python",
        value: 85,
    },
    {
        name: "Solidity",
        value: 80,
    },
    {
        name: "Unit Testing Libraries (Mocha)",
        value: 60,
    },
    {
        name: "FPGA Programming (System Verilog)",
        value: 60,
    },
];

const worktimeline = [{
        title: "Kadena | Software Engineer | June 2022 - June 2023",
        description: "º Co-developed NFT based token lending protocol for service providers with other interns using Pact-lang, Marmalade, and react.js º Created Typescript API for Marmalade, Kadena’s poly-fungible token protocol, to allow developers incorporating token functionality in dApps without learning Pact"
    },
    {
        title: "UIUC Disruption Lab | Project Technical Lead | Jan 2022-Jan 2023",
        description: "º Independently built microservice based API using Node.js, express, and Microsoft Active Azure Directory to link university emails to custodial wallets, thus abstracting cryptographic wallet creation from 5000+ student users º Collaborated with cross-stream developers to write automated frontend tests using Cypress and smart contract tests using Mocha to ensure continuous application integration",
    },
    {
        title: "UIUC Disruption Lab | Software Engineer | Aug 2021 - Jan 2022",
        description: "º	Conducted and utilized research to create Docker containerization architecture for a private Geth based blockchain that resulted in 99% faster node spin-up time than alternative methods.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "NFT Lending Protocol",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Web3 Credential Wallet",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "IBlock NFT Marketplace",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Rhythm Game Built On FPGA",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Cloud Based POS System",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "Minimax Algorithm Chess Bot",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    courses,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};