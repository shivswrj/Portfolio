/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section


const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivam Swaraj",
  title: "Hi all, I'm Shivam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VhEpmEQyt1dgtFjAcvzsZYJuW80k0zuj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shivswrj",
  linkedin: "https://www.linkedin.com/in/shivam-swaraj-632255220/",
  gmail: "shivswrj111@gmail.com",
 
  facebook: "https://www.facebook.com/shivam-swaraj",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
   
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jaypee University Of Engineering And Technology",
      logo: require("./assets/images/juet.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2021 - May 2025",
      
      descBullets: [
        
      ]
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Front-End Developer",
      company: "Octanet",
      companylogo: require("./assets/images/111.jpg"),
      date: "May 2023 – July 2023",
      desc: "."
    }
    ,
    
    {
      role: "Project Manager",
      company: "Ricoz",
      companylogo: require("./assets/images/e.jpg"),
      date: "June 2024 – Nov 2024",
      desc: ""
    }
     
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/b.jpg"),
      projectName: "REAL TIME COLLABORATIVE CHATBOARD",
      projectDesc: "The Whiteboard Application is a collaborative drawing tool that allows users to create and join real-time whiteboard sessions With a focus on simplicity and user experience, this application enables users to draw using various colors and brush sizes, undo/redo actions, and save the whiteboard content as images or PDFs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/shivswrj/REAL-TIME-COLLABORATIVE-BOARD"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/d.jpg"),
      projectName: "REACT VIDEO PLAYER",
      projectDesc: " A user-friendly interface for video playback, offering features like play/pause controls, volume adjustment, full-screen mode, and support for various video formats and streaming protocols.A seamless and responsive video viewing experience across different devices and browsers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/shivswrj/React-VideoPlayer/tree/main"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/a.jpg"),
      projectName: "LIFELINES : THE BLOOD BANK",
      projectDesc: "Developed a responsive Blood Bank website using the MERN stack, showcasing proficiency in MongoDB, Express.js, React.js,and Node.js.Features include donor registration, personalized dashboards, blood inventory tracking, and appointment scheduling for a seamless user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/shivswrj/Blood-Bank"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc



const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9660396317",
  email_address: "shivswr111@gmail.com"
};

// Twitter Section



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,

  
 
 
  contactInfo,

  isHireable,
  resumeSection
};
