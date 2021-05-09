import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_CPP from "../../assets/img/skills/cpp.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";

export const skills = {
    frontend: [

        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
        },

        {
            link: "https://reacttraining.com/react-router/",
            imgAltText: "React Router",
            imgSrc: L_REACT_ROUTER,
            skillName: "React Router",
        }
    ],

    backend: [
        {
            link: "https://nodejs.org/en/",
            imgAltText: "Node.js",
            imgSrc: L_NODE_JS,
            skillName: "Node.js",
        },
        {
            link: "https://expressjs.com/",
            imgAltText: "Express",
            imgSrc: L_EXPRESS,
            skillName: "Express",
        },

    ],
    hostingPlatforms: [
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: L_GITHUB_PAGES,
            skillName: "GitHub Pages",
        },
    ],
    programmingLanguages: [
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "http://www.cplusplus.org/",
            imgAltText: "C++",
            imgSrc: L_CPP,
            skillName: "C++",
        },
        {
            link: "https://www.python.org/",
            imgAltText: "Python",
            imgSrc: L_PYTHON,
            skillName: "Python",
        },
    ],
    databases: [
        {
            link: "https://www.mysql.com/",
            imgAltText: "MySQL",
            imgSrc: L_MYSQL,
            skillName: "MySQL",
        },
        {
            link: "https://www.mongodb.com/",
            imgAltText: "MongoDB",
            imgSrc: L_MONGODB,
            skillName: "MongoDB",
        },
    ],
    versionControl: [
        {
            link: "https://git-scm.com/",
            imgAltText: "GIT",
            imgSrc: L_GIT,
            skillName: "GIT",
        },
    ],
};