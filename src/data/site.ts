export const SITE = {
  url: "https://www.rubinapokhrel61.com.np",
  name: "Rubina Pokhrel",
  role: "Full Stack Developer",
  email: "pokhrelrubina2061@gmail.com",
  phone: "+977 9862122655",
  phoneHref: "tel:+9779862122655",
  github: "https://github.com/rubinapokhrel061",
  linkedin: "https://www.linkedin.com/in/rubina-pokhrel-a85094275",
  location: "Lalitpur, Nepal",
  company: "BizHub Consulting Service Pvt. Ltd.",
  availability: "Available for international opportunities",
  resume: "/resume",
  description:
    "Full Stack Developer building enterprise ERP, payment and real-time systems with React, Next.js, TypeScript, Node.js, MongoDB and SAP Business One integration.",
};

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  overview: string;
  problem: string;
  contributions: string[];
  tags: string[];
  links: ProjectLink[];
  image: string;
  alt: string;
}

export const PROJECTS: Project[] = [
  {
    title: "TinyBee1",
    category: "Enterprise ERP",
    image: "/images/work/tinybee1.jpeg",
    alt: "TinyBee1 ERP dashboard with navigation for payments, manufacturing, quality control and Mail OCR AI",
    overview:
      "An enterprise ERP platform built around SAP Business One, covering production, inventory, quality control, payments and AI-powered automation.",
    problem:
      "Manual AP invoice processing and disconnected payment workflows slowed finance operations and caused errors between vendor mail, procurement and accounting.",
    contributions: [
      "Built the AI Mail Intelligence module that extracts invoice data from vendor emails and performs three-way matching against purchase orders and goods receipts.",
      "Developed OCR invoice extraction that posts AP invoices directly to SAP Business One.",
      "Implemented NCHL payment integration with transaction validation, reversals and refunds.",
      "Delivered production and quality control workflows with React interfaces and Node.js REST APIs.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "MySQL", "Redis", "BullMQ", "SAP Business One", "NCHL", "OCR"],
    links: [
      { label: "Website", href: "https://www.tinybee1.com/" },
      { label: "Platform", href: "https://tinybee1.bizhub.com.np/" },
    ],
  },
  {
    title: "Pals Courier Portal",
    category: "Courier Management",
    image: "/images/work/pals-courier.jpeg",
    alt: "Pals Courier and Cargo dashboard showing booking summary and account balance",
    overview:
      "A courier management platform for shipment booking, tracking, invoicing and online payment.",
    problem:
      "Couriers needed a single portal to book shipments, track deliveries and pay invoices without switching between disconnected systems.",
    contributions: [
      "Developed shipment booking, tracking and management features.",
      "Created an invoice in BizForce against each booking and surfaced it in the portal.",
      "Integrated Nepal Pay Dynamic QR for online invoice payment.",
    ],
    tags: ["React", "Node.js", "Shipment tracking", "BizForce", "Nepal Pay"],
    links: [{ label: "Portal", href: "https://main.d2snye6ojrr7uc.amplifyapp.com/" }],
  },
  {
    title: "ChatPilot",
    category: "Real-Time Messaging",
    image: "/images/work/chatpilot.jpeg",
    alt: "ChatPilot dashboard showing real-time messaging and notifications",
    overview:
      "A real-time messaging platform with asynchronous background processing and notification workflows.",
    problem:
      "Real-time chat required reliable message delivery while heavy media processing and notifications ran outside the request cycle.",
    contributions: [
      "Implemented real-time communication with Node.js and WebSockets.",
      "Built Redis-based background processing with BullMQ workers for media and notifications.",
      "Designed MongoDB data models for conversations, messages and users.",
    ],
    tags: ["Node.js", "WebSockets", "MongoDB", "Redis", "BullMQ"],
    links: [{ label: "Platform", href: "https://chatpilot.bizhub.com.np/" }],
  },
];

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    period: "Jun 2025 — Present",
    role: "Full Stack Developer",
    company: "BizHub Consulting Service Pvt. Ltd.",
    location: "Lalitpur, Nepal",
    type: "Full-time",
    summary: "Building and maintaining enterprise ERP, payment and real-time applications.",
    highlights: [
      "Building and maintaining enterprise ERP applications.",
      "Developing React and TypeScript interfaces.",
      "Building Node.js and Express.js REST APIs.",
      "Implementing SAP Business One integrations.",
      "Developing AI-powered invoice extraction and automation workflows.",
      "Implementing NCHL payment integrations.",
      "Working with MongoDB, MySQL, Redis and BullMQ.",
      "Developing production, quality control and payment management modules.",
    ],
  },
  {
    period: "Nov 2024 — Feb 2025",
    role: "React Native Developer Intern",
    company: "Digital Pathshala",
    location: "Nepal",
    type: "Internship",
    summary: "Built cross-platform mobile features and integrated REST APIs.",
    highlights: [
      "Built cross-platform mobile features with React Native.",
      "Integrated REST APIs into mobile applications.",
    ],
  },
  {
    period: "Jun 2024 — Sep 2024",
    role: "React Developer",
    company: "Munal IT Solution",
    location: "Bhaktapur, Nepal",
    type: "Internship",
    summary: "Built responsive interfaces in Git-based, Agile team workflows.",
    highlights: [
      "Built responsive interfaces with React, Redux and Tailwind CSS.",
      "Collaborated in Agile teams with code reviews and Git workflows.",
    ],
  },
];

export interface SkillGroup {
  group: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { group: "Frontend Engineering", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "React Native", "Redux", "Tailwind CSS"] },
  { group: "Backend Engineering", items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT Authentication"] },
  { group: "Databases & Data Modeling", items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Sequelize", "Mongoose"] },
  { group: "Caching & Message Queues", items: ["Redis", "BullMQ"] },
  { group: "AI & Automation", items: ["OCR Automation", "RAG", "LangChain"] },
  { group: "Integrations", items: ["SAP Business One", "NCHL Payments", "Nepal Pay Dynamic QR", "Microsoft 365", "BizForce"] },
  { group: "Tools & Infrastructure", items: ["Git", "GitHub", "Postman", "Docker", "AWS"] },
];

export interface Capability {
  title: string;
  text: string;
}

export const CAPABILITIES: Capability[] = [
  { title: "Full Stack Application Development", text: "End-to-end products from responsive React and Next.js interfaces to production Node.js APIs." },
  { title: "REST API Design & Development", text: "Well-structured, authenticated REST APIs with validation and clear error handling." },
  { title: "Enterprise ERP Integrations", text: "Deep SAP Business One integration across procurement, finance and inventory workflows." },
  { title: "Database Design & Optimization", text: "Relational and document data modeling with indexes, migrations and query tuning." },
  { title: "Real-Time Application Development", text: "WebSocket-based messaging with presence, delivery and synchronization built in." },
  { title: "Background Job Processing", text: "Reliable asynchronous workers with Redis and BullMQ for media and notifications." },
  { title: "Payment Gateway Integrations", text: "NCHL and Nepal Pay Dynamic QR integrations with reconciliation, reversals and refunds." },
  { title: "AI-Powered Business Automation", text: "OCR invoice extraction and RAG workflows that remove manual data entry from operations." },
];

export const EDUCATION = [
  { title: "BSc in Computer Science and Information Technology (CSIT)", place: "Amrit Science Campus, Kathmandu", period: "2022 — 2026" },
  { title: "+2 Science", place: "Sukuna Secondary School", period: "Completed 2022" },
];

export const CERTIFICATIONS = ["99 Days MERN Stack"];

export const HERO_STATS = [
  { value: "1.5+", label: "Years of experience" },
  { value: "10+", label: "Technologies in production" },
  { value: "3", label: "Live products shipped" },
];