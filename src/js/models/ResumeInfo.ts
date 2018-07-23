import {IResumeEducation} from "./i-resume-education";
import {IOccupation} from "./i-occupation";
import {ISoftwareProject} from "./i-software-project";
import {ITechnicalSkill} from "./i-technical-skill";

const CalPolyClassList:string[] = [
    'Systems Programming',
    'Javascript',
    'Software Engineering I',
    'Software Engineering II',
    'Individual Software Design and Development',
    'Python',
    'Algorithms',
    'Computer Graphics',
    'Public Speaking',
    'Discrete Mathematics',
    'Intro to Databases',
    'Linear Analysis',
    'Methods of Proof',
    'Computer Architecture'
];

export const eduInstitutions:IResumeEducation[] = [
    {
        name: 'California Polytechnic State University San Luis Obispo',
        city: 'San Luis Obispo',
        state: 'CA',
        startDate: 'September 2014',
        endDate: 'Expected Graduation Date: June 2018',
        gpa: 3.70,
        major: 'Master\'s and Bachelor of Science in Software Engineering',
        courses: CalPolyClassList
    },
    {
        name: 'Mountain View High School',
        city: 'Mountain View',
        state: 'CA',
        startDate: '2010',
        endDate: '2014',
        gpa: 4.42
    }
];

export const eduAchievements:string[] = [
    'College of Engineering Dean’s List',
    'College of Engineering President’s List',
    'National Society of Collegiate Scholars',
    'Proficient in Spanish'
];

export const technicalSkills:ITechnicalSkill[] = [
    {skill: 'Java', rating: 5},
    {skill: 'TypeScript', rating: 4},
    {skill: 'Javascript', rating: 3},
    {skill: 'C', rating: 3},
    {skill: 'Python', rating: 2},
    {skill: 'C++', rating: 2},
    {skill: 'React', rating: 4},
    {skill: 'Bootstrap', rating: 3},
    {skill: 'CSS', rating: 2},
    {skill: 'JUnit', rating: 4},
    {skill: 'MySQL', rating: 4},
    {skill: 'Eclipse', rating: 4},
    {skill: 'IntelliJ', rating: 4},
    {skill: 'Git', rating: 4},
    {skill: 'JIRA', rating: 4},
    {skill: 'ElasticSearch', rating: 3},
    {skill: 'NPM', rating: 3},
    {skill: 'AQL', rating: 2}
];

export const workExperience:IOccupation[] = [
    {
        company: 'MapR',
        location: 'San Jose, CA',
        position: 'DevOps Intern',
        timePeriod: 'Summer 2017',
        summary: 'Developed dynamic, internal webpages using TypeScript and React to increase the accessibility of information queried from different systems and perform analytics of that data to optimize workflows.',
        bullets: [
            'Queried systems such as Jenkins, Artifactory, ElasticSearch, and Marathon to retrieve and display information for employees without access to their interfaces.',
            'Created dynamic webpages to enhance employee workflows and provide new tools',
            'Performed bug fixes and performance improvements on the DevOps website to enhance usability and efficiency.',
            'Queried and configured ElasticSearch indexes'
        ],
        website: 'http://www.mapr.com'
    },
    {
        company: 'MapR',
        position: 'IT Intern',
        location: 'San Jose, CA',
        timePeriod: 'Summer 2015 and Summer 2016',
        summary: 'Fulfilled the role of a full-time IT employee by providing end-user technical support, performing on/off-boarding of employees, managing user accounts, and other technical maintenance.',
        bullets: [
            'Performed employee on-boarding by preparing the new hire’s laptop, accounts, and desk',
            'Responded to a wide range of employee tickets as a SysAid Administrator in a timely and efficient manor, including user workstation, hardware, and account issues',
            'Wrote daily backup shell scripts for critical company projects to ensure there is minimal dataloss',
            'Managed users as a Google Administrator, including creating/deleting accounts, managing groups, and reporting on Google Docs in the domain',
            'Automated reporting processes of Amazon AWS instances using Python, Shell scripts, and CloudHealth, improving efficiency',
            'Established, configured, and deployed the Kaspersky anti-virus network for employees to tighten security',
            'Performed general computer hardware and software repairs in a timely manner to minimize employee downtime'
        ],
        website: 'http://www.mapr.com'
    },
    {
        company: 'Planet Granite',
        position: 'Event Staff',
        location: 'Sunnyvale, CA',
        timePeriod: 'Summer 2015',
        summary: 'The Event Staff position is a role that wears many hats, requiring a person to be knowledgable of climbing techniques with an emphasis on safety, excel at customer service, and perform other tasks to keep the climbing gym operational.',
        bullets: [
            'Instructed and belayed children, creating a fun and safe environment while meeting the expectations of the customer',
            'Reviewed standardized safety procedures with children',
            'Performed cleaning and maintenance, ensuring a smoothly-operating work environment',
            'Gained Customer Service experience, speaking with potential customers, parents, and children'
        ],
        website: 'http://www.planetgranite.com'
    }
];

export const softwareProjects:ISoftwareProject[] = [
    {
        name: "Tele-operated Strawberry Harvester",
        tools: ["Typescript", "React", "Java", "Spring", "AWS"],
        time: '2017-2018',
        summary: "Served as the Front End Technical Lead on a team working with the California Strawberry Commission to develop a platform that enables users to pick strawberries remotely through AWS IoT."
    },
    {
        name: "Onsight Web App",
        tools: ["Typescript", "React", "AWS", "TensorFlow"],
        time: "2018",
        summary: "Individually working on a Serverless system to automatically score rock climbing scorecards using TensorFlow handwriting recognition."
    },
    {
        name: 'Scheduling Application',
        tools: ['Java', 'MySql', 'TravisCI', 'Git'],
        time: 'Winter 2017',
        summary: 'Worked as the Technical Lead in a team of six to create a course scheduling application for my Software Engineering class.  The classroom mimicked a real-world environment where each team had to perform requirements gathering, requirements specification, design, and implementation.'
    },
    {
        name: 'LZW Decompression',
        tools: ['C'],
        time: 'Winter 2016',
        summary: 'Solo project utilizing C to create a LZW Decompression tool that takes standard input through the command-line interface to output the decompressed contents.'
    },
    {
        name: 'Tower Defense Game',
        tools: ['Java'],
        time: 'Fall 2015',
        summary: 'Led and designed algorithms within a group for a tower defense game which utilized an object-oriented design.  Since this was the first computer science class, the class used Greenfoot, an educational IDE.'
    }
];