export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  students: number;
  duration: string;
  image: string;
  category: string;
  subCategory?: string;
  isPopular: boolean;
  enrollLink: string; // To be filled manually
  demoLink: string; // To be filled manually
  description: string;
  features: string[];
  status: 'sold' | 'active' | 'upcoming'; // Course availability status
}

export const coursesData: Course[] = [
  // Class 6th Courses
  {
    id: 1,
    title: "6th Live Classes - Core Subjects",
    instructor: "Expert Faculty",
    rating: 4.5,
    reviews: 124,
    price: 24999,
    oldPrice: 29999,
    level: 'Beginner',
    students: 256,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_95618bed-4b67-4d6b-89a4-d473083c99e4",
    category: "Class 6th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/6th-live-classes-core-subjects-688245d2363ae235afead0cc",
    demoLink: "#",
    description: "Live classes for 6th grade covering Science, Maths, English and Social Science",
    features: ["Live Interactive Classes", "Expert Faculty", "All Core Subjects", "Regular Assessments"],
    status: "sold"
  },
  {
    id: 2,
    title: "6th Live Classes - Science",
    instructor: "Science Expert",
    rating: 4.3,
    reviews: 98,
    price: 14999,
    oldPrice: 19999,
    level: 'Beginner',
    students: 189,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_90a756a7-9e9f-4c0e-b480-0c68d47cceef",
    category: "Class 6th",
    subCategory: "Science",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/6th-live-classes-science-688245aa5440376738521ac9",
    demoLink: "#",
    description: "Dedicated Science live classes for Class 6th students",
    features: ["Live Science Classes", "Practical Demonstrations", "Concept Building", "Regular Tests"],
    status: "sold"
  },
  {
    id: 3,
    title: "6th Live Classes - Maths",
    instructor: "Math Expert",
    rating: 4.6,
    reviews: 203,
    price: 14999,
    oldPrice: 19999,
    level: 'Beginner',
    students: 445,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_2702809d-650f-492d-8000-f893386cb221",
    category: "Class 6th",
    subCategory: "Mathematics",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/6th-live-classes-maths-688245bb2a84aec5d53c977a",
    demoLink: "#",
    description: "Live Mathematics classes for Class 6th with problem-solving focus",
    features: ["Live Math Classes", "Problem Solving", "Formula Practice", "Step-by-step Solutions"],
    status: "sold"
  },
  {
    id: 4,
    title: "6th PDF Notes",
    instructor: "Content Team",
    rating: 4.2,
    reviews: 76,
    price: 699,
    oldPrice: 2499,
    level: 'Beginner',
    students: 134,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_e866929d-6729-4a06-baa2-790d647a699b",
    category: "Class 6th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/6th-pdf-notes-688620920d763977a73f71f8",
    demoLink: "#",
    description: "Comprehensive PDF study notes for Class 6th all subjects",
    features: ["PDF Format", "All Subjects", "Easy Download", "Lifetime Access"],
    status: "sold"
  },
  {
    id: 5,
    title: "6th Mind Maps",
    instructor: "Content Team",
    rating: 4.4,
    reviews: 89,
    price: 349,
    oldPrice: 2499,
    level: 'Beginner',
    students: 167,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_7e80c594-4452-40f4-8a17-28a137476eee",
    category: "Class 6th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/6th-mind-maps-6886204d9ec565a1a4434f82",
    demoLink: "#",
    description: "Visual mind maps for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "All Topics Covered", "Easy to Remember"],
    status: "sold"
  },
  // Class 7th Courses
  {
    id: 6,
    title: "7th Live Classes - Core Subjects",
    instructor: "Expert Faculty",
    rating: 4.7,
    reviews: 156,
    price: 24999,
    oldPrice: 29999,
    level: 'Intermediate',
    students: 298,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_c11339a2-b334-4ce8-8e76-07d915598b49",
    category: "Class 7th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/7th-live-classes-core-subjects-6882457703f0f6fdf0bf502e",
    demoLink: "#",
    description: "Live classes for 7th grade covering Science, Maths, English and Social Science",
    features: ["Live Interactive Classes", "Expert Faculty", "All Core Subjects", "Regular Assessments"],
    status: "sold"
  },
  {
    id: 7,
    title: "7th Live Classes - Science",
    instructor: "Science Expert",
    rating: 4.4,
    reviews: 112,
    price: 14999,
    oldPrice: 19999,
    level: 'Intermediate',
    students: 223,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_734f66f4-c4eb-4b21-94e0-d53c90403c98",
    category: "Class 7th",
    subCategory: "Science",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/7th-live-classes-science-6882454f03f0f6fdf0bf4849",
    demoLink: "#",
    description: "Dedicated Science live classes for Class 7th students",
    features: ["Live Science Classes", "Practical Demonstrations", "Concept Building", "Regular Tests"],
    status: "sold"
  },
  {
    id: 8,
    title: "7th Live Classes - Maths",
    instructor: "Math Expert",
    rating: 4.3,
    reviews: 89,
    price: 14999,
    oldPrice: 19999,
    level: 'Intermediate',
    students: 167,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_5335e80b-b60e-433c-b69b-9f32dcbacca1",
    category: "Class 7th",
    subCategory: "Mathematics",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/7th-live-classes-maths-688245679066fa83dd62a6a7",
    demoLink: "#",
    description: "Live Mathematics classes for Class 7th with problem-solving focus",
    features: ["Live Math Classes", "Problem Solving", "Formula Practice", "Step-by-step Solutions"],
    status: "sold"
  },
  {
    id: 9,
    title: "7th PDF Notes",
    instructor: "Content Team",
    rating: 4.8,
    reviews: 699,
    price: 1499,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 521,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_a55509fb-8e2a-403f-b779-302cd1f3b847",
    category: "Class 7th",
    subCategory: "Study Material",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/7th-pdf-notes-688652406c53469d2b137c4b",
    demoLink: "#",
    description: "Comprehensive PDF study notes for Class 7th all subjects",
    features: ["PDF Format", "All Subjects", "Easy Download", "Lifetime Access"],
    status: "sold"
  },
  {
    id: 10,
    title: "7th Mind Maps",
    instructor: "Content Team",
    rating: 4.5,
    reviews: 145,
    price: 349,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 267,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_e56aa845-7308-4132-a0f6-2a31e9ea4170",
    category: "Class 7th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/7th-mind-maps-6886524f4183a9ef3ff44ba1",
    demoLink: "#",
    description: "Visual mind maps for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "All Topics Covered", "Easy to Remember"],
    status: "sold"
  },

  // Class 8th Courses
  {
    id: 11,
    title: "8th Live Classes - Core Subjects",
    instructor: "Expert Faculty",
    rating: 4.6,
    reviews: 178,
    price: 24999,
    oldPrice: 29999,
    level: 'Intermediate',
    students: 334,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_1de35ff0-b3aa-4078-9d66-48a921d37940",
    category: "Class 8th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/8th-live-classes-core-subjects-688245395440376738520559",
    demoLink: "#",
    description: "Live classes for 8th grade covering Science, Maths, English and Social Science",
    features: ["Live Interactive Classes", "Expert Faculty", "All Core Subjects", "Regular Assessments"],
    status: "active"
  },
  {
    id: 12,
    title: "8th Live Classes - Science",
    instructor: "Science Expert",
    rating: 4.4,
    reviews: 145,
    price: 14999,
    oldPrice: 19999,
    level: 'Intermediate',
    students: 267,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_080a9fb7-bea2-4e8f-936b-adecf2dfe388",
    category: "Class 8th",
    subCategory: "Science",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/8th-live-classes-science-68824500544037673851f8bc",
    demoLink: "#",
    description: "Dedicated Science live classes for Class 8th students",
    features: ["Live Science Classes", "Practical Demonstrations", "Concept Building", "Regular Tests"],
    status: "active"
  },
  {
    id: 13,
    title: "8th Live Classes - Maths",
    instructor: "Math Expert",
    rating: 4.2,
    reviews: 98,
    price: 14999,
    oldPrice: 19999,
    level: 'Intermediate',
    students: 189,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_2d2b025a-5a38-48c4-84b6-088db832c751",
    category: "Class 8th",
    subCategory: "Mathematics",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/8th-live-classes-maths-6882451b363ae235afeaae42",
    demoLink: "#",
    description: "Live Mathematics classes for Class 8th with problem-solving focus",
    features: ["Live Math Classes", "Problem Solving", "Formula Practice", "Step-by-step Solutions"],
    status: "active"
  },
  {
    id: 14,
    title: "8th PDF Notes",
    instructor: "Content Team",
    rating: 4.5,
    reviews: 234,
    price: 699,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 456,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_cc5aa487-6149-4c2f-bc0e-a82e96138dff",
    category: "Class 8th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/8th-pdf-notes-6886525d0d763977a7458416",
    demoLink: "#",
    description: "Comprehensive PDF study notes for Class 8th all subjects",
    features: ["PDF Format", "All Subjects", "Easy Download", "Lifetime Access"],
    status: "active"
  },
  {
    id: 15,
    title: "8th Mind Maps",
    instructor: "Content Team",
    rating: 4.3,
    reviews: 156,
    price: 349,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 298,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_62f6a78a-e18a-4fc8-9038-3b6a514825c9",
    category: "Class 8th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/8th-mind-maps-6886526ab9da14ec1122c829",
    demoLink: "#",
    description: "Visual mind maps for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "All Topics Covered", "Easy to Remember"],
    status: "active"
  },

  // Class 9th Courses
  {
    id: 16,
    title: "9th Live Classes - Core Subjects",
    instructor: "Expert Faculty",
    rating: 4.6,
    reviews: 198,
    price: 24999,
    oldPrice: 39999,
    level: 'Intermediate',
    students: 356,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_2c95afe6-96fe-42e1-9372-13a20fb9213b",
    category: "Class 9th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/9th-live-classes-core-subjects-688244d45bc2803febe71261",
    demoLink: "#",
    description: "Live classes for 9th grade covering Science, Maths, English and Social Science",
    features: ["Live Interactive Classes", "Expert Faculty", "All Core Subjects", "Regular Assessments"],
    status: "active"
  },
  {
    id: 17,
    title: "9th Live Classes - Science",
    instructor: "Science Expert",
    rating: 4.4,
    reviews: 167,
    price: 14999,
    oldPrice: 24999,
    level: 'Intermediate',
    students: 289,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_dde26a6f-78fe-43cf-8aa2-3016efa5f972",
    category: "Class 9th",
    subCategory: "Science",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/9th-live-classes-science-688244b2998398026c9dee19",
    demoLink: "#",
    description: "Dedicated Science live classes for Class 9th students",
    features: ["Live Science Classes", "Practical Demonstrations", "Concept Building", "Regular Tests"],
    status: "active"
  },
  {
    id: 18,
    title: "9th Live Classes - Maths",
    instructor: "Math Expert",
    rating: 4.5,
    reviews: 234,
    price: 14999,
    oldPrice: 24999,
    level: 'Intermediate',
    students: 412,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_752a15e6-0d09-42df-9bbb-712ad5ce415b",
    category: "Class 9th",
    subCategory: "Mathematics",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/9th-live-classes-maths-688244c303f0f6fdf0bf2295",
    demoLink: "#",
    description: "Live Mathematics classes for Class 9th with problem-solving focus",
    features: ["Live Math Classes", "Problem Solving", "Formula Practice", "Step-by-step Solutions"],
    status: "active"
  },
  {
    id: 19,
    title: "9th PDF Notes",
    instructor: "Content Team",
    rating: 4.3,
    reviews: 145,
    price: 699,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 267,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3b1b1f14-985b-445e-b2b2-5f4160e08c1c",
    category: "Class 9th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/9th-pdf-notes-688652783e947f9e339a9cf7",
    demoLink: "#",
    description: "Comprehensive PDF study notes for Class 9th all subjects",
    features: ["PDF Format", "All Subjects", "Easy Download", "Lifetime Access"],
    status: "active"
  },
  {
    id: 20,
    title: "9th Mind Maps",
    instructor: "Content Team",
    rating: 4.2,
    reviews: 123,
    price: 349,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 198,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_c3212db0-3a98-4156-94fc-096d6f0a86a8",
    category: "Class 9th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/9th-mind-maps-6886528803322a4e0b189ae0",
    demoLink: "#",
    description: "Visual mind maps for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "All Topics Covered", "Easy to Remember"],
    status: "active"
  },

  // Class 10th Courses
  {
    id: 21,
    title: "10th Live Classes - Core Subjects",
    instructor: "Expert Faculty",
    rating: 4.7,
    reviews: 245,
    price: 24999,
    oldPrice: 39999,
    level: 'Intermediate',
    students: 423,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_d0b83952-2d34-4fb9-9192-fb1ad0cdafaa",
    category: "Class 10th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/10th-live-classes-core-subjects-688244910b265fb9c9ac52d3",
    demoLink: "#",
    description: "Live classes for 10th grade covering Science, Maths, English and Social Science",
    features: ["Live Interactive Classes", "Expert Faculty", "All Core Subjects", "Board Exam Preparation"],
    status: "active"
  },
  {
    id: 22,
    title: "10th Live Classes - Science",
    instructor: "Science Expert",
    rating: 4.6,
    reviews: 198,
    price: 14999,
    oldPrice: 24999,
    level: 'Intermediate',
    students: 334,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_faf5454b-7a9a-4f09-8cdc-1216779b77c5",
    category: "Class 10th",
    subCategory: "Science",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/10th-live-classes-science-6882443a12c7e67a175deafa",
    demoLink: "#",
    description: "Dedicated Science live classes for Class 10th students",
    features: ["Live Science Classes", "Physics, Chemistry, Biology", "Board Exam Focus", "Practical Knowledge"],
    status: "active"
  },
  {
    id: 23,
    title: "10th Live Classes - Maths",
    instructor: "Math Expert",
    rating: 4.5,
    reviews: 178,
    price: 14999,
    oldPrice: 24999,
    level: 'Intermediate',
    students: 289,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_7d3c17e5-f4a2-4284-892c-e9e11e32eb2f",
    category: "Class 10th",
    subCategory: "Mathematics",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/10th-live-classes-maths-687f82f98f6400390696a562",
    demoLink: "#",
    description: "Live Mathematics classes for Class 10th with board exam focus",
    features: ["Live Math Classes", "Board Exam Preparation", "Problem Solving", "Step-by-step Solutions"],
    status: "active"
  },
  {
    id: 24,
    title: "10th PDF Notes",
    instructor: "Content Team",
    rating: 4.4,
    reviews: 156,
    price: 699,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 267,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3e7fcca9-9a30-4d17-82f1-67ab4845bde0",
    category: "Class 10th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/10th-pdf-notes-688617cc7897712434d58676",
    demoLink: "#",
    description: "Comprehensive PDF study notes for Class 10th all subjects",
    features: ["PDF Format", "All Subjects", "Board Exam Focused", "Easy Download"],
    status: "active"
  },
  {
    id: 25,
    title: "10th Mind Maps",
    instructor: "Content Team",
    rating: 4.3,
    reviews: 134,
    price: 349,
    oldPrice: 2499,
    level: 'Intermediate',
    students: 223,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3542e724-87ae-43dd-b764-ef50b83e211d",
    category: "Class 10th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/10th-mind-maps-688617b76c53469d2b0c034f",
    demoLink: "#",
    description: "Visual mind maps for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "All Topics Covered", "Board Exam Ready"],
    status: "active"
  },

  // Class 11th Courses
  {
    id: 44,
    title: "11th Live Classes - PCM",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 39999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3ebf19f1-0eb8-4cee-82e5-4bd79fe3d166",
    category: "Class 11th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/11th-live-classes-pcm-68d11c9c8279765f4b233485",
    demoLink: "#",
    description: "Live classes for 11th grade covering Physics, Chemistry, and Mathematics",
    features: ["Live Interactive Classes", "Expert Faculty", "PCM Subjects", "Regular Assessments"],
    status: "upcoming"
  },
  {
    id: 45,
    title: "11th Live Classes - PCB",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 39999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_190710e9-9bfe-4b47-80f6-896ed6ff8c00",
    category: "Class 11th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/11th-live-classes-pcb-68d11cb1fbcfe6a5daa686a5",
    demoLink: "#",
    description: "Live classes for 11th grade covering Physics, Chemistry, and Biology",
    features: ["Live Interactive Classes", "Expert Faculty", "PCB Subjects", "Regular Assessments"],
    status: "upcoming"
  },
  {
    id: 46,
    title: "11th Live Classes - Humanities",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 39999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_2d4f5b56-1f20-4175-aa52-45bb48b3a389",
    category: "Class 11th",
    subCategory: "Live Classes",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-live-classes-humanities-68d11d179ceebb52e4a7516e",
    demoLink: "#",
    description: "Live classes for 11th grade covering History, Geography, Political Science, and Economics",
    features: ["Live Interactive Classes", "Expert Faculty", "Humanities Subjects", "Regular Assessments"],
    status: "upcoming"
  },
  {
    id: 47,
    title: "11th Live Classes - Commerce",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 39999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_899f307b-fac4-4fc0-b0b4-03622742fb3f",
    category: "Class 11th",
    subCategory: "Live Classes",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-live-classes-commerce-68d11d9bfd4cf56805383305",
    demoLink: "#",
    description: "Live classes for 11th grade covering Accountancy, Business Studies, and Economics",
    features: ["Live Interactive Classes", "Expert Faculty", "Commerce Subjects", "Regular Assessments"],
    status: "upcoming"
  },
  {
    id: 48,
    title: "11th PCM Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_ce861e90-f1b3-42c2-a3db-1e1865aa7cdc",
    category: "Class 11th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-pcm-mind-maps-68d11e16fd4cf5680538449d",
    demoLink: "#",
    description: "Visual mind maps for 11th PCM subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "PCM Topics Covered", "Easy to Remember"],
    status: "upcoming"
  },
  {
    id: 49,
    title: "11th PCB Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_b1b01947-69db-4dd7-87ad-8a389011e3c4",
    category: "Class 11th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-pcb-mind-maps-68d11e32d186e42df2b7be9a",
    demoLink: "#",
    description: "Visual mind maps for 11th PCB subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "PCB Topics Covered", "Easy to Remember"],
    status: "upcoming"
  },
  {
    id: 50,
    title: "11th Humanities Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_13a99316-21de-4537-bccc-c2e73e2d69c4",
    category: "Class 11th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-humanities-mind-maps-68d11e52d186e42df2b7c5a5",
    demoLink: "#",
    description: "Visual mind maps for 11th Humanities subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "Humanities Topics Covered", "Easy to Remember"],
    status: "upcoming"
  },
  {
    id: 51,
    title: "11th Commerce Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3ba874e1-2fef-426b-b6d8-7547c8e3ea25",
    category: "Class 11th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-commerce-mind-maps-68d11e67ed3275d802d4b3ec",
    demoLink: "#",
    description: "Visual mind maps for 11th Commerce subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "Commerce Topics Covered", "Easy to Remember"],
    status: "upcoming"
  },
  {
    id: 52,
    title: "11th PCM PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 2999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_5be8e549-d101-4c61-9227-5fd1eef38011",
    category: "Class 11th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-pcm-pdf-notes-68d11e7fe3a97ec7327e82af",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 11th PCM subjects",
    features: ["Detailed Notes", "All PCM Topics", "Easy to Download", "Exam Ready"],
    status: "upcoming"
  },
  {
    id: 53,
    title: "11th PCB PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 2999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_43db57db-48ea-4bc1-9656-73c30a9603ae",
    category: "Class 11th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-pcb-pdf-notes-68d11e9afd4cf568053857b0",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 11th PCB subjects",
    features: ["Detailed Notes", "All PCB Topics", "Easy to Download", "Exam Ready"],
    status: "upcoming"
  },
  {
    id: 54,
    title: "11th Humanities PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 2999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_565c9010-98af-4f04-9d15-02d3c55830d7",
    category: "Class 11th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-humanities-pdf-notes-68d11ed3fd4cf568053862c1",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 11th Humanities subjects",
    features: ["Detailed Notes", "All Humanities Topics", "Easy to Download", "Exam Ready"],
    status: "upcoming"
  },
  {
    id: 55,
    title: "11th Commerce PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 2999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_60a6fc91-ead6-410f-a4de-1a3ed5d87dd2",
    category: "Class 11th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/11th-commerce-pdf-notes-68d11ee9fd4cf56805386547",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 11th Commerce subjects",
    features: ["Detailed Notes", "All Commerce Topics", "Easy to Download", "Exam Ready"],
    status: "upcoming"
  },

  // Class 12th Courses
  {
    id: 56,
    title: "12th Live Classes - PCM",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 44999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_683aebc4-d12c-4b65-b8dd-05f8dfa9217f",
    category: "Class 12th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/12th-live-classes-pcm-68d11f16ed3275d802d4c887",
    demoLink: "#",
    description: "Live classes for 12th grade covering Physics, Chemistry, and Mathematics",
    features: ["Live Interactive Classes", "Expert Faculty", "PCM Subjects", "Board Exam Preparation"],
    status: "upcoming"
  },
  {
    id: 57,
    title: "12th Live Classes - PCB",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 44999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_18f93b10-cda4-429a-b307-0e2736cf00db",
    category: "Class 12th",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/12th-live-classes-pcb-68d11f29ed3275d802d4caff",
    demoLink: "#",
    description: "Live classes for 12th grade covering Physics, Chemistry, and Biology",
    features: ["Live Interactive Classes", "Expert Faculty", "PCB Subjects", "Board Exam Preparation"],
    status: "upcoming"
  },
  {
    id: 58,
    title: "12th Live Classes - Humanities",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 44999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_e737897f-ff2d-4cc9-a01d-ea9ea4d5bcc7",
    category: "Class 12th",
    subCategory: "Live Classes",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-live-classes-humanities-68d11f3ba02e7aec59ae2a80",
    demoLink: "#",
    description: "Live classes for 12th grade covering History, Geography, Political Science, and Economics",
    features: ["Live Interactive Classes", "Expert Faculty", "Humanities Subjects", "Board Exam Preparation"],
    status: "upcoming"
  },
  {
    id: 59,
    title: "12th Live Classes - Commerce",
    instructor: "Expert Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 44999,
    level: 'Advanced',
    students: 0,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_fe902601-5023-4548-a7ed-9808d15bdb59",
    category: "Class 12th",
    subCategory: "Live Classes",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-live-classes-commerce-68d11f8a0469868f09f96079",
    demoLink: "#",
    description: "Live classes for 12th grade covering Accountancy, Business Studies, and Economics",
    features: ["Live Interactive Classes", "Expert Faculty", "Commerce Subjects", "Board Exam Preparation"],
    status: "upcoming"
  },
  {
    id: 60,
    title: "12th PCM Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_ad6b53b4-cfc3-48ce-8e2f-8a3db8fa0521",
    category: "Class 12th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-pcm-mind-maps-68d11fada02e7aec59ae44d9",
    demoLink: "#",
    description: "Visual mind maps for 12th PCM subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "PCM Topics Covered", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 61,
    title: "12th PCB Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_35f0df7d-adbd-4f93-9795-6f2f6531b569",
    category: "Class 12th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-pcb-mind-maps-68d11fc0e3a97ec7327ec491",
    demoLink: "#",
    description: "Visual mind maps for 12th PCB subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "PCB Topics Covered", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 62,
    title: "12th Humanities Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_64a25cb8-869f-4c24-af7c-d6841e48c56a",
    category: "Class 12th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-humanities-mind-maps-68d11fd3a02e7aec59ae6889",
    demoLink: "#",
    description: "Visual mind maps for 12th Humanities subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "Humanities Topics Covered", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 63,
    title: "12th Commerce Mind Maps",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3999,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_a8127edb-87ec-44fa-afb6-6365081c32a4",
    category: "Class 12th",
    subCategory: "Mind Maps",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-commerce-mind-maps-68d11ff60469868f09f98684",
    demoLink: "#",
    description: "Visual mind maps for 12th Commerce subjects for better understanding and quick revision",
    features: ["Visual Learning", "Quick Revision", "Commerce Topics Covered", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 64,
    title: "12th PCM PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_352531bd-b8aa-4a2d-80fb-6ac5c0d8bef7",
    category: "Class 12th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-pcm-pdf-notes-68d120110469868f09f98ab8",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 12th PCM subjects",
    features: ["Detailed Notes", "All PCM Topics", "Easy to Download", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 65,
    title: "12th PCB PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_a817f5d4-e1f5-4348-a1e0-279761af1e18",
    category: "Class 12th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-pcb-pdf-notes-68d1204ce3a97ec7327ed668",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 12th PCB subjects",
    features: ["Detailed Notes", "All PCB Topics", "Easy to Download", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 66,
    title: "12th Humanities PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_4124280f-583d-43c6-b67b-b2c43912c59d",
    category: "Class 12th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-humanities-pdf-notes-68d1205ee3a97ec7327ed90a",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 12th Humanities subjects",
    features: ["Detailed Notes", "All Humanities Topics", "Easy to Download", "Board Exam Ready"],
    status: "upcoming"
  },
  {
    id: 67,
    title: "12th Commerce PDF Notes",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 3499,
    level: 'Advanced',
    students: 0,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_7ad10509-6641-403e-8e45-1d21177d98b9",
    category: "Class 12th",
    subCategory: "Study Material",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/12th-commerce-pdf-notes-68d120802733c75fcabed53d",
    demoLink: "#",
    description: "Comprehensive PDF study notes for 12th Commerce subjects",
    features: ["Detailed Notes", "All Commerce Topics", "Easy to Download", "Board Exam Ready"],
    status: "upcoming"
  },

  // JEE Courses
  {
    id: 26,
    title: "JEE Live Classes",
    instructor: "IIT Faculty",
    rating: 0,
    reviews: 0,
    price: 24999,
    oldPrice: 39999,
    level: 'Advanced',
    students: 1234,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3df92c1d-4cb9-4a44-a69e-46e70bbdb4f6",
    category: "JEE",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/jee-live-classes-689afc8c2996e1667503f784",
    demoLink: "#",
    description: "Complete JEE 2026 preparation with live classes from IIT faculty",
    features: ["Live Interactive Classes", "IIT Faculty", "Physics, Chemistry, Maths", "JEE Main & Advanced"],
    status: "upcoming"
  },
  {
    id: 27,
    title: "JEE Test Series",
    instructor: "IIT Faculty",
    rating: 0,
    reviews: 0,
    price: 2499,
    oldPrice: 4999,
    level: 'Advanced',
    students: 789,
    duration: "6 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_00498f25-cc1d-4567-95aa-a9cb0890bc13",
    category: "JEE",
    subCategory: "Test Series",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/jee-test-series-689afca4c181846bf56b5d73",
    demoLink: "#",
    description: "Comprehensive test series for JEE 2026 preparation",
    features: ["Mock Tests", "Previous Year Papers", "Performance Analysis", "All India Ranking"],
    status: "upcoming"
  },

  // NEET Courses
  {
    id: 28,
    title: "ScoreLift NEET 2026 - Live Classes",
    instructor: "Medical Faculty",
    rating: 4.9,
    reviews: 678,
    price: 24999,
    oldPrice: 39999,
    level: 'Advanced',
    students: 1567,
    duration: "Full Year",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_8e70611b-4dcf-452f-be88-f5b683d3f782",
    category: "NEET",
    subCategory: "Live Classes",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/scorelift-neet-2026-live-classes-689afbef24c8bdb6325ded5d",
    demoLink: "#",
    description: "ScoreLift NEET 2026 preparation with live classes from medical experts",
    features: ["Live Interactive Classes", "Medical Faculty", "Biology, Physics, Chemistry", "NCERT Based"],
  status: "active"
  },
  {
    id: 29,
    title: "ScoreLift NEET 2026 - Test Series",
    instructor: "Medical Faculty",
    rating: 4.8,
    reviews: 445,
    price: 2499,
    oldPrice: 4999,
    level: 'Advanced',
    students: 789,
    duration: "6 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_ae04e9dd-a414-449f-ac18-0bfc48ca8b6f",
    category: "NEET",
    subCategory: "Test Series",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/scorelift-neet-2026-test-series-689afc5a083e0b3f523dd20e",
    demoLink: "#",
    description: "Complete test series for NEET 2026 preparation",
    features: ["Mock Tests", "NCERT Based Questions", "Performance Analysis", "All India Ranking"],
  status: "active"
  },

  // CUET Courses
  {
    id: 30,
    title: "CUET - General Aptitude Test",
    instructor: "CUET Expert",
    rating: 0,
    reviews: 0,
    price: 24999,
    oldPrice: 34999,
    level: 'Advanced',
    students: 445,
    duration: "30 hours",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_5c848ae4-8975-4524-acce-2f03f013f683",
    category: "CUET",
    subCategory: "General Aptitude",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-general-aptitude-test-689b3070d2d7065022f2ff12",
    demoLink: "#",
    description: "CUET General Aptitude Test preparation",
    features: ["Aptitude Tests", "Logical Reasoning", "General Awareness", "Practice Tests"],
    status: "upcoming"
  },
  {
    id: 31,
    title: "CUET - Science",
    instructor: "Science Expert",
    rating: 0,
    reviews: 0,
    price: 24999,
    oldPrice: 34999,
    level: 'Advanced',
    students: 334,
    duration: "30 hours",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_298b04f8-1380-460e-ae9d-ed5bb9504a4b",
    category: "CUET",
    subCategory: "Science",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-science-689b305177a3468ef05b333c",
    demoLink: "#",
    description: "CUET Science domain preparation",
    features: ["Physics", "Chemistry", "Biology", "Practice Tests"],
    status: "upcoming"
  },
  {
    id: 32,
    title: "CUET - Commerce",
    instructor: "Commerce Expert",
    rating: 0,
    reviews: 0,
    price: 24999,
    oldPrice: 34999,
    level: 'Advanced',
    students: 289,
    duration: "30 hours",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_2b433614-d56f-45ac-9784-0a59f509cac8",
    category: "CUET",
    subCategory: "Commerce",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-commerce-689b303ceb129968c3b28232",
    demoLink: "#",
    description: "CUET Commerce domain preparation",
    features: ["Accountancy", "Business Studies", "Economics", "Practice Tests"],
    status: "upcoming"
  },
  {
    id: 33,
    title: "CUET - Humanities",
    instructor: "Humanities Expert",
    rating: 0,
    reviews: 0,
    price: 24999,
    oldPrice: 29999,
    level: 'Advanced',
    students: 223,
    duration: "30 hours",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_e1a8a855-b33b-4595-9780-8701adc63bb6",
    category: "CUET",
    subCategory: "Humanities",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-humanities-689b3017c70802a6719d4909",
    demoLink: "#",
    description: "CUET Humanities domain preparation",
    features: ["History", "Geography", "Political Science", "Practice Tests"],
    status: "upcoming"
  },
  {
    id: 34,
    title: "CUET - Humanities PYQs",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 1499,
    level: 'Advanced',
    students: 167,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_3c77e94c-1949-4926-b033-b232e69e7d88",
    category: "CUET",
    subCategory: "PYQs",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-humanities-pyqs-689b338ed2d7065022f3a9c8",
    demoLink: "#",
    description: "CUET Humanities Previous Year Questions",
    features: ["Previous Year Papers", "Detailed Solutions", "Practice Tests", "Exam Pattern"],
    status: "upcoming"
  },
  {
    id: 35,
    title: "CUET - Commerce PYQs",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 1499,
    level: 'Advanced',
    students: 145,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_1765c713-a8b9-4b48-80bc-621137b51fc5",
    category: "CUET",
    subCategory: "PYQs",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-commerce-pyqs-689b33cc24c8bdb632660b59",
    demoLink: "#",
    description: "CUET Commerce Previous Year Questions",
    features: ["Previous Year Papers", "Detailed Solutions", "Practice Tests", "Exam Pattern"],
    status: "upcoming"
  },
  {
    id: 36,
    title: "CUET - Science PYQs",
    instructor: "Content Team",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 1499,
    level: 'Advanced',
    students: 123,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_ec2c29c7-4230-4eee-8644-1ebd80195205",
    category: "CUET",
    subCategory: "PYQs",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/cuet-science-pyqs-689b345aeb129968c3b3849c",
    demoLink: "#",
    description: "CUET Science Previous Year Questions",
    features: ["Previous Year Papers", "Detailed Solutions", "Practice Tests", "Exam Pattern"],
    status: "upcoming"
  },

  // Additional JEE Course
  {
    id: 37,
    title: "JEE PYQs",
    instructor: "IIT Faculty",
    rating: 0,
    reviews: 0,
    price: 0,
    oldPrice: 2499,
    level: 'Advanced',
    students: 523,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_4dae5415-85e8-48d9-97bd-79403f8b9220",
    category: "JEE",
    subCategory: "PYQs",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/jee-pyqs-689b3225eb129968c3b2e806",
    demoLink: "#",
    description: "JEE Previous Year Questions with detailed solutions",
    features: ["Previous Year Papers", "JEE Main & Advanced", "Detailed Solutions", "Topic-wise Practice"],
    status: "upcoming"
  },

  // Additional NEET Course
  {
    id: 38,
    title: "ScoreLift NEET 2026 - PYQs",
    instructor: "Medical Faculty",
    rating: 4.7,
    reviews: 345,
    price: 0,
    oldPrice: 2499,
    level: 'Advanced',
    students: 678,
    duration: "Lifetime Access",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_09175d26-8a09-4750-b2c3-1ecbbcfd1c9a",
    category: "NEET",
    subCategory: "PYQs",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/scorelift-neet-2026-pyqs-689b31f3c181846bf5732ead",
    demoLink: "#",
    description: "ScoreLift NEET 2026 Previous Year Questions",
    features: ["Previous Year Papers", "NCERT Based", "Detailed Solutions", "Topic-wise Practice"],
  status: "active"
  },

  // Skill Development / Upskilling Courses
  {
    id: 39,
    title: "Artificial Intelligence - Advanced Program",
    instructor: "AI Expert",
    rating: 0,
    reviews: 0,
    price: 29999,
    oldPrice: 39999,
    level: 'Advanced',
    students: 456,
    duration: "6 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_128977ec-63da-4f03-bcb8-0383916daeba",
    category: "Skill Development",
    subCategory: "Artificial Intelligence",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/artificial-intelligence-advanced-program-68a2c1aa52085dd80fd21e99",
    demoLink: "#",
    description: "Advanced AI program covering Machine Learning, Deep Learning, and Neural Networks",
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "Hands-on Projects", "Industry Mentorship"],
    status: "upcoming"
  },
  {
    id: 40,
    title: "Artificial Intelligence - Basic Program",
    instructor: "AI Expert",
    rating: 0,
    reviews: 0,
    price: 4999,
    oldPrice: 9999,
    level: 'Beginner',
    students: 567,
    duration: "3 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_96a5a9bb-40b1-4715-997c-653b67b65bc9",
    category: "Skill Development",
    subCategory: "Artificial Intelligence",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/artificial-intelligence-basic-program-68a2c18bcba13440e4d07c2a",
    demoLink: "#",
    description: "Introduction to AI concepts, Python programming, and basic machine learning",
    features: ["Python Programming", "AI Fundamentals", "Basic ML Algorithms", "Practical Projects"],
    status: "upcoming"
  },
  {
    id: 41,
    title: "Data Analytics",
    instructor: "Data Science Expert",
    rating: 0,
    reviews: 0,
    price: 29999,
    oldPrice: 39999,
    level: 'Intermediate',
    students: 678,
    duration: "4 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_97e02f43-3334-46e4-84ef-f976e9580a27",
    category: "Skill Development",
    subCategory: "Data Analytics",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/data-analytics-68a2c0de5bcbb1ca1f9df151",
    demoLink: "#",
    description: "Comprehensive data analytics course covering statistics, visualization, and business intelligence",
    features: ["Statistical Analysis", "Data Visualization", "Excel & SQL", "Power BI", "Real-world Projects"],
    status: "upcoming"
  },
  {
    id: 42,
    title: "Digital Marketing",
    instructor: "Marketing Expert",
    rating: 0,
    reviews: 0,
    price: 29999,
    oldPrice: 39999,
    level: 'Intermediate',
    students: 789,
    duration: "3 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_5c1500b3-fb68-4b1b-ac52-15dc8acc36d3",
    category: "Skill Development",
    subCategory: "Digital Marketing",
    isPopular: false,
    enrollLink: "https://courses.shikshanation.com/courses/digital-marketing-68a2c0c8ae3fad7478b63cdc",
    demoLink: "#",
    description: "Complete digital marketing course covering SEO, SEM, social media, and content marketing",
    features: ["SEO & SEM", "Social Media Marketing", "Content Marketing", "Google Ads", "Analytics & Reporting"],
    status: "upcoming"
  },
  {
    id: 43,
    title: "UI UX Design",
    instructor: "Design Expert",
    rating: 0,
    reviews: 0,
    price: 29999,
    oldPrice: 39999,
    level: 'Intermediate',
    students: 445,
    duration: "4 Months",
    image: "https://files.wiseapp.live/upload_files/688083d00933d0d6193bffe5/upload_61742eb1-3c98-4b82-a38f-4e86d0d4b8b9",
    category: "Skill Development",
    subCategory: "UI/UX Design",
    isPopular: true,
    enrollLink: "https://courses.shikshanation.com/courses/ui-ux-design-68a2c061ac2a8d755cecf0dd",
    demoLink: "#",
    description: "Complete UI/UX design course covering design principles, tools, and portfolio development",
    features: ["Design Principles", "Figma & Adobe XD", "User Research", "Prototyping", "Portfolio Development"],
    status: "upcoming"
  }
];

// Helper functions to filter courses
export const getCoursesByCategory = (category: string): Course[] => {
  // Helper function to sort courses by status (active first)
  const sortByStatus = (courses: Course[]) => {
    return courses.sort((a, b) => {
      const getStatusPriority = (course: Course) => {
        if (course.status === "active") return 1;
        if (course.status === "upcoming") return 2;
        if (course.status === "sold") return 3;
        return 4;
      };
      return getStatusPriority(a) - getStatusPriority(b);
    });
  };

  if (category === "all" || category === "All Categories") {
    return sortByStatus(coursesData);
  }
  
  // ShikshaBase - Class 6th to 10th
  if (category === "ShikshaBase") {
    const courses = coursesData.filter(course => 
      course.category === "Class 6th" ||
      course.category === "Class 7th" ||
      course.category === "Class 8th" ||
      course.category === "Class 9th" ||
      course.category === "Class 10th"
    );
    return sortByStatus(courses);
  }
  
  // ShikshaEdge - Class 11th and 12th
  if (category === "ShikshaEdge") {
    const courses = coursesData.filter(course => 
      course.category === "Class 11th" || 
      course.category === "Class 12th"
    );
    return sortByStatus(courses);
  }
  
  // ShikshaQuest - Keep as competitive exams (maintaining backwards compatibility)
  if (category === "ShikshaQuest") {
    const courses = coursesData.filter(course => 
      course.category === "JEE" || 
      course.category === "NEET" || 
      course.category === "CUET"
    );
    return sortByStatus(courses);
  }
  
  // ShikshaPro - Skill Development
  if (category === "ShikshaPro") {
    const courses = coursesData.filter(course => course.category === "Skill Development");
    return sortByStatus(courses);
  }

  // Handle individual class categories
  if (category.includes("Class") || category === "Class 11th" || category === "Class 12th") {
    const courses = coursesData.filter(course => course.category === category);
    return sortByStatus(courses);
  }
  
  // Handle competitive exam categories
  if (category === "JEE" || category === "NEET" || category === "CUET") {
    const courses = coursesData.filter(course => course.category === category);
    return sortByStatus(courses);
  }
  
  // Handle ShikshaEdge subcategories
  if (category === "11th") {
    const courses = coursesData.filter(course => course.category === "Class 11th");
    return sortByStatus(courses);
  }
  
  if (category === "12th") {
    const courses = coursesData.filter(course => course.category === "Class 12th");
    return sortByStatus(courses);
  }
  
  // Handle ShikshaPro subcategories (specific course titles)
  if (category === "Artificial Intelligence - Advanced Program" || 
      category === "Artificial Intelligence - Basic Program" ||
      category === "Data Analytics" ||
      category === "Digital Marketing" ||
      category === "UI UX Design") {
    const courses = coursesData.filter(course => course.title === category);
    return sortByStatus(courses);
  }

  // Handle legacy skill development category
  if (category === "skilling" || category === "Skill Development") {
    const courses = coursesData.filter(course => course.category === "Skill Development");
    return sortByStatus(courses);
  }
  
  const courses = coursesData.filter(course => course.category === category);
  return sortByStatus(courses);
};

export const getCoursesBySubCategory = (subCategory: string): Course[] => {
  return coursesData.filter(course => course.subCategory === subCategory);
};

export const getPopularCourses = (): Course[] => {
  return coursesData.filter(course => course.isPopular);
};

// Get specific courses for "All Categories" display in home page
export const getHomepageTopCourses = (): Course[] => {
  const selectedCourses: Course[] = [];
  
  // Helper function to sort courses by status (active first)
  const sortByStatus = (courses: Course[]) => {
    return courses.sort((a, b) => {
      const getStatusPriority = (course: Course) => {
        if (course.status === "active") return 1;
        if (course.status === "upcoming") return 2;
        if (course.status === "sold") return 3;
        return 4;
      };
      return getStatusPriority(a) - getStatusPriority(b);
    });
  };
  
  // Class 8th: Core Subjects + PDF Notes (prioritize active courses)
  const class8thCourses = coursesData.filter(course => 
    course.category === "Class 8th" && 
    (course.subCategory === "Live Classes" || course.subCategory === "Study Material")
  );
  const sortedClass8th = sortByStatus(class8thCourses);
  selectedCourses.push(...sortedClass8th.slice(0, 2));
  
  // Class 9th: Core Subjects + PDF Notes (prioritize active courses)
  const class9thCourses = coursesData.filter(course => 
    course.category === "Class 9th" && 
    (course.subCategory === "Live Classes" || course.subCategory === "Study Material")
  );
  const sortedClass9th = sortByStatus(class9thCourses);
  selectedCourses.push(...sortedClass9th.slice(0, 2));
  
  // Class 10th: Core Subjects + PDF Notes (prioritize active courses)
  const class10thCourses = coursesData.filter(course => 
    course.category === "Class 10th" && 
    (course.subCategory === "Live Classes" || course.subCategory === "Study Material")
  );
  const sortedClass10th = sortByStatus(class10thCourses);
  selectedCourses.push(...sortedClass10th.slice(0, 2));
  
  // Class 11th: Core Subjects + PDF Notes (prioritize active courses)
  const class11thCourses = coursesData.filter(course => 
    course.category === "Class 11th" && 
    (course.subCategory === "Live Classes" || course.subCategory === "Study Material")
  );
  const sortedClass11th = sortByStatus(class11thCourses);
  selectedCourses.push(...sortedClass11th.slice(0, 2));
  
  // Class 12th: Core Subjects + PDF Notes (prioritize active courses)
  const class12thCourses = coursesData.filter(course => 
    course.category === "Class 12th" && 
    (course.subCategory === "Live Classes" || course.subCategory === "Study Material")
  );
  const sortedClass12th = sortByStatus(class12thCourses);
  selectedCourses.push(...sortedClass12th.slice(0, 2));
  
  // JEE: Live Classes only (prioritize active courses)
  const jeeLiveCourses = coursesData.filter(course => 
    course.category === "JEE" && course.subCategory === "Live Classes"
  );
  const sortedJee = sortByStatus(jeeLiveCourses);
  if (sortedJee.length > 0) selectedCourses.push(sortedJee[0]);
  
  // NEET: Live Classes only (prioritize active courses)
  const neetLiveCourses = coursesData.filter(course => 
    course.category === "NEET" && course.subCategory === "Live Classes"
  );
  const sortedNeet = sortByStatus(neetLiveCourses);
  if (sortedNeet.length > 0) selectedCourses.push(sortedNeet[0]);
  
  // CUET: General Aptitude (prioritize active courses)
  const cuetGeneralAptitudeCourses = coursesData.filter(course => 
    course.category === "CUET" && course.subCategory === "General Aptitude"
  );
  const sortedCuet = sortByStatus(cuetGeneralAptitudeCourses);
  if (sortedCuet.length > 0) selectedCourses.push(sortedCuet[0]);
  
  // Skill Development: Digital Marketing (prioritize active courses)
  const digitalMarketingCourses = coursesData.filter(course => 
    course.category === "Skill Development" && course.title === "Digital Marketing"
  );
  const sortedDigitalMarketing = sortByStatus(digitalMarketingCourses);
  if (sortedDigitalMarketing.length > 0) selectedCourses.push(sortedDigitalMarketing[0]);
  
  return selectedCourses;
};

export const getCourseById = (id: number): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

// Helper functions to filter courses by status
export const getCoursesByStatus = (status: 'sold' | 'active' | 'upcoming'): Course[] => {
  return coursesData.filter(course => course.status === status);
};

export const getActiveCourses = (): Course[] => {
  return coursesData.filter(course => course.status === 'active');
};

export const getUpcomingCourses = (): Course[] => {
  return coursesData.filter(course => course.status === 'upcoming');
};

export const getSoldOutCourses = (): Course[] => {
  return coursesData.filter(course => course.status === 'sold');
};

// Categories for filters
export const categories = [
  { label: "All Categories", value: "all", count: coursesData.length },
  { 
    label: "ShikshaBase", 
    value: "shikshabase", 
    count: coursesData.filter(c => c.category === "Class 6th" || c.category === "Class 7th" || c.category === "Class 8th" || c.category === "Class 9th" || c.category === "Class 10th").length,
    subCategories: [
      { name: "Class 6th", count: coursesData.filter(c => c.category === "Class 6th").length },
      { name: "Class 7th", count: coursesData.filter(c => c.category === "Class 7th").length },
      { name: "Class 8th", count: coursesData.filter(c => c.category === "Class 8th").length },
      { name: "Class 9th", count: coursesData.filter(c => c.category === "Class 9th").length },
      { name: "Class 10th", count: coursesData.filter(c => c.category === "Class 10th").length },
    ]
  },
  { 
    label: "ShikshaEdge", 
    value: "shikshaedge", 
    count: coursesData.filter(c => c.category === "Class 11th" || c.category === "Class 12th").length,
    subCategories: [
      { 
        name: "11th", 
        count: coursesData.filter(c => c.category === "Class 11th").length 
      },
      { 
        name: "12th", 
        count: coursesData.filter(c => c.category === "Class 12th").length 
      },
    ]
  },
  { 
    label: "ShikshaQuest", 
    value: "shikshaquest", 
    count: coursesData.filter(c => c.category === "JEE" || c.category === "NEET" || c.category === "CUET").length,
    subCategories: [
      { name: "NEET", count: coursesData.filter(c => c.category === "NEET").length },
      { name: "JEE", count: coursesData.filter(c => c.category === "JEE").length },
      { name: "CUET", count: coursesData.filter(c => c.category === "CUET").length },
    ]
  },
  { 
    label: "ShikshaPro", 
    value: "shikshapro", 
    count: coursesData.filter(c => c.category === "Skill Development").length,
    subCategories: [
      { name: "Artificial Intelligence - Advanced Program", count: coursesData.filter(c => c.title === "Artificial Intelligence - Advanced Program").length },
      { name: "Artificial Intelligence - Basic Program", count: coursesData.filter(c => c.title === "Artificial Intelligence - Basic Program").length },
      { name: "Data Analytics", count: coursesData.filter(c => c.title === "Data Analytics").length },
      { name: "Digital Marketing", count: coursesData.filter(c => c.title === "Digital Marketing").length },
      { name: "UI UX Design", count: coursesData.filter(c => c.title === "UI UX Design").length },
    ]
  },
];
