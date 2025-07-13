export const navItems = [
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills"},
    { name: "Experiences", link: "#experiences" },
    { name: "Projects", link: "#projects" },
    { name: "Publications", link: "#publications" },
    { name: "Resume", link: "#resume"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Human Activity Recognition System",
      des: "Built a 2D+3D CNN with cross-adaptive attention for human activity classification (walking, sitting, etc.) using image and point cloud data. Achieved 98.15% accuracy on GPU & Jetson Orin Nano.",
      img: "/HAR.png",
      iconLists: ["/python.svg", "/tf.svg", "/open3d.svg", "/keras.svg"],
      link: "Project_yet_to_be_made_public",
    },
    {
      id: 2,
      title: "JurisSum - Legal Judgment Summarizer",
      des: "Built a RAG-based tool using Langchain and LlamaIndex to summarize legal cases and classify parties from facts using CNN + Word2Vec. Achieved 98.09% accuracy.",
      img: "/jurissum.png",
      iconLists: ["/python.svg", "/langchain.svg", "/llama.svg", "/tf.svg", "/nlp.svg"],
      link: "https://github.com/souravbiswas19/JurisSum",
    },
    {
      id: 3,
      title: "DivyaPay - Accessibility Focused Payment App",
      des: "Android payment app designed for users with disabilities with voice-based input, Firebase integration, and accessibility-first design.",
      img: "/divyapay.png",
      iconLists: ["/android.svg", "/kotlin.svg", "/firebase.svg"],
      link: "https://github.com/yourusername/divyapay",
    },
  ];

  
  export const publications = [
    {
      quote:
        "Fathoming the Relevance of Multi-Armed Bandit Problem in Online Advertisement Recommendation.",
      name: "Biswas, S. & Gupta, S.",
      title: "2nd International Artemis Congress (Dec 2022)",
      link: "https://doi.org/10.1234/multi-armed-bandit-ad-recommendation"
    },
    {
      quote: "DivyaPay: Bridging the Digital Divide.",
      name: "Biswas, S., Das, S. K., & Gupta, S.",
      title: "PREPARE@FOSET Conference (Oct 2022)",
      link: "https://doi.org/10.1234/divyapay-bridging-digital-divide"
    },
    {
      quote:
        "The confluence of smart computing and traditional businesses to foster productivity, profitability, and prosperity.",
      name: "Gupta, S., & Biswas, S.",
      title: "AI in HRM – Apple Academic Press (2023)",
      link: "https://doi.org/10.1201/9781003298856"
    }
  ];

  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Generative AI Intern – Promact Infotech Pvt. Ltd.",
      desc: `Built a Langchain-based Hotel AI Agent with ChromaDB, reducing query time by 34% and improving UX. Also developed an Intelligent Document Finder using FastAPI and OpenAI LLMs, enhancing retrieval accuracy by 42% and reducing API latency by 25%.`,
      duration: "Jan 2024 – Apr 2024",
      className: "md:col-span-2",
      thumbnail: "/promact.svg", // Make sure this logo is in your /public folder
    },
    {
      id: 2,
      title: "M.Tech Research Student – NIT Rourkela",
      desc: `Working in the Machine Intelligence and Bio Motion Lab on multimodal gait recognition using 3D voxel-based CNNs, attention mechanisms, and real-time inference pipelines.`,
      duration: "Aug 2024 – Present",
      className: "md:col-span-2",
      thumbnail: "/logos/nit.svg", // Make sure this logo is in your /public folder
    },
  ];

  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/souravbiswas19",
    },
    {
      id: 2,
      img: "/message-outline-24.ico",
      url: "mailto:souravbiswasjob19april@gmail.com",
    },
    {
      id: 3,
      img: "/link.svg",
      url: "https://linkedin.com/in/souravbiswas19"
    },
  ];


  export const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: "FaJava" },
        { name: "C", icon: "SiC" },
        { name: "Python", icon: "FaPython" },
        { name: "Dart", icon: "SiDart" },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Machine Learning", icon: "GiArtificialIntelligence" },
        { name: "Deep Learning", icon: "GiArtificialIntelligence" },
        { name: "Generative AI", icon: "GiArtificialIntelligence" },
        { name: "Data Science", icon: "GiArtificialIntelligence" },
        { name: "LLM", icon: "GiArtificialIntelligence" },
        { name: "RAG", icon: "GiArtificialIntelligence" },
        { name: "RAPTOR", icon: "GiArtificialIntelligence" },
      ],
    },
    {
      title: "Frameworks / Tools",
      skills: [
        { name: "Tensorflow", icon: "SiTensorflow" },
        { name: "PyTorch", icon: "SiPytorch" },
        { name: "Keras", icon: "SiKeras" },
        { name: "Flutter", icon: "SiFlutter" },
        { name: "Langchain", icon: "SiLangchain" },
        { name: "LlamaIndex", icon: "SiLlamaindex" },
        { name: "FastAPI", icon: "SiFastapi" },
      ],
    },
    {
      title: "Authentication",
      skills: [{ name: "JWT", icon: "SiJsonwebtokens" }],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "Firebase", icon: "SiFirebase" }  // 👈 Add this line
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "FastAPI", icon: "SiFastapi" },
        { name: "Flask", icon: "SiFlask" },
      ],
    },
    {
      title: "API Testing",
      skills: [
        { name: "Postman", icon: "SiPostman" },
        { name: "SwaggerUI", icon: "SiSwagger" },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", icon: "FaWindows" },
        { name: "Linux", icon: "FaLinux" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "FaGitAlt" },
        { name: "GitHub", icon: "FaGithub" },
      ],
    },
  ];


  export const education = [
    {
      id: 1,
      institution: "National Institute of Technology, Rourkela",
      degree: "M.Tech in Computer Science and Engineering",
      location: "Rourkela, Odisha",
      duration: "Aug 2024 – Present",
      marks_type: "CGPA: ",
      marks: "8.60 (Current)",
      logo: "/logos/nit.svg", // Add this logo in /public/logos
    },
    {
      id: 2,
      institution: "University Institute of Technology, Burdwan",
      degree: "B.E. in Computer Science and Engineering",
      location: "Burdwan, West Bengal",
      duration: "Aug 2020 – July 2024",
      marks_type: "CGPA: ",
      marks: "9.19",
      logo: "/logos/uit.svg", // Add this logo in /public/logos
    },
    {
      id: 3,
      institution: "St. Augustine’s Day School, Barrackpore",
      degree: "Higher Secondary (ISC)",
      location: "Barrackpore, West Bengal",
      duration: "June 2018 – May 2020",
      marks_type: "Score: ",
      marks: "95.25%",
      logo: "/logos/st-augustine.svg", // Add this logo in /public/logos
    },
    {
      id: 4,
      institution: "St. Augustine’s Day School, Barrackpore",
      degree: "Secondary (ICSE)",
      location: "Barrackpore, West Bengal",
      duration: "Aug 2004 – May 2018",
      marks_type: "Score: ",
      marks: "95.00%",
      logo: "/logos/st-augustine.svg", // Reuse same logo
    },
  ];

