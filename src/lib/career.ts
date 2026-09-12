// Static career data sourced from https://kotharigroupindia.com/career
// Jobs fetched from https://admin.kotharigroupindia.com/wp-json/wp/v2/jobpost
export interface JobPosting {
  id: number;
  title: string;
  slug: string;
  location: string;
  department: string;
  jobType: string;
  description: string;
  link: string;
  date: string;
  place:string;
}

export interface CareerData {
  jobs: JobPosting[];
  locations: string[];
}

const jobs: JobPosting[] = [
  {
    id: 18184,
    title: 'Officer / Executive - Pipe Division',
    slug: 'officer-executive-pipe-division',
    location: 'Karnataka',
    place:'Shimoga',
    department: 'Pipe Division',
    jobType: 'Officer / Executive',
    description:
      'Vacancy: 1 | Department: Sales & Marketing | Education: Any | Experience: 1-3 yrs | Preference: Experience in Agri PVC.',
    link: 'https://admin.kotharigroupindia.com/jobs/officer-executive-pipe-division/',
    date: '26 June 2025',
  },
  {
    id: 18183,
    title: 'ASM - Irrigation Division',
    slug: 'asm-irrigation-division',
    location: 'Uttar Pradesh',
    place:'Agra',
    department: 'Irrigation Division',
    jobType: 'ASM / RM',
    description:
      'Vacancy: 1 | Department: Sales & Marketing | Education: Graduation in Agri | Experience: 7-10 yrs.',
    link: 'https://admin.kotharigroupindia.com/jobs/asm-irrigation-division/',
    date: '26 June 2025',
  },
  {
    id: 18182,
    title: 'Officer / Executive - Irrigation Division',
    slug: 'officer-executive-irrigation-division-2',
    location: 'Madhya Pradesh',
    place:'Balaghat',
    department: 'Irrigation Division',
    jobType: 'Officer / Executive',
    description:
      'Vacancy: 1 | Department: Sales & Marketing | Education: Graduation in Agri | Experience: 2-5 yrs.',
    link: 'https://admin.kotharigroupindia.com/jobs/officer-executive-irrigation-division-2/',
    date: '26 June 2025',
  },
  {
    id: 17930,
    title: 'Officer / Executive - Irrigation Division',
    slug: 'officer-executive-irrigation-division',
    location: 'Madhya Pradesh',
    place:'Khargone',
    department: 'Irrigation Division',
    jobType: 'Officer / Executive',
    description:
      'Vacancy: 1 | Department: Sales & Marketing | Education: Graduation in Agri | Experience: 2-5 yrs.',
    link: 'https://admin.kotharigroupindia.com/jobs/officer-executive-irrigation-division/',
    date: '16 May 2025',
  },
];

const locations = ['All', ...Array.from(new Set(jobs.map((job) => job.location)))];

export const careerData: CareerData = { jobs, locations };