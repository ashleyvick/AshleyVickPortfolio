import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ashley Vick',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile.jpg',
  paragraphOne:
    'People-oriented and creative. Looking to become a successful Full-Stack Software Engineer. Specializes in React and Javascript. Also have experience working with Node, SQL, HTML, CSS/SASS, Git and GitHub.',
  paragraphTwo:
    'I am constantly striving for personal development by continual learning and growth, committed to creating a culture of positivity towards everyone I meet and work with.',
  paragraphThree: 'Check out my resume to learn more.',
  resume:
    'https://docs.google.com/document/d/1kLbhkls7bnIxh9g1JcZuKxeN4I-1fLMk/edit?usp=sharing&ouid=103047061146321144163&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'debugclub1.png',
    title: 'Debub Club',
    info: 'First Full Stack Web Application with Group Collaboration using React, Axios, Redux, Node.js, Express, PostgreSQL, Framer-motion, and SASS.',
    info2:
      'User is able to create profile, post on dashboard, filter through popular hashtags, update profile settings, etc.',
    repo: 'https://github.com/the-cobras/debug-club', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Cafe Jardin',
    info: 'Project using React, Node, Express and PostgreSQL. Full-stack website where a user is required to create a profile in order to make a reservation at a restaurant. The user is able to create a profile where they can make reservations, view and cancel their current reservations and subscribe via text and/or email for upcoming promotions and events.',
    info2:
      'Completed front-end, back-end (full CRUD), hosted website with domain name in 2 months. Learned SASS, Twilio and NodeMailer  on the fly.',
    url: 'http://www.cafejardin.org/#/',
    repo: 'https://github.com/ashleyvick/Personal-Project-WRPT2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project6.png',
    title: 'Royal Family Quiz',
    info: 'Which Duchess from the Royal Family Are You?',
    info2: 'This was my very first Web Developement project using React, axios, and express. ',
    repo: 'https://github.com/ashleyvick/NoDB-Royal-Quiz', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aeromrell@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashley-vick-a734941ba/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashleyvick',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
