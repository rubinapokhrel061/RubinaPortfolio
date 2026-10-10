export const SITE = {
  url: "https://www.rubinapokhrel61.com.np",
  name: "Rubina Pokhrel",
  role: "Full Stack Developer",
  email: "pokhrelrubina2061@gmail.com",
  phone: "+977 9862122655",
  phoneHref: "tel:+9779862122655",
  github: "https://github.com/rubinapokhrel061",
  linkedin: "https://www.linkedin.com/in/rubinapokhrel-a85094275",
  description:
    "Rubina Pokhrel is a Full Stack Developer in Nepal building ERP, payment and real-time systems with React, Node.js, MongoDB and SAP Business One integration.",
};

export const PROJECTS = [
  {
    title: "TinyBee1",
    type: "ERP on SAP Business One",
    image: "/images/work/tinybee1.jpeg",
    alt: "TinyBee1 ERP dashboard with navigation for payments, manufacturing, quality control and Mail OCR AI",
    points: [
      "Built the Mail OCR AI module: extracts invoice data from vendor emails, matches purchase orders and goods receipts, and posts AP invoices to SAP Business One.",
      "Developed the payments module with NCHL integration, transaction validation, and reversal and refund handling.",
      "Delivered production and quality control modules, with React interfaces and REST APIs on MongoDB.",
    ],
    tags: ["React", "Node.js", "MongoDB", "SAP Business One", "NCHL", "OCR"],
    links: [
      { label: "Website", href: "https://www.tinybee1.com/" },
      { label: "Platform", href: "https://tinybee1.bizhub.com.np/" },
    ],
  },
  {
    title: "Pals Courier Portal",
    type: "Courier management platform",
    image: "/images/work/pals-courier.jpeg",
    alt: "Pals Courier and Cargo dashboard showing booking summary and account balance",
    points: [
      "Developed shipment booking, tracking and management features.",
      "Created an invoice in BizForce against each booking and displayed it in the portal.",
      "Integrated Nepal Pay Dynamic QR for online invoice payment.",
    ],
    tags: ["Booking", "Shipment tracking", "BizForce", "Nepal Pay"],
    links: [{ label: "Portal", href: "https://main.d2snye6ojrr7uc.amplifyapp.com/" }],
  },
  {
    title: "ChatPilot",
    type: "AI-powered messaging platform",
    image: "/images/work/chatpilot.jpeg",
    alt: "ChatPilot dashboard showing real-time messaging and notifications",
    points: [
      "Implemented real-time messaging with Node.js and WebSockets.",
      "Built Redis and BullMQ workers for media processing and notifications.",
      "Designed MongoDB data models for conversations and users.",
    ],
    tags: ["Node.js", "WebSockets", "MongoDB", "Redis", "BullMQ"],
    links: [{ label: "Platform", href: "https://chatpilot.bizhub.com.np/" }],
  },
];

export const EXPERIENCE = [
  { period: "June 2025 to present", title: "Full Stack Developer", company: "BizHub Consulting Service Pvt. Ltd", text: "Building TinyBee1, Pals Courier Portal and ChatPilot: SAP-integrated ERP modules, payment integrations and real-time messaging." },
  { period: "Nov 2024 to Feb 2025", title: "React Native Developer Intern", company: "Digital Pathshala", text: "Built cross-platform mobile features and integrated REST APIs." },
  { period: "Jun 2024 to Sep 2024", title: "React Developer Intern", company: "Munal IT Solution, Bhaktapur", text: "Built responsive interfaces with React, Redux and Tailwind CSS, working in Git-based team workflows." },
];

export const SKILLS = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "React Native"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "WebSockets", "JWT", "Python"] },
  { group: "Data and queues", items: ["MongoDB", "MySQL", "Redis", "BullMQ", "Firebase"] },
  { group: "Integrations", items: ["SAP Business One", "NCHL", "Nepal Pay"] },
  { group: "Tools and learning", items: ["Git", "GitHub", "Docker", "AWS", "LangChain", "RAG"] },
];

export const EDUCATION = [
  { title: "BSc in Computer Science and Information Technology", place: "Amrit Science Campus, Kathmandu", period: "2022 to 2026" },
  { title: "+2 Science", place: "Sukuna Secondary School", period: "2022" },
];

export const CERTIFICATIONS = [
  "99 Days MERN Stack",
];
