export type ExperienceEntry = {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type EducationEntry = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  year: string;
};

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    position: "Freelance Software Developer",
    company: "Self-employed",
    location: "Gillsville, GA",
    period: "06/2017 – Present",
    description: [
      "Developed applications for small businesses: inventory systems, data mining tools, multi-vendor sales platforms, and static sites.",
      "Improved software efficiency by troubleshooting and resolving coding issues.",
      "Enhanced user experience through designing and implementing user-friendly interfaces.",
      "Updated legacy codebases to modern development standards.",
      "Delivered customised software solutions that increased client satisfaction and repeat business.",
    ],
  },
  {
    id: 2,
    position: "Event Coordinator",
    company: "Hall County Government",
    location: "Gainesville, GA",
    period: "03/2019 – Present",
    description: [
      "Coordinated schedules and timelines for county events.",
      "Adapted quickly to unexpected challenges while maintaining composure.",
      "Managed event logistics and operations end-to-end.",
      "Collaborated with cross-functional teams for seamless execution.",
      "Facilitated smooth transitions by creating detailed schedules and clear communication.",
    ],
  },
  {
    id: 3,
    position: "Animal Control Officer",
    company: "Hall County Government",
    location: "Gainesville, GA",
    period: "07/2007 – 05/2013",
    description: [
      "Enforced animal control ordinances in collaboration with local law enforcement.",
      "Handled emergency situations involving dangerous or aggressive animals.",
      "Investigated cases of animal cruelty and neglect, gathering evidence for legal action.",
      "Maintained accurate records for all impounded animals.",
    ],
  },
  {
    id: 4,
    position: "19D Cavalry Scout",
    company: "Army National Guard",
    location: "Griffin, GA",
    period: "05/2004 – 05/2012",
    description: [
      "Executed mounted and dismounted navigation, data collection, and patrols.",
      "Developed risk assessments for mission scenarios.",
      "Performed route reconnaissance to reduce risk during troop movements.",
      "Awarded Army Commendation Medal, Good Conduct Medal, Afghan Campaign Medal, and multiple battalion coins.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: 1,
    degree: "BS Computer Information Systems",
    institution: "Florida Institute of Technology",
    location: "Melbourne, FL",
    year: "2017",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "Cairo High School",
    location: "Cairo, GA",
    year: "2005",
  },
];