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
      title: "Built a Langchain-based Hotel AI Agent with ChromaDB",
      description: "Improved UX & reduced query time by 34%",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Achieved 98.15% Accuracy on HAR using 2D+3D CNN",
      description: "Human Activity Recognition on GPU and Jetson",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/b2.png", // Replace with suitable icon if needed
      spareImg: "",
    },
    {
      id: 3,
      title: "Summarized Legal Judgments using RAG Pipeline",
      description: "JurisSum built with LlamaIndex + CNN",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "/juri.png", // Replace with relevant image
      spareImg: "",
    },
    {
      id: 4,
      title: "DivyaPay – Built a payment app for differently-abled",
      description: "Voice-enabled Android app using Kotlin + Firebase",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/divya-pay.png",
      spareImg: "",
    },
    {
      id: 5,
      title: "Presented research on Multi-Armed Bandits",
      description: "Published at Artemis Congress 2022",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/paper.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Let’s build something impactful together",
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
      des: "Built a 2D+3D CNN with cross-adaptive attention for human activity classification (walking, sitting, etc.) using 2D images and 3D point clouds. Achieved 98.15% accuracy on GPU and Jetson Orin Nano.",
      img: "/HAR.png",
      iconLists: ["/python.svg", "/tf.svg", "/open3d.svg", "/keras.svg"],
      link: "Project_yet_to_be_made_public",
    },
    {
      id: 2,
      title: "JurisSum - Legal Judgment Summarizer",
      des: "Built a RAG-based tool using Langchain and LlamaIndex to summarise legal judgments and classify involved parties using 1D-CNN with Word2Vec/GloVe embeddings. Achieved 98.09% accuracy.",
      img: "/jurissum.png",
      iconLists: ["/python.svg", "/langchain.svg", "/llama.svg", "/tf.svg", "/nlp.svg"],
      link: "https://github.com/souravbiswas19/JurisSum",
    },
    {
      id: 3,
      title: "DivyaPay – Accessibility Focused Payment App",
      des: "Android payment app tailored for people with disabilities, featuring customised UI/UX, voice-based input, and Firebase backend. Finalist at FOSET 2022.",
      img: "/divyapay.png",
      iconLists: ["/android.svg", "/kotlin.svg", "/firebase.svg"],
      link: "https://github.com/souravbiswas19/divyapay",
    },
    {
      id: 4,
      title: "Langchain Hotel Management AI Agent",
      des: "Built a smart hotel agent system using Langchain Tools, FastAPI, and ChromaDB for room booking, price listing, and guest support. Integrated GPT-3.5-Turbo for conversational queries with JWT-based auth.",
      img: "/b1.png",
      iconLists: ["/langchain.svg", "/chroma.webp", "/fastapi.png", "/jwt.webp", "/postgresql.png"],
      link: "Project_yet_to_be_made_public",
    },
    {
      id: 5,
      title: "Intelligent Document Finder",
      des: "Integrated Google Drive/OneDrive document upload with multithreaded indexing and retrieval using FastAPI, LlamaIndex, and Gemini Pro. Secured access via JWT.",
      img: "/idf.png",
      iconLists: ["/python.svg", "/fastapi.png", "/llama.svg", "/chroma.webp", "/gemini.jpg", "/jwt.webp"],
      link: "Project_yet_to_be_made_public",
    },
    {
      id: 6,
      title: "RAG-based Information Retriever",
      des: "Engineered a document upload and QA system using Gemini LLM, Langchain, and ChromaDB for fast, accurate information retrieval.",
      img: "/rag-retriever.png",
      iconLists: ["/gemini.jpg", "/langchain.svg", "/chroma.webp"],
      link: "Project_yet_to_be_made_public",
    },
    {
      id: 7,
      title: "Expense Tracker App using Flutter & Firebase",
      des: "Cross-platform mobile app to track income and expenses with Firebase Auth, Firestore, pie chart summaries, and scheduled daily reminders.",
      img: "/expense-tracker.png",
      iconLists: ["/flutter.png", "/firebase.svg", "/dart.png", "/android.svg"],
      link: "https://github.com/souravbiswas19/expense-tracker",
    },
    {
      id: 8,
      title: "SAHyatra – Safety & Travel App",
      des: "Developed a travel recommender and grievance monitoring mobile app with real-time safety tracking. Finalist at CSI-InApp 2022.",
      img: "/sahyatra.png",
      iconLists: ["/android.svg", "/firebase.svg"],
      link: "https://github.com/souravbiswas19/sahyatra",
    }
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

