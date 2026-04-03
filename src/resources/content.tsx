import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Jose Maria",
  lastName: "Juarez",
  name: "Jose Maria Juarez",
  role: "IT student pivoting to Data Engineering & Scalable Analytics with Azure",
  avatar: "/images/avatar-profile.jpg",
  email: "j0s3.juarez@gmail.com",
  location: "America/Monterrey",
  languages: ["Spanish (Native)", "English (Professional)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Stay in the loop with {person.firstName}</>,
  description: <>Brief notes on data, ML/MLOps, fraud prevention, and forecasting.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/j0s3-juarez/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/528112379437",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Data Engineering & Analytics Portfolio`,
  description: `Portfolio highlighting the transition from WFM and fraud prevention into Data Engineering and Azure-based scalable analytics by ${person.name}`,
  headline: <>Bridging Operational Analytics and Data Engineering</>,
  featured: {
    display: false,
    title: <></>,
    href: "/",
  },
  subline: (
    <>
      I am Jose Juarez. I bridge the gap between operational analytics and data engineering by leveraging over 4 years of experience in data validation, KPI tracking, and workforce analytics. Currently focused on designing scalable data solutions, building Python-driven ETL processes, and managing relational databases with Azure SQL to ensure high data quality and empower business decisions.
    </>
  ),
  primaryCTA: {
    label: "Download CV",
    href: "/cv.pdf",
  },
  secondaryCTA: undefined,
  softSkills: {
    title: "My Approach to Work",
    cards: [
      {
        title: "System-Level Accountability",
        description: (
          <>
            I understand that a company is an interconnected ecosystem. With over 4 years in operational environments, I know that my deliverables directly impact other teams. I take full ownership of my pipelines and data quality, ensuring seamless operations across departments.
          </>
        ),
      },
      {
        title: "Autonomous & Collaborative",
        description: (
          <>
            Whether navigating complex technical challenges independently or communicating cross-functionally in English and Spanish, I adapt quickly. I bring structured analytical thinking to autonomous tasks while remaining a highly communicative and supportive team player.
          </>
        ),
      },
      {
        title: "Relentless Learner",
        description: (
          <>
            The data landscape evolves rapidly, and I thrive on that momentum. I am deeply enthusiastic about tackling new challenges, continuously mastering modern architectures, and finding innovative ways to optimize existing processes.
          </>
        ),
      },
    ],
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, an IT student transitioning from workforce analytics and fraud prevention into Machine Learning and Azure MLOps`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As an IT Undergraduate student and Data Professional, I bring over 4 years of hands-on experience in data stewardship, validation, and analytics. My background in workforce management taught me the critical importance of data accuracy. Today, I apply that structured analytical thinking to Data Engineering—using Python (Pandas), SQL, and Azure to build reliable data ingestion workflows, cleanse complex datasets, and structure relational databases for advanced analytics. Fluent in English and Spanish, I thrive in environments that require complex problem-solving and cross-functional communication.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Centris",
        timeframe: "Feb 2019 – Nov 2022",
        role: "Workforce Management Analyst",
        achievements: [
          <>
            Data Stewardship & Quality: Executed data stewardship across operational datasets, ensuring cleansing and accuracy to provide highly reliable data for senior management.
          </>,
          <>
            Data Gathering & Transformation: Assembled, reviewed, and validated large datasets to identify traffic patterns and trends, directly supporting resource forecasting.
          </>,
          <>
            Analytics & Reporting: Analyzed complex operational data to optimize processes, ensuring data accuracy met functional business requirements.
          </>,
        ],
      },
      {
        company: "MDY Contact Center",
        timeframe: "Jul 2016 – Feb 2019",
        role: "Operations Supervisor & Workforce Management Analyst",
        achievements: [
          <>
            DataViz & Modeling: Designed and maintained data dashboards to communicate key operational metrics, enabling strategic data-driven decisions across the floor.
          </>,
          <>
            Data Requirements & Analysis: Collected and analyzed relevant operational data, distinguishing between workflow inefficiencies, technical challenges, and external factors.
          </>,
          <>
            Quality Assurance: Maintained strict data quality and metadata standards to ensure thorough understanding and output enhancement.
          </>,
          <>Earlier experience as Operations Supervisor, and customer support agent.</>,
          <>As the Operations Supervisor, I coached and developed my team to prepare them for career advancement.</>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universidad Autónoma de Nuevo León (UANL)",
        description: (
          <>
            Bachelor of Information Technology (Licenciatura en TI). Expected graduation: Dec 2026. Coursework: Data Structures, Database Management, Probability & Statistics.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Python (Pandas, scripting), SQL.</>,
        tags: [
          { name: "Python (Pandas)" },
          { name: "SQL" },
        ],
      },
      {
        title: "Cloud & Databases",
        description: <>Azure SQL Database, relational data modeling, and database design best practices.</>,
        tags: [
          { name: "Azure SQL Database" },
          { name: "Relational Data Modeling" },
        ],
      },
      {
        title: "Processes",
        description: <>ETL / ELT concepts, Data Quality, Data Cleansing.</>,
        tags: [
          { name: "ETL / ELT Concepts" },
          { name: "Data Quality" },
          { name: "Data Cleansing" },
        ],
      },
      {
        title: "Tools & Environment",
        description: <>Git, Docker, Advanced Excel, Power BI.</>,
        tags: [
          { name: "Git" },
          { name: "Docker" },
          { name: "Excel Advanced" },
          { name: "Power BI" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Dev Blog – ML & MLOps Journey",
  description: "Documenting my path from workforce analytics and fraud prevention into Machine Learning Engineer with Azure and MLOps.",
};

const work: Work = {
  path: "/work/projects",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Machine Learning, MLOps, and data operations projects on Azure, backed by ${person.name}'s workforce and fraud analytics background`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Certificates – ${person.name}`,
  description: `Certificates showcasing AI, Machine Learning, Python, Docker, databases, and Linux fundamentals by ${person.name}`,
  images: [
    {
      src: "/images/gallery/cert-foundations-ai-ml-microsoft.jpg",
      alt: "Foundations of AI and Machine Learning – Microsoft (Mar 2026)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cert-machine-learning-with-python-ibm.jpg",
      alt: "Machine Learning with Python – IBM (Feb 2026)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cert-terminal-linux-platzi.jpg",
      alt: "Introduction to Terminal and Command Line (Linux/Bash) – Platzi (Sep 2022)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cert-intro-deep-learning-ibm.jpg",
      alt: "Introduction to Deep Learning & Neural Networks with Keras – IBM",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cert-docker-fundamentals-platzi.jpg",
      alt: "Docker Fundamentals – Platzi (Dec 2025)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cert-bases-de-datos-platzi.jpg",
      alt: "Curso de Fundamentos de Bases de Datos – Platzi (Sep 2022)",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
