export type Role = 'Programmer Analyst' | 'Associate' | 'Senior Associate' | 'Manager';
export type Department = 'Indoor1' | 'Indoor2' | 'Outdoor' | 'Automation' | 'Defect Management';

export interface TeamMember {
  id: string;
  name: string;
  role: Role;
  departments: Department[];
  location: string;
  isOffshore: boolean;
  experience: number;
  bio: string;
  imageUrl: string;
  expertise: string[];
  email: string;
  teamsName: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Usha Nandhini',
    role: 'Associate',
    departments: ['Automation'],
    location: 'Coimbatore, India',
    isOffshore: true,
    experience: 6,
    bio: 'An IT professional with 6 years of experience in quality engineering. Expertise in software automation',
    imageUrl: '/images/team/girl.jpg',
    expertise: ['Quality Engineering', 'Software Automation'],
    email: '2333044@cognizant.com',
    teamsName: 'Nandhini, Usha'
  },
  {
    id: '2',
    name: 'Pooja Kamble',
    role: 'Associate',
    departments: ['Outdoor'],
    location: 'Pune, India',
    isOffshore: true,
    experience: 6,
    bio: 'An IT professional with 6+ years of experience in quality engineering. Expertise in software automation and Functional testing.',
    imageUrl: '/images/team/girl.jpg',
    expertise: ['Quality Engineering', 'Software Automation', 'Functional Testing'],
    email: '2103594@cognizant.com',
    teamsName: 'Kamble, Pooja'
  },
  {
    id: '3',
    name: 'Manikandan Ravi',
    role: 'Associate',
    departments: ['Indoor2'],
    location: 'Chennai, India',
    isOffshore: true,
    experience: 6,
    bio: 'An IT professional with 6+ years of experience in quality engineering. Expertise in software Functional and automation testing.',
    imageUrl: '/images/team/boy.png',
    expertise: ['Quality Engineering', 'Software Automation', 'Functional Testing'],
    email: '2198710@cognizant.com',
    teamsName: 'R, Manikandan'
  },
  {
    id: '4',
    name: 'Harsha Vardan Pendyala',
    role: 'Programmer Analyst',
    departments: ['Indoor1', 'Indoor2'],
    location: 'Hyderabad, India',
    isOffshore: true,
    experience: 3,
    bio: 'An IT professional with 3 years of experience in quality engineering. Expertise in software automation and Functional testing. Works across both Indoor1 and Indoor2 departments.',
    imageUrl: '/images/team/boy.png',
    expertise: ['Quality Engineering', 'Software Automation', 'Functional Testing'],
    email: '2140515@cognizant.com',
    teamsName: 'Pendyala, Harsha Vardhan'
  },
  {
    id: '5',
    name: 'Nayan Salve',
    role: 'Associate',
    departments: ['Indoor2'],
    location: 'Pune, India',
    isOffshore: true,
    experience: 6,
    bio: 'An IT professional with 6+ years of experience in quality engineering. Expertise in software automation and Functional testing.',
    imageUrl: '/images/team/boy.png',
    expertise: ['Quality Engineering', 'Software Automation', 'Functional Testing'],
    email: '2190506@cognizant.com',
    teamsName: 'Krushna, Salve Nayan'
  },
  {
    id: '6',
    name: 'Sangeetha Seshadri',
    role: 'Senior Associate',
    departments: ['Indoor1', 'Indoor2'],
    location: 'Chennai, India',
    isOffshore: true,
    experience: 14,
    bio: 'An IT professional with around 14 years of experience in quality engineering including test management, defect management, Agile and waterfall testing. Expertise in managing testing projects and effectively communicating and co-ordinating with the project stakeholders',
    imageUrl: '/images/team/girl.jpg',
    expertise: ['Quality Engineering', 'Test Management', 'Defect Management', 'Agile Testing', 'Project Management'],
    email: '117308@cognizant.com',
    teamsName: 'Seshadri, Sangeetha'
  },
  {
    id: '7',
    name: 'Mohanraj Marimuthu',
    role: 'Senior Associate',
    departments: ['Defect Management'],
    location: 'Coimbatore, India',
    isOffshore: true,
    experience: 13,
    bio: 'Senior Associate with 13+ years of experience in IT Industry and 10+ years of experience in Software Testing. Experience in Functional, Database and Mainframe testing. Experience in UI automation using Java, Selenium and TestNG. Immense experience in Software Testing Life Cycle and Defect Management.',
    imageUrl: '/images/team/boy.png',
    expertise: ['Functional Testing', 'DB Testing', 'API Testing', 'Defect Management', 'UI Automation', 'Java', 'Selenium', 'TestNG'],
    email: 'Mohanraj.Marimuthu@cognizant.com',
    teamsName: 'Marimuthu, Mohanraj'
  },
  {
    id: '8',
    name: 'Vishnu Ram',
    role: 'Senior Associate',
    departments: ['Indoor2', 'Automation'],
    location: 'UK',
    isOffshore: false,
    experience: 15,
    bio: '15 years of experience with specialized in Automation and Functional Testing. Expertise in Dev ops, Agile, API testing',
    imageUrl: '/images/team/boy.png',
    expertise: ['Quality Engineering', 'Automation', 'Functional Testing', 'DevOps', 'Agile', 'API Testing'],
    email: '261763@cognizant.com',
    teamsName: 'Ram, Vishnu'
  }
]; 