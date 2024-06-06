const logotext = "MS";
const meta = {
    title: "Michael Sutanto",
    description: "Hi, I'm Michael an Electrical Engineering student in UIUC who loves developing new things! " ,
};

const introdata = {
    title: "Hi! I'm Michael Sutanto!",
    animated: {
        first: "I am a full stack developer",
        second: "I engineer innovative software systems",
        third: "I build blockchain solutions",
    },
    description: "I'm an enthusiastic fresh graduate software engineer with experience in diverse technological skillsets. I love tackling complex problems and creating seamless digital experiences. Let's innovate together!!",
    your_img_url: "https://i.ibb.co/wsqSVH3/IMG-4247.jpg"
};

const dataabout = {
    title: "about my self",
    aboutme: "Hey there! I'm Michael, a software engineer who loves turning innovative ideas into tangible solutions. Whether it is studying new disruptive technologies, or spearheading development projects, I thrive on tackling complex challenges head-on. My journey has been as diverse as it's been exciting – from optimizing blockchain infrastructure to building autonomous sailboats and crafting real-time operating systems. Armed with a Bachelor's in Electrical Engineering from the University of Illinois at Urbana-Champaign, coupled with minors in Computer Science, I bring a blend of technical prowess and creative flair to every project I touch. When I'm not coding, you'll find me reading AI Medium posts, cooking creative meals, or competing in the basketball court. Let's connect and embark on a journey to transform ideas into reality!",
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
        title: "Kadena | Software Engineer | June 2022 - Jan 2023",
        description: "º Co-developed NFT based token lending protocol for service providers with other interns using Pact-lang, Marmalade, and react.js º Created Typescript API for Marmalade, Kadena’s poly-fungible token protocol, to allow developers incorporating token functionality in dApps without learning Pact" },
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
        img: "https://i.ibb.co/6D1Bth1/Subscribe-KDA.png",
        title: "NFT Lending Protocol",
        description: "Protocol built on Kadena blockchain that supports time based lending of non-fungible tokens in the blockchain",
        link: "https://www.youtube.com/watch?v=uSUi3tURkdI",
        github: "https://github.com/miketanto/subscribe-kadena"
    },
    {
        img: "https://i.ibb.co/dpvfyP6/Skills-Wallet.png",
        title: "Web3 Credential Wallet",
        description: "Online wallet for blockchain verified credential accreditations handed out by trusted experts",
        link: "https://www.youtube.com/watch?v=Gnk0cOXFrlI",
        github:"https://github.com/miketanto/web3-credential-wallet",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        title: "IBlock NFT Marketplace",
        description: "Non Fungible Token Marketplace application built on Ethereum-based private university blockchain",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        title: "Rhythm Game Built On FPGA",
        description: "Falling Tile Rhythm Game developed on Intel DE10-Lite FPGA SoC using System Verilog and C",
        link: "https://youtu.be/sPTVWSdywvc" ,
    },
    {
        img: "https://i.ibb.co/vm3BP1Y/Screen-Shot-2023-07-31-at-2-40-53-PM.png",
        title: "Cloud Based POS System",
        description: "Point-of-Sales web application featuring live-sharable cart for seamless group ordering",
        link: "https://www.youtube.com/watch?v=r4BgBkRNeUg",
    },
    {
        img: "https://i.ibb.co/DMFzCH5/Screen-Shot-2023-07-30-at-5-27-49-PM.png",
        title: "Guess or Dare Hackathon Game",
        description: "A twist on truth or dare made for a hackathon",
        link: "https://www.youtube.com/watch?v=PkMsE6-gnY8",
        github: "https://github.com/miketanto/WECE-HACKS"
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        title: "Autonomous Sailboat",
        description: "Autonomous Sailboat that adjusts its sail and rudder configurations based on wind angle and deviation from course",
        link: "https://youtu.be/p3-AgPk7rfw",
        github: "https://github.com/miketanto/AutoSail"
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        title: "Unix-Like Operating System",
        description: "Unix Operating System that features ability to run three terminals concurrently.",
        link: "https://www.youtube.com/watch?v=KSsCRFt93-Q",
        github: "https://github.com/miketanto/ECE391_OS"
    }
];

const contactConfig = {
    YOUR_EMAIL: "mikesutanto1812@gmail.com",
    YOUR_FONE: "(217)8986845",
    description: "Feel free to contact me about any inquiries!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ksiccgs",
    YOUR_TEMPLATE_ID: "contact_form",
    YOUR_USER_ID: "Pc66Qa_DWmLg4IYle",
};

const socialprofils = {
    github: "https://github.com/miketanto",
    linkedin: "https://www.linkedin.com/in/mike-sutanto/",
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