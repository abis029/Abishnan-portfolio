import React from "react";

/*
  Fixed version:
  - Removed lucide-react import because the build environment failed to fetch icon files from CDN.
  - Removed framer-motion dependency for the same reason: this page now works with plain React + Tailwind CSS.
  - Added small inline SVG icons so no external icon package is needed.
  - Added lightweight runtime checks for project data in development.
*/

const profileImage = "/images/abishnan-profile.jpeg";

function Icon({ name, className = "", size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const icons = {
    mail: (
      <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
    ),
    phone: (
      <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" /></svg>
    ),
    location: (
      <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    github: (
      <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.6 10.6 0 0 0-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.75 1.2-.85 2-.1.8-.1 1.6-.1 1.5v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></svg>
    ),
    linkedin: (
      <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
    ),
    download: (
      <svg {...common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" /></svg>
    ),
    heart: (
      <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /><path d="M3 12h4l2-3 3 6 2-3h7" /></svg>
    ),
    code: (
      <svg {...common}><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
    ),
    database: (
      <svg {...common}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg>
    ),
    phoneApp: (
      <svg {...common}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
    ),
    brain: (
      <svg {...common}><path d="M9.5 2A3.5 3.5 0 0 0 6 5.5v.3A3.5 3.5 0 0 0 4 9v.5A3.5 3.5 0 0 0 6.5 13v1A3.5 3.5 0 0 0 10 17.5V22" /><path d="M14.5 2A3.5 3.5 0 0 1 18 5.5v.3A3.5 3.5 0 0 1 20 9v.5A3.5 3.5 0 0 1 17.5 13v1A3.5 3.5 0 0 1 14 17.5V22" /><path d="M10 7H8" /><path d="M16 7h-2" /><path d="M10 13H8" /><path d="M16 13h-2" /></svg>
    ),
    award: (
      <svg {...common}><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></svg>
    ),
    briefcase: (
      <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /><path d="M12 12v2" /></svg>
    ),
    target: (
      <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
    ),
  };

  return icons[name] || icons.code;
}

const projects = [
  {
    title: "Acute Coronary Syndrome Detection & Classification System",
    type: "Final Year Research Project",
    description:
      "An AI-powered clinical decision support system designed to detect Acute Coronary Syndrome (ACS) in emergency department patients and classify ACS into Unstable Angina, NSTEMI, and STEMI using multimodal clinical data.",
    highlights: [
      "Binary ACS Detection",
      "3-Class ACS Type Classification",
      "ECG Signal Feature Extraction",
      "MIMIC-IV-ED Dataset Integration",
      "SHAP Explainability Dashboard",
      "FastAPI Clinical Backend",
      "React Clinical Dashboard",
      "Patient-level Leakage-Free Validation",
    ],
    tech: ["Python", "PyTorch", "XGBoost", "ClinicalBERT", "FastAPI", "React", "SHAP", "Pandas", "NumPy", "MIMIC-IV", "ECG Processing"],
    metrics: {
      AUROC: "0.957",
      Recall: "96.8%",
      NPV: "99.93%",
      "Balanced Accuracy": "77%",
      "STEMI Miss Rate": "0%",
    },
    dataset: "MIMIC-IV-ED v2.2",
    samples: "270,564+ patients",
    icon: "heart",
    featured: true,
  },
  {
    title: "Online Book Store",
    type: "Full Stack Development",
    description:
      "A web-based book store and event management system with modern frontend and backend functionality.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    icon: "code",
  },
  {
    title: "Online Music Store",
    type: "Payment System",
    description:
      "An online music store system with payment-related functionality and database support.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
    icon: "database",
  },
  {
    title: "Mobile Application Development",
    type: "Android App Prototype",
    description:
      "BOOK MY BUS interface design and time planning / management mobile application prototype.",
    tech: ["Android Studio", "UI Design", "Prototype", "Mobile App"],
    icon: "phoneApp",
  },
  {
    title: "Online Green Market System",
    type: "ITP Full Stack Project",
    description:
      "A delivery management system for an online green market platform, developed with a full-stack architecture.",
    tech: ["React.js", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "GitHub"],
    icon: "code",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vite",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "MongoDB",
  "MySQL",
  "Java",
  "Android Studio",
  "FastAPI",
  "PyTorch",
  "Machine Learning",
  "AI",
  "Deep Learning",
  "Federated Learning",
  "ClinicalBERT",
  "XGBoost",
  "SHAP",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "ECG Processing",
  "MIMIC-IV",
  "Clinical AI",
  "Data Preprocessing",
  "GitHub",
  "Git",
  "VS Code",
  "Postman",
  "Figma",
  "Microsoft Power Apps",
  "Canvas Apps",
  "Mobile-Optimized Apps",
  "Low-Code Development",
  "Project Management",
  "Leadership",
  "Teamwork",
  "Communication",
];

const stats = [
  { label: "AUROC", value: "0.957" },
  { label: "ACS Recall", value: "96.8%" },
  { label: "NPV", value: "99.93%" },
  { label: "STEMI Miss Rate", value: "0%" },
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "DGateway Innovations (Pvt) Ltd",
    period: "From March 2025",
    description:
      "Selected for a Software Engineer Intern role after the company application and interview process, strengthening my professional pathway in software engineering.",
    points: ["Software engineering internship", "Industry exposure", "Professional development"],
  },
  {
    role: "Final Year Research Developer",
    company: "ACS Detection & Classification System",
    period: "Academic Research Project",
    description:
      "Building an AI-assisted clinical decision support system that combines structured patient data, chief complaint text, ECG features, explainability, and a modern web interface.",
    points: ["Model development", "Clinical AI workflow", "Research documentation"],
  },
];

const focusAreas = [
  {
    title: "Healthcare AI",
    description: "Machine learning models, clinical text understanding, ECG feature support, explainable predictions, and safer decision-support workflows.",
    icon: "heart",
  },
  {
    title: "Full-Stack Systems",
    description: "Responsive React interfaces, REST APIs, backend services, database design, authentication flows, and deployment-ready project structure.",
    icon: "code",
  },
  {
    title: "Data & Databases",
    description: "MongoDB and MySQL backed applications, data preprocessing, feature handling, structured records, and result dashboards.",
    icon: "database",
  },
  {
    title: "Team Delivery",
    description: "Project planning, communication, leadership, documentation, GitHub collaboration, and presenting technical work clearly.",
    icon: "target",
  },
];

const workflow = [
  "Understand user and domain requirements before designing the solution.",
  "Build clean frontend screens with reusable React components.",
  "Connect backend APIs, databases, and model outputs into usable workflows.",
  "Test, document, and present projects with clear results and next steps.",
];

const skillIconMap = {
  HTML5: "code",
  CSS3: "code",
  "Tailwind CSS": "code",
  Python: "code",
  JavaScript: "code",
  TypeScript: "code",
  "React.js": "code",
  Vite: "code",
  "Node.js": "code",
  "Express.js": "code",
  "REST APIs": "target",
  "JWT Authentication": "award",
  MongoDB: "database",
  MySQL: "database",
  Java: "code",
  "Android Studio": "phoneApp",
  FastAPI: "target",
  PyTorch: "brain",
  "Machine Learning": "brain",
  AI: "brain",
  "Deep Learning": "brain",
  "Federated Learning": "brain",
  ClinicalBERT: "brain",
  XGBoost: "brain",
  SHAP: "target",
  Pandas: "database",
  NumPy: "database",
  "Scikit-learn": "brain",
  "ECG Processing": "heart",
  "MIMIC-IV": "database",
  "Clinical AI": "heart",
  "Data Preprocessing": "database",
  GitHub: "github",
  Git: "github",
  "VS Code": "code",
  Postman: "target",
  Figma: "code",
  "Microsoft Power Apps": "phoneApp",
  "Canvas Apps": "phoneApp",
  "Mobile-Optimized Apps": "phoneApp",
  "Low-Code Development": "code",
  "Project Management": "target",
  Leadership: "award",
  Teamwork: "target",
  Communication: "mail",
};

const techLogoShowcase = [
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Power Apps", label: "PA", color: "text-fuchsia-300" },
];

function runPortfolioDataTests() {
  if (typeof console === "undefined") return;

  const tests = [
    { name: "projects should not be empty", pass: projects.length > 0 },
    { name: "main ACS project should exist", pass: projects.some((p) => p.featured && p.title.includes("Acute Coronary Syndrome")) },
    { name: "each project should have technologies", pass: projects.every((p) => Array.isArray(p.tech) && p.tech.length > 0) },
    { name: "skills should include React.js", pass: skills.includes("React.js") },
    { name: "stats should include NPV", pass: stats.some((s) => s.label === "NPV") },
    { name: "experience should include DGateway", pass: experience.some((item) => item.company.includes("DGateway")) },
    { name: "focus areas should cover full stack", pass: focusAreas.some((item) => item.title.includes("Full-Stack")) },
  ];

  tests.forEach((test) => {
    if (!test.pass) console.error(`Portfolio test failed: ${test.name}`);
  });
}

if (typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production") {
  runPortfolioDataTests();
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className={`rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${
        project.featured
          ? "border-cyan-400/40 bg-cyan-400/10 md:col-span-2"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
          <Icon name={project.icon} size={26} />
        </div>
        {project.featured && (
          <span className="rounded-full border border-cyan-300/40 px-4 py-1 text-xs font-semibold text-cyan-200">
            Main Project
          </span>
        )}
      </div>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">{project.type}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
      {project.featured && project.metrics && (
        <div className="mt-6 grid gap-3 sm:grid-cols-5">
          {Object.entries(project.metrics).map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-center">
              <p className="text-xl font-black text-cyan-200">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      )}
      {project.featured && (
        <div className="mt-6 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Dataset</p>
            <p className="mt-2 font-bold text-white">{project.dataset}</p>
            <p className="mt-1 text-sm text-slate-300">{project.samples}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Key Highlights</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.highlights.slice(0, 6).map((item) => (
                <span key={item} className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-xl">
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
          <Icon name="briefcase" size={25} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">{item.period}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
          <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
        </div>
      </div>
      <p className="leading-7 text-slate-300">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.points.map((point) => (
          <span key={point} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
            {point}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-100">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-black tracking-tight text-white">
            Abishnan<span className="text-cyan-300">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#experience" className="hover:text-cyan-300">Experience</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="animate-[fadeIn_0.7s_ease-out]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Portfolio</p>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Abishnan <br /> Jeyakanthan
            </h1>
            <p className="mt-5 text-2xl font-semibold text-cyan-200">Full Stack Developer</p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Final-year IT undergraduate and Software Engineer building full-stack web applications, AI-powered systems, and production-deployed solutions. My current focus is the ACS detection and classification system, where I combine clinical data, machine learning, explainable AI, and web development to support early recognition of Acute Coronary Syndrome.
            </p>
            <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {["AI", "React", "Node.js", "ML"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-bold text-cyan-200">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300">
                View Projects
              </a>
              <a href="#contact" className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white hover:border-cyan-300 hover:text-cyan-300">
                Contact Me
              </a>
              <a href="/AbishnanCV.pdf" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-bold text-white hover:border-cyan-300 hover:text-cyan-300">
                <Icon name="download" size={18} /> Download CV
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-cyan-400/20 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <img
                src={profileImage}
                alt="Abishnan Jeyakanthan"
                className="h-[520px] w-full rounded-[2rem] object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">About Me</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Passionate about software, AI, and healthcare technology.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I am an undergraduate student at the Sri Lanka Institute of Information Technology with a strong interest in software engineering, AI, machine learning, and healthcare technology. Through academic projects, research work, and team-based development, I have built experience in designing interfaces, developing backend services, working with databases, and turning technical ideas into complete applications.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                My strongest current focus is the ACS detection and classification system, where I combine clinical data, machine learning, explainable AI, and web development to support early recognition of Acute Coronary Syndrome.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-3xl bg-cyan-400/10 p-6">
                <Icon name="brain" className="mb-3 text-cyan-300" />
                <h3 className="text-xl font-bold text-white">AI Healthcare Focus</h3>
                <p className="mt-2 text-slate-300">Clinical AI, ACS detection, explainability, and decision support.</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-6">
                <Icon name="code" className="mb-3 text-cyan-300" />
                <h3 className="text-xl font-bold text-white">Full Stack Development</h3>
                <p className="mt-2 text-slate-300">React, Node.js, Express.js, MongoDB, FastAPI, and dashboard systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Professional Growth" title="Experience & Direction" description="A clearer view of my internship path, research work, and the kind of software problems I am preparing to solve." />
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={`${item.role}-${item.company}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="My Work" title="Projects" description="A collection of my AI, full-stack, mobile, and academic development projects." />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Capabilities" title="Skills & Technologies" />
          <div className="logo-stage relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl">
            <div className="tech-grid absolute inset-0 opacity-40" />
            <div className="logo-sweep absolute inset-0" />
            <div className="relative grid grid-cols-3 gap-4 py-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {techLogoShowcase.map((tech, index) => (
                <div
                  key={tech.name}
                  className="logo-tile group flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-black/30 shadow-xl transition duration-500 hover:-translate-y-3 hover:rotate-3 hover:border-cyan-300/80 hover:bg-cyan-300/10"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  title={tech.name}
                >
                  <div className="logo-orbit" />
                  {tech.logo ? (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`relative z-10 h-12 w-12 object-contain transition duration-500 group-hover:scale-125 md:h-14 md:w-14 ${tech.invert ? "invert" : ""}`}
                    />
                  ) : (
                    <span className={`relative z-10 text-3xl font-black transition duration-500 group-hover:scale-125 ${tech.color || "text-cyan-300"}`}>{tech.label}</span>
                  )}
                  <span className="sr-only">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Strengths" title="What I Bring" description="The areas where my academic work, project experience, and career goals connect." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl">
                <Icon name={area.icon} className="mb-4 text-cyan-300" size={32} />
                <h3 className="text-xl font-bold text-white">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Process</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">How I approach projects</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I like building projects from the problem outward: understand the user need, shape the data and architecture, build the interface, then refine the result until it is clear enough to present.
            </p>
          </div>
          <div className="space-y-4">
            {workflow.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="self-center leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <Icon name="award" className="mb-4 text-cyan-300" size={34} />
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <p><strong className="text-white">BSc (Hons) in Information Technology</strong><br />Sri Lanka Institute of Information Technology, 2022 - Present</p>
              <p><strong className="text-white">Advanced Level - Bio Stream</strong><br />Vavuniya Tamil Madhya Maha Vidyalayam</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <Icon name="award" className="mb-4 text-cyan-300" size={34} />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
            <div className="mt-6 space-y-5 text-slate-300">
              <p>Artificial Intelligence Fundamentals - Great Learning Academy</p>
              <p>UI/UX for Beginners - Great Learning Academy</p>
              <p>Build a Mobile-Optimized App from Power Apps</p>
              <p>Create a Canvas App in Power Apps</p>
              <p>Power Apps Canvas Apps</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/20 bg-cyan-400/10 p-8 text-center shadow-2xl md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h2 className="text-4xl font-black text-white">Let’s build something great.</h2>
          <p className="mt-4 text-slate-300">Available for software development, AI projects, academic collaboration, and portfolio opportunities.</p>
          <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
            <a href="tel:+94756171322" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 hover:bg-white/10"><Icon name="phone" className="text-cyan-300" /> +94 75 6171 322</a>
            <a href="mailto:abishnanj@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 hover:bg-white/10"><Icon name="mail" className="text-cyan-300" /> abishnanj@gmail.com</a>
            <a href="https://github.com/abis029" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 hover:bg-white/10"><Icon name="github" className="text-cyan-300" /> GitHub</a>
            <a href="https://www.linkedin.com/in/abishnan-jeyakanthan-59507b2b2/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 hover:bg-white/10"><Icon name="linkedin" className="text-cyan-300" /> LinkedIn</a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 md:col-span-2"><Icon name="location" className="text-cyan-300" /> Malabe, Colombo, Sri Lanka</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Abishnan Jeyakanthan. All Rights Reserved.
      </footer>
      <style>{`
        @keyframes chipPop {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes chipGlow {
          0%, 100% {
            box-shadow: 0 10px 28px rgba(8, 145, 178, 0.08);
          }
          50% {
            box-shadow: 0 16px 38px rgba(34, 211, 238, 0.18);
          }
        }

        @keyframes gridDrift {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 72px 48px, -72px -48px;
          }
        }

        @keyframes sparkMove {
          0% {
            transform: translateX(-120%) skewX(-18deg);
            opacity: 0;
          }
          35% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(320%) skewX(-18deg);
            opacity: 0;
          }
        }

        @keyframes tileFloat {
          0%, 100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
          50% {
            transform: translateY(-10px) rotateX(7deg);
          }
        }

        @keyframes logoStageGlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes logoSweep {
          0% {
            transform: translateX(-70%) rotate(10deg);
            opacity: 0;
          }
          35% {
            opacity: 0.35;
          }
          100% {
            transform: translateX(140%) rotate(10deg);
            opacity: 0;
          }
        }

        @keyframes orbitSpin {
          0% {
            transform: rotate(0deg) scale(0.92);
            opacity: 0.25;
          }
          50% {
            opacity: 0.75;
          }
          100% {
            transform: rotate(360deg) scale(0.92);
            opacity: 0.25;
          }
        }

        .tech-grid {
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          animation: gridDrift 18s linear infinite;
        }

        .tech-chip {
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: chipPop 0.65s ease-out forwards, chipGlow 4s ease-in-out infinite;
        }

        .tech-spark {
          position: absolute;
          inset: 0;
          width: 36%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.22), transparent);
          animation: sparkMove 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .logo-stage {
          background:
            radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.16), transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.12), transparent 30%),
            linear-gradient(115deg, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.92), rgba(8, 47, 73, 0.42));
          background-size: 220% 220%;
          animation: logoStageGlow 10s ease-in-out infinite;
        }

        .logo-sweep {
          width: 42%;
          background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.16), transparent);
          filter: blur(2px);
          animation: logoSweep 6.5s ease-in-out infinite;
          pointer-events: none;
        }

        .logo-tile {
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: chipPop 0.7s ease-out forwards, tileFloat 5.5s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .logo-tile:hover {
          box-shadow: 0 20px 45px rgba(34, 211, 238, 0.22);
        }

        .logo-orbit {
          position: absolute;
          inset: 12%;
          border-radius: 999px;
          border: 1px solid rgba(34, 211, 238, 0.28);
          border-left-color: transparent;
          border-bottom-color: transparent;
          animation: orbitSpin 5s linear infinite;
        }

        .logo-tile::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 10%, rgba(34, 211, 238, 0.18), transparent 45%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .logo-tile:hover::before {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
