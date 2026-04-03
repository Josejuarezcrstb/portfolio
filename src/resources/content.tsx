import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Jose Maria",
  lastName: "Juarez",
  name: "Jose Maria Juarez",
  role: "IT student pivoting to ML/MLOps with Azure",
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
  title: `${person.name} | ML & MLOps Portfolio`,
  description: `Portfolio highlighting the transition from WFM and fraud prevention into Machine Learning and Azure MLOps by ${person.name}`,
  headline: <>Bridging Operational Analytics and Data Engineering</>,
  featured: {
    display: false,
    title: <></>,
    href: "/",
  },
  subline: (
    <>
      Leveraging over 4 years of experience in data validation, KPI tracking, and workforce analytics. Currently focused on designing scalable data solutions, building Python-driven ETL processes, and managing relational databases with Azure SQL to ensure high data quality and empower business decisions.
    </>
  ),
  primaryCTA: {
    label: "View Projects",
    href: "/work",
  },
  secondaryCTA: {
    label: "Dev Blog",
    href: "/blog",
  },
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
        As an IT Engineering student and Data Professional, I bring over 4 years of hands-on experience in data stewardship, validation, and analytics. My background in workforce management taught me the critical importance of data accuracy. Today, I apply that structured analytical thinking to Data Engineering—using Python (Pandas), SQL, and Azure to build reliable data ingestion workflows, cleanse complex datasets, and structure relational databases for advanced analytics. Fluent in English and Spanish, I thrive in environments that require complex problem-solving and cross-functional communication.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Foundever",
        timeframe: "Jan 2023 – Sep 2025",
        role: "Fraud & Risk Analyst – Account Takeover Prevention (CRS III)",
        achievements: [
          <>
            Handled complex fraud cases for a major U.S. financial institution, specializing in Account Takeover prevention, identity verification, and high-impact decisioning to protect clients from financial loss.
          </>,
          <>
            Key responsibilities:
            <ul>
              <li>Investigated high-risk ATO cases using behavioral patterns and login anomalies.</li>
              <li>Performed detailed risk assessments to gauge fraud exposure.</li>
              <li>Executed identity verification and restored secure access for compromised accounts.</li>
              <li>Documented findings for compliance with banking regulations.</li>
              <li>Guided junior analysts on complex cases and best practices.</li>
              <li>Balanced customer experience with strict risk-mitigation protocols.</li>
            </ul>
          </>,
          <>
            Core strengths: attention to fraud signals, fast decision-making under pressure, senior case handling, and secure, customer-centric resolutions.
          </>,
        ],
      },
      {
        company: "Centris Information Services",
        timeframe: "Feb 2019 – Nov 2022",
        role: "Reporting Analyst",
        achievements: [
          <>
            Progressed from operations to analytics, managing forecasting, reporting, and capacity optimization across multiple business lines.
          </>,
          <>
            Key contributions:
            <ul>
              <li>Forecasted multi-skill call volume and workload demand to optimize staffing and SLAs.</li>
              <li>Built 13+ week capacity forecasts, schedules, and staffing models.</li>
              <li>Monitored hours, shifts, billable time, and platform usage to surface risks.</li>
              <li>Improved forecast accuracy using historical patterns and operational drivers.</li>
              <li>Separated staffing gaps from process issues to target fixes.</li>
              <li>Delivered data-driven insights for planning and allocation.</li>
            </ul>
          </>,
          <>
            Core strengths: workforce analytics, forecasting, KPI tracking, data storytelling, and stakeholder communication.
          </>,
        ],
      },
      {
        company: "MDY BPO & Contact Center",
        timeframe: "Dec 2017 – Feb 2019",
        role: "Workforce Management Analyst",
        achievements: [
          <>Analyzed and forecasted call volume to keep productivity and staffing balanced.</>,
          <>Built dashboards and reports to communicate actionable recommendations.</>,
          <>Earlier experience as Customer Service Representative focused on tech support.</>,
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
        title: "Lenguajes",
        description: <>Python (Pandas, scripting), SQL.</>,
        tags: [
          { name: "Python (Pandas)" },
          { name: "SQL" },
        ],
      },
      {
        title: "Cloud & Bases de Datos",
        description: <>Azure SQL Database, modelado relacional y buenas prácticas en diseño de datos.</>,
        tags: [
          { name: "Azure SQL Database" },
          { name: "Relational Data Modeling" },
        ],
      },
      {
        title: "Procesos",
        description: <>ETL / ELT, Data Quality, Data Cleansing.</>,
        tags: [
          { name: "ETL / ELT Concepts" },
          { name: "Data Quality" },
          { name: "Data Cleansing" },
        ],
      },
      {
        title: "Herramientas & Entorno",
        description: <>Git, Docker, Excel Advanced, Power BI.</>,
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
