import project1 from "../assets/image/portfolio1.jpg";
import project2 from "../assets/image/portfolio2.jpg";
import project3 from "../assets/image/portfolio3.jpg";
import project4 from "../assets/image/portfolio4.jpg";
import project5 from "../assets/image/portfolio5.jpg";
import project6 from "../assets/image/portfolio6.jpg";

export const HERO_CONTENT = `
    I am a passionate full stack developer and data scientist
    and have the ability to create powerful and scalable web
    applications in fullstack and data analysis and processing
    in data scientist.`;

export const ABOUT_TEXT = `
    Irfan Wahyu Ramadhani is a final year student from Dian Nuswantoro University majoring in Informatics
    Engineering. Interest in the role of data and website. Proficient in SQL, Python, Excel, and Data Visualization
    Tools in data science as well as React, Express, Flutter on websites. Have experience some Data Science projects,
    and also some Full Stack Website Projects. I learned skills that made it easier. I want to join a team and work
    together continuously to achieve results amidst failures and setbacks. I am a person who is able to make decisions
    quickly and correctly, even when the situation is critical or in bad circumstances pressure`;


export const Link = [
      {
          href: "https://www.instagram.com/iwer_4/",
          iconClass: "bxl-instagram",
          alt: "Instagram",
      },
      {
          href: "https://www.linkedin.com/in/irfan-wahyu-ramadhani/",
          iconClass: "bxl-linkedin",
          alt: "Linkedin",
      },
      {
          href: "https://github.com/irfanwahyr",
          iconClass: "bxl-github",
          alt: "Github",
      },
  ];

export const EXPERIENCE = [
    {
        year: "2024",
        title: "Data Science participant",
        description: `MSIB batch 6 program as a participant in data science for business development by Course-Net.
                  3 mini projects, 1 final assignment, and class materials have been completed`,
        side: "left"
    },
    {
        year: "2024",
        title: "FullStack website Developer",
        description: `Creating a fullstack website and database design of the Dian Nuswantoro University laboratory lending Website.
                    The laboratory lending website is used as a means of borrowing for all related activities,
                    such as substitute classes and university events`,
        side: "right"
    },
    {
      year: "2023",
      title: "Research Collaborator (Data Scientist)",
      description: `Conducting research on air quality index forecasting and assisting a professor's research.
                    Publishing a Journal in SINTA 3 and Q3`,
      side: "left"
    },
];

export const PROJECTS = [
  {
    category: "fullStack",
    title: "Online Reservatian Lab",
    image: project1,
    description:
      "Dian Nuswantoro University computer laboratory website reservation.",
    technologies: ["ExpressJS", "Flutter", "Node.js"],
    link: "https://github.com/irfanwahyr/online_reservation_Udinus_FE"
  },
  {
    category: "fullStack",
    title: "Galonku App",
    image: project2,
    description:
      "Application for sellers and buyers of drinking water that makes it easier to buy and sell gallons of drinking water.",
    technologies: ["Flutter", "Firebase"],
    link: "https://github.com/azbiyyu/Galonku"
  },
  {
    category: "datascience",
    title: "Employee Attrition Prediction",
    image: project3,
    description:
      "Analysis, dashboards, modeling, and insights related to employee attrition predictions.",
    technologies: ["Jupyter Notebook", "Metabase", "Python"],
    link: "https://github.com/irfanwahyr/employee_attrition_prediction"
  },
  {
    category: "datascience",
    title: "Forecasting AQI",
    image: project4,
    description:
      "AQI forecasting at busy sports venues using LSTM.",
    technologies: ["Jupyter Notebook", "Python"],
    link: "https://github.com/irfanwahyr/AQI_Prediction_deploy"
  },
  {
    category: "datascience",
    title: "Sentiment Analysis - Emotion Detection",
    image: project5,
    description:
      "Sentiment analysis related to emotions in tweet text.",
    technologies: ["Jupyter Notebook", "Python"],
    link: "https://github.com/irfanwahyr/NLP---Sentiment-Analisys---Emotion-Detection-from-Tweet-Text"
  },
  {
    category: "datascience",
    title: "Student performance Prediction",
    image: project6,
    description:
      "Analysis, dashboards, modeling, and insights related to Student Performance predictions.",
    technologies: ["Jupyter Notebook", "Metabase", "Python"],
    link: "https://github.com/irfanwahyr/student_performance_prediction"
  },
];

export const SKILLS = {
      fullstack: [
        { title: "JavaScript", icon: "bxl-javascript" },
        { title: "React", icon: "bxl-react" },
        { title: "Node.js", icon: "bxl-nodejs" },
        { title: "Tailwind", icon: "bxl-tailwind-css" },
        { title: "Git", icon: "bxl-git" },
        { title: "TypeScript", icon: "bxl-typescript" },
      ],
      datascience: [
        { title: "Python", icon: "bxl-python" },
        { title: "Metabase", icon: "bx-circle-three-quarter" },
        { title: "Jupyter Notebook", icon: "bxl-python" },
        { title: "Tableau", icon: "bx-circle-three-quarter" },
        { title: "Tensorflow", icon: "bxl-python" },
        { title: "Looker Studio", icon: "bx-circle-three-quarter" },
      ]
}

export const EMAIL = {
  email: "iramadhani679@gmail.com"
}

export const COPYRIGHT = {
  year: "2024",
};