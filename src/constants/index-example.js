import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  placeholder,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
} from "react-icons/si";

import { FaHardHat, FaRust, FaRegImage } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "";
export const callToAction = "https://www.linkedin.com/in/<your-linkedin-id>/";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

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
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
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
    icon: FaRegImage,
    title: "Sir C.R.R. College Of Engineering",
    degree: "Bachelor of Technology - BTech",
    duration: "2015 - 2019",
    content1: "",
    content2: "Exploring New Ideas",
  },
  {
    id: "education-2",
    icon: FaRegImage,
    title: "School Name",
    degree: "Degree Name",
    duration: "Start Date - End Date",
    content1: "Notes",
    content2: "Activities",
  },
  {
    id: "education-3",
    icon: FaRegImage,
    title: "Sasi Educational Institutions",
    degree: "Higher Secondary (+2)",
    duration: "2013 - 2015",
    content1: "",
    content2: "",
  },
  {
    id: "education-4",
    icon: FaRegImage,
    title: "School Name",
    degree: "Degree Name",
    duration: "Start Date - End Date",
    content1: "Notes",
    content2: "Activities",
  },
  {
    id: "education-5",
    icon: FaRegImage,
    title: "Bhashyam Public School",
    degree: "State Board",
    duration: "2012 - 2013",
    content1: "",
    content2: "",
  }
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: FaRegImage,
    event: "",
    position: "",
    content1: "",
    content2: "",
    content3: "",
    article: "",
    project: "",
    youtube: "",
    github: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: FaRegImage,
        name: "AWS tasks Troubleshooting",
      },
      {
        id: "t-2",
        icon: FaRegImage,
        name: "Microsoft Azure",
      },
      {
        id: "t-3",
        icon: FaRegImage,
        name: "Migration Projects",
      },
      {
        id: "t-4",
        icon: FaRegImage,
        name: "Terraform",
      },
      {
        id: "t-5",
        icon: FaRegImage,
        name: "Jenkins",
      },
      {
        id: "t-6",
        icon: FaRegImage,
        name: "Azure DevOps Services",
      },
      {
        id: "t-7",
        icon: FaRegImage,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: FaRegImage,
        name: "Cloud Services",
      },
      {
        id: "t-9",
        icon: FaRegImage,
        name: "Cloud Infrastructure",
      },
      {
        id: "t-10",
        icon: FaRegImage,
        name: "Shell Scripting",
      },
      {
        id: "t-11",
        icon: FaRegImage,
        name: "DevOps",
      },
      {
        id: "t-12",
        icon: FaRegImage,
        name: "Ansible",
      },
      {
        id: "t-13",
        icon: FaRegImage,
        name: "Kubernetes",
      },
      {
        id: "t-14",
        icon: FaRegImage,
        name: "Amazon Web Services (AWS)",
      }
    ],
  }
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "HCLTech",
    logo: placeholder,
    link: "",
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
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Software Developer",
        duration: "Apr 2022 - Jan 2023",
        content: [
          {
            text: "",
            link: "",
          }
        ],
      }
    ],
  },
  {
    organisation: "Frontier Business systems Pvt. ltd.",
    logo: placeholder,
    link: "",
    positions: [
      {
        title: "Cloud Support Engineer",
        duration: "Nov 2019 - Mar 2022",
        content: [
          {
            text: "",
            link: "",
          }
        ],
      }
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Portfolio",
    github: "",
    link: "",
    image: placeholder,
    content: "Open source developer portfolio template with modern UI/UX. Developed by taking reference github profile",
    stack: [
      {
        id: "icon-1",
        icon: FaRegImage,
        name: "Placeholder",
      }
    ],
  }
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
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

// List out the extra curricular activities you have indulged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "",
    title: "",
    duration: "",
    content: [
      {
        text: "",
        link: "",
      },
      {
        text: "",
        link: "",
      },
    ],
    logo: placeholder,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/<your-linkedin-id>/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/<your-github-id>/",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:<your-email-id>",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/<your-twitter-id>/",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/<your-instagram-id>/",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Karapureddy Pooja Sree",
    githubUsername: '',
    tagLine: "AWS | DevOps Engineer | Terraform | Jenkins | Kubernetes | CI/CD | Cloud Infrastructure | Open to Opportunities in USA",
    intro: "This is a placeholder intro"
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "Pooja-Sree-K/singlevm",
  "Pooja-Sree-K/devops",
  "",
];
