import {
  portfolio,
  crr,
  sasi,
  HCLTech,
  Frontier,
  MsysTech,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiGit,
  SiAnsible,
  SiMysql,
  SiNetlify,
  SiSlack,
  SiVercel,
  SiDbeaver,
  SiGooglecloud,
  SiGrafana,
  SiJira,
  SiReact,
  SiTailwindcss,
  SiPrometheus,
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

import { FaAws ,FaDocker, FaBitbucket, FaJenkins, FaHardHat, FaRegImage } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { TbSql } from "react-icons/tb";

import { VscAzure, VscAzureDevops } from "react-icons/vsc";

import { BiLogoVisualStudio } from "react-icons/bi";

import { DiCss3, DiMsqlServer, } from "react-icons/di";

export const resumeLink = 
  "https://drive.google.com/file/d/1qekBojtKcxxBKEh8Rsh7GSvwO4HdWFUF/view?usp=drive_link";
export const callToAction = "https://www.linkedin.com/in/pooja-sree-karapureddy/";
export const repoLink = "https://github.com/Pooja-Sree-K/cloud-with-poojasree";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: crr,
    title: "Sir C.R.R. College Of Engineering",
    degree: "Bachelor of Technology - BTech",
    duration: "2015 - 2019",
    content1: "",
    content2: "Exploring New Ideas",
  },
  {
    id: "education-2",
    icon: sasi,
    title: "Sasi Educational Institutions",
    degree: "Higher Secondary (+2)",
    duration: "2013 - 2015",
    content1: "",
    content2: "",
  }
];


// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-7",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-10",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-11",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-12",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-12",
        icon: TbSql,
        name: "SQL",
      },
    ],
  },
  {
    title: "DevOps & Cloud Platforms",
    items: [
      {
        id: "c-1",
        icon: FaAws,
        name: "AWS",
      },
      {
        id: "c-2",
        icon: SiGooglecloud,
        name: "GCP",
      },
      {
        id: "c-3",
        icon: SiGrafana,
        name: "Grafana",
      },
      {
        id: "c-4",
        icon: SiPrometheus,
        name: "Prometheus",
      },
      {
        id: "c-5",
        icon: SiTerraform,
        name: "Terraform",
      },
      {
        id: "c-6",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "c-7",
        icon: FaDocker,
        name: "Docker",
      },
      {
        id: "c-8",
        icon: FaJenkins,
        name: "Jenkins",
      },
      {
        id: "c-9",
        icon: VscAzureDevops,
        name: "Azure DevOps",
      },
      {
        id: "c-10",
        icon: SiAnsible,
        name: "Ansible",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: VscAzure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-10",
        icon: SiDbeaver,
        name: "DBeaver",
      },
      {
        id: "t-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-9",
        icon: FaBitbucket,
        name: "Bitbucket",
      },
      {
        id: "t-10",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-10",
        icon: SiSlack,
        name: "Slack",
      },
    ],
  },
];
    
      
  
// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "HCLTech",
    logo: HCLTech,
    link: "https://www.hcltech.com/",
    positions: [
      {
        title: "Senior Software Engineer",
        duration: "Feb 2023 - Dec 2024",
        content: [
          {
            text: "Designed and implemented scalable AWS infrastructure for a global healthcare application, utilizing EC2, S3, RDS, and Lambda, reducing infrastructure costs by 20%.",
            link: "",
          },
          {
            text: "Automated CI/CD pipelines using Jenkins, GitLab, and AWS Code Pipeline, resulting in a 40% reduction in deployment times and improved code quality.",
            link: "",
          },
          {
            text: "Monitored cloud resources and optimized performance using CloudWatch, CloudTrail, Google Analytics, ensuring 99.9% system uptime.",
            link: "",
          },
          {
            text: "Led end-to-end migration of repositories from Bitbucket to GitLab, including updating CI/CD configurations and integrating GitLab Runners for automated deployments.",
            link: "",
          },
          {
            text: "Built CI/CD pipelines in GitLab to automate end-to-end deployment of a Node.js application to AWS Elastic Beanstalk, improving release speed and reducing manual intervention.",
            link: "",
          },
          {
            text: "Integrated code quality checks and testing stages in GitLab pipelines, ensuring reliable deployments and faster feedback for developers.",
            link: "",
          },
          {
            text: "Implemented security best practices across AWS services (IAM, VPC, Security Groups) in compliance with GDPR and HIPAA standards.",
            link: "",
          },
          {
            text: "Collaborated with cross-functional teams (Dev, QA, Security) to implement Infrastructure as Code (IaC) using Terraform and AWS CloudFormation.",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "MSys Technologies | Software Product Engineering Services",
    logo: MsysTech,
    link: "https://www.aziro.com/",
    positions: [
      {
        title: "Software Developer",
        duration: "Apr 2022 - Jan 2023",
        content: [
          {
            text: "Developed automated CI/CD pipelines in Azure DevOps and GitHub Actions to streamline builds, tests, and deployments for multiple microservices",
            link: "",
          },
          {
            text: "Built and managed CI/CD pipelines using Azure Pipelines for multiple development teams, enabling automated builds, tests, security scans, and deployments",
            link: "",
          },
          {
            text: "Deployed Node.js and .NET Core applications to Azure App Services with full lifecycle automation",
            link: "",
          },
          {
            text: "Deployed microservices using Kubernetes deployment & service manifests in the Azure DevOps dashboard",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "Frontier Business systems Pvt. ltd.",
    logo: Frontier,
    link: "https://frontier.in/",
    positions: [
      {
        title: "Cloud Delivery",
        duration: "Jan 2021 - Apr 2022",
        content: [
          {
            text: "Collaborated with the delivery team and delivered AWS-related servers to clients",
            link: "",
          },
          {
            text: "Integrated CI/CD pipelines using GitHub Actions and AWS Code Pipeline to streamline deployments",
            link: "",
          },
          {
            text: "Provided cost-optimization recommendations that saved up to 25% in monthly bills for some clients",
            link: "",
          },
          {
            text: "Led end-to-end migration of Cloud Endure DR",
            link: "",
          },
          {
            text: "Automated routine tasks like snapshot backups, cleanup jobs, and health checks using Bash + AWS CLI & Lambda",
            link: "",
          },
        ],
      },
      {
        title: "Cloud Operations Engineer",
        duration: "Dec 2020 - Dec 2021",
        content: [
          {
            text: "Promoted as Cloud Operations Engineer & worked on Delivery tasks like any new deployments in AWS & monitoring the new servers",
            link: "",
          },
          {
            text: "Obtained AWS Certifications",
            link: "",
          },
          {
            text: "Designed VPC architectures with subnets, security groups, and route tables tailored to each client’s networking requirements",
            link: "",
          },
          {
            text: "Provisioned EC2, RDS, S3, and CloudFront configurations to support web apps and APIs using Terraform",
            link: "",
          },
        ],
      },
      {
        title: "Cloud Support Engineer",
        duration: "Nov 2019 - Nov 2020",
        content: [
          {
            text: "Supported the AWS accounts of multiple customers and troubleshooted any issues that occurred",
            link: "",
          },
          {
            text: "Created SOPs for Monitoring & AWS-related tasks",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Portfolio",
    github: "https://github.com/Pooja-Sree-K/cloud-with-poojasree",
    link: "https://cloudwithpoojasree.netlify.app/",
    image: portfolio,
    content: "Open source developer portfolio template with modern UI/UX. Developed by taking reference github profile",
    stack: [
      {
        id: "proj10-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj10-icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "proj10-icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  }
];


// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];


// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/pooja-sree-karapureddy/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Pooja-Sree-K",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:work.poojasrikarapureddy@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Karapureddy Pooja Sree",
    githubUsername: 'Pooja-Sree-K',
    tagLine: 
      "AWS DevOps Engineer | Cloud Automation | CI/CD | Terraform | Kubernetes | Passionate about scalable infrastructure",
    intro: 
      "An AWS DevOps Engineer with over 5 years of experience in automating, deploying, and managing scalable cloud infrastructure I’m passionate about Infrastructure as Code,"
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "Pooja-Sree-K/singlevm",
  "Pooja-Sree-K/devops",
];
