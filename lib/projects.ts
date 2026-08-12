export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectTimelineStep = {
  phase: string;
  period: string;
  description: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectResult = {
  label: string;
  value: string;
};

export type ProjectInfo = {
  role: string;
  duration: string;
  team: string;
  year: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  // --- Extended fields used by the Project Detail page ---
  // All optional so existing cards / landing sections keep working untouched.
  longDescription?: string[];
  goals?: string[];
  info?: ProjectInfo;
  gallery?: string[];
  features?: ProjectFeature[];
  timeline?: ProjectTimelineStep[];
  challenges?: ProjectChallenge[];
  results?: ProjectResult[];
};

// Replace image URLs with your own thumbnails in /public/images later
export const PROJECTS: Project[] = [
  {
    id: "project-one",
    title: "Content Management System FOR MARTABAK LUMER TELUR",
    category: "Full-Stack web application",
    description:
      "The Martabak Lumer Telur CMS is a web-based content management system that simplifies menu management, inventory tracking, and customer order processing. Developed as an academic project during my second semester at university.",
    image: "/images/martabak_foto/profil-martabak.jpg",
    tech: ["PHP", "LARAVEL", "PYTHON", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/achen023/martabak-lumer-telur.git",
    longDescription: [ 
      "The Martabak Lumer Telur CMS is an administrative web application designed to simplify the management of menus, raw material inventory, and customer orders efficiently.",
      "This project was developed as an academic project during my second semester at university, with the objective of applying fundamental software engineering concepts and building practical experience in full-stack web development.",
      "The system is built using PHP with the Laravel MVC architecture, while Prisma is utilized as the ORM for efficient database management. All data is processed and displayed in real time through an intuitive and lightweight user interface, ensuring smooth performance even when handling thousands of transaction records."
    ],
    goals: [
      "To create a user-friendly CMS that allows restaurant staff to manage menus, inventory, and orders efficiently.",
      "To implement real-time data processing and display for better operational decision-making.",
      "To gain practical experience in full-stack web development using PHP, Laravel, and Prisma.",
    ],
    info: {
      role: "Full-Stack Developer",
      duration: "6 weeks",
      team: "Team project",
      year: "2024",
    },
    gallery: [
      "/images/martabak_foto/journy.jpg",
      "/images/martabak_foto/map-martabak.jpg",
      "/images/martabak_foto/like-martabak.jpg",
      "/images/martabak_foto/martabak.jpg",
    ],
    features: [
      {
        title: "product-management",
        description:
          "Complete product CRUD with variants, categories, and automatic inventory management.",
      },
      {
        title: "story journey",
        description:
          "we make story journey of this project to make it more interesting and easy to understand",
      },
      {
        title: "booking-order-management",
        description:
        "The system allows users to place orders online, and the restaurant staff can manage and track these orders efficiently through the CMS.",
      },
      {
        title: "Location finder",
        description:
          "Users can find the locations of Martabak Lumer Telur branches on the map with integrated Google Maps API.",
      },
    ],
    timeline: [
      {
        phase: "planning",
        period: "week 1",
        description:
        "Conduct research and gather requirements for the CMS, including identifying key features and functionalities needed for menu management, inventory tracking, and order processing.",
      },
      {
        phase: "Desain UI/UX",
        period: "week 2",
        description: "make a design for the user interface and user experience of the CMS, including wireframes and mockups.",
      },
      {
        phase: "Backend Development",
        period: "week 3–4",
        description:
        "build the backend of the CMS using PHP and Laravel, implementing database models, controllers, and API endpoints for product and order management.",
      },
      {
        phase: "testing & QA",
        period: "week 5",
        description: "Conduct thorough testing of the CMS, including unit tests, integration tests, and user acceptance testing to ensure all features work as intended.",
      },
      {
        phase: "launching & Documentation",
        period: "week 6",
        description: "deploy the CMS to a production environment and create comprehensive documentation for future maintenance and user guidance.",
      },
    ],
    challenges: [
      {
        challenge:
          "Query statistics and reports on large datasets causing slow response times.",
        solution:
        "Implementing database indexing and optimizing queries to improve performance, along with caching frequently accessed data to reduce load times.",
      },
      {
        challenge:
        "Maintaining a consistent user experience across different devices and screen sizes.",
        solution:
        "Using responsive design principles and thorough testing on various devices to ensure the CMS interface is user-friendly and accessible on desktops, tablets, and smartphones.",
      },
    ],
    results: [
      { label: "menu category", value: "passed" },
      { label: "online orders", value: "passed" },
      { label: "localization support", value: "passed" },
    ],
  },
  {
    id: "project-two",
    title: "Ecopower Monitoring Surya Panel Based on IoT For Vehicle Transportation",
    category: "Web Application",
    description:
      "EcoPower Monitoring is an IoT-based solar power (PLTS) monitoring system for vehicle transportation. Developed during my second semester in Informatics Engineering, the project provides real-time monitoring of solar energy generation, battery status, and power consumption through a web dashboard.",
    image: "/images/plts_foto/profil-plts.jpg",
    tech: ["Python", "C++", "IoT", "grafana", "SQLite", "docker", "tailwindcss", "esp32", "php", "laravel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/AldiSiagian53/Monitoring-PLTS-Based-on-IOT-For-Vehicle-Trasnportation.git",
    longDescription: [
      "EcoPower Monitoring is an Internet of Things (IoT)-based monitoring system designed to track the performance of a solar power (PLTS) system used for vehicle transportation. The project was developed during my second semester in the Informatics Engineering program as part of an academic project to apply IoT concepts to renewable energy monitoring.",
      "The system collects real-time data from solar panels, batteries, and electrical components using IoT devices, then displays the information on a web-based dashboard. Users can monitor energy production, battery condition, and power consumption while viewing historical data to analyze system performance.",
      "Through this project, I gained practical experience in IoT integration, sensor data collection, web application development, database management, and real-time data visualization, while learning how technology can improve the efficiency and reliability of renewable energy systems.",
    ],
    goals: [
      "real time monitoring of solar energy generation and battery status for vehicle transportation.",
      "Providing a user-friendly web dashboard for data visualization and analysis.",
      "Implementing IoT devices to collect and transmit data from the solar power system.",
    ],
    info: {
      role: "Backend & IoT Developer",
      duration: "5 weeks",
      team: "4 developer",
      year: "2025",
    },
    gallery: [
      "/images/plts_foto/plts_login.jpg",
      "/images/plts_foto/plts_dashboard.jpg",
      "/images/plts_foto/plts_report.jpg",
      "/images/plts_foto/plts_alert.jpg",
      "/images/plts_foto/plts_setting.jpg"
    ],
    features: [
      {
        title: "Monitoring Real-Time",
        description:
          "shows live data of solar energy generation, battery status, and power consumption on the dashboard.",
      },
      {
        title: "alert & Notification System",
        description: "Provides instant alerts for abnormal conditions such as low battery or system faults, ensuring timely intervention.",
      },
      {
        title: "chart & Data Visualization",
        description:
          "Displays historical data in interactive charts for easy analysis of energy trends and system performance.",
      },
      {
        title: "login & User Management",
        description:
          "Secure login system with role-based access control, allowing different levels of access for administrators and users.",
      },
    ],
    timeline: [
      {
        phase: "planning  Fitures & Requirements",
        period: "week 1",
        description: "make a list of features and requirements for the IoT monitoring system, including data collection, dashboard design, and alert mechanisms.",
      },
      {
        phase: "develop Backend",
        period: "week 2",
        description: "build erd and database schema, implement API endpoints for data collection and retrieval, and set up user authentication and authorization.",
      },
      {
        phase: "develop Frontend",
        period: "week 3",
        description: "design and implement the web dashboard interface, including real-time data display, charts, and user management features.",
      },
      {
        phase: "develop IoT Device Integration",
        period: "week 4",
        description: "Integrate IoT devices with the backend system, ensuring accurate data collection and transmission to the web dashboard.",
      },
      {
        phase: "QA & Rilis",
        period: "week 5",
        description: "Conduct thorough testing of the entire system, including backend, frontend, and IoT device integration, and deploy the application to production.",
      },
    ],
    challenges: [
      {
        challenge: "data real time sometimes delayed due to network instability.",
        solution:
          "Implementing a more stable WebSocket connection with automatic reconnection to ensure timely data delivery to the client.",
      },
      {
        challenge: "Ensuring data integrity and consistency when multiple users access the dashboard simultaneously.",
        solution:
          "Implementing proper database transactions and locking mechanisms to prevent data conflicts and ensure accurate real-time updates across all users.",
      },
    ],
    results: [
      { label: "real time monitoring data ", value: "passed" },
      { label: "charting capabilities", value: "passed" },
      { label: "user dashboard monitoring", value: "passed" },
    ],
  },
  {
    id: "project-three",
    title: "Development of an Integrated Monitoring System at the Testing Bay",
    category: "Web Application",
    description:
    "An integrated industrial monitoring web application developed for SPM Oil & Gas, a Caterpillar company, to monitor and manage Testing Bay operations in real-time through PLC, sensor, and computer vision integration.",
    image: "/images/spm_foto/spm-profil.jpg",
    tech: ["PHP", "Python", "Laravel", "Computer Vision", "PLC", "Modbus-TCP", "SQLServer", "Three.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Maksum885/Testing_bay.git",
    longDescription: [
      "The Development of an Integrated Monitoring System at the Testing Bay is an industrial web application developed to support operational monitoring at SPM Oil & Gas, a Caterpillar company. The system was designed to centralize Testing Bay monitoring and provide operators with real-time visibility into critical testing conditions and equipment status.",
      "The application integrates PLC communication via Modbus TCP, sensors, and computer vision technology to collect and display operational data through a centralized monitoring dashboard. Key features include pressure monitoring, alarm alerts, panel mode status, roof open/closed monitoring, door lock status, and human detection using computer vision.",
      "The application integrates PLC communication via Modbus TCP, sensors, and computer vision technology to collect and display operational data through a centralized monitoring dashboard. Key features include pressure monitoring, alarm alerts, panel mode status, roof open/closed monitoring, door lock status, and human detection using computer vision.",
      "The project aims to improve operational visibility, monitoring efficiency, and workplace safety by reducing reliance on manual observation and providing centralized, real-time information for Testing Bay operations.",
    ],
    goals: [
      "Centralize Testing Bay operational monitoring into a single web-based dashboard.",
      "Provide real-time visibility of PLC data, safety conditions, alarms, and camera monitoring.",
      "Improve monitoring efficiency, information visibility, and operational traceability."
    ],
    info: {
      role: "Computer Vision Developer",
      duration: "12 weeks",
      team: "two developers",
      year: "2026",
    },
    gallery: [
      "/images/spm_foto/spm-login.jpg",
      "/images/spm_foto/spm-dashboard.jpg",
      "/images/spm_foto/spm-home.jpg",
      "/images/spm_foto/spm-camera.jpg",
      "/images/spm_foto/spm-log.jpg",
      "/images/spm_foto/spm-usermanage.jpg",
      "/images/spm_foto/spm-plc.jpg",
      "/images/spm_foto/spm-room.jpg",
      "/images/spm_foto/spm-password.jpg"

    ],
    features: [
      {
        title: "REAL TIME PLC MONITORING",
        description:
        "Displays operational data acquired from PLC Holding Registers through Modbus TCP, including pressure, testing status, panel mode, roof position, and safety door status."
      },
      {
        title: "COMPUTER VISION MONITORING",
        description: "Integrates CCTV streaming with YOLO-based Computer Vision to detect human presence in the Testing Bay area.",
      },
      {
        title: "ALARM & SAFETY MONITORING",
        description:
        "Provides alerts for abnormal PLC conditions and human detection during testing operations, helping operators respond to potential safety issues."
      },
      {
        title: "EVENT LOG",
        description: "Records PLC events, alarms, and monitoring activities to support operational history and traceability.",
      },
      {
        title: "ROLE-BASED ACCESS CONTROL",
        description: "Provides separate Administrator and Operator access with room-based monitoring permissions.",
      },
      {
        title: "PLC & CAMERA CONFIGURATION",
        description: "Allows authorized users to configure PLC communication parameters and monitoring camera connections.",
      },
    ],
    timeline: [
      {
        phase: "PLAN",
        period: "week 1-2",
        description: "Requirement analysis & Testing Bay observation",
      },
      {
        phase: "DESIGN",
        period: "week 3–5",
        description: "System architecture, database, UML, UI and communication flow",
      },
      {
        phase: "DEVELOPMENT",
        period: "week 6–9",
        description: "Laravel application, PLC integration, camera monitoring and Computer Vision",
      },
      {
        phase: "TEST",
        period: "week 10",
        description: "Functional, Performance, UAT and Usability Testing",
      },
      {
        phase: "DEPLOY",
        period: "week 11",
        description: "System deployment and environment configuration",
      },
      {
        phase: "REVIEW",
        period: "week 12",
        description: "Evaluation and refinement based on user feedback",
      },
    ],
    challenges: [
      {
        challenge:
          "Integrating real-time PLC operational data into a web-based monitoring system.",
        solution:
        "Implemented Modbus TCP communication to read PLC Holding Registers and process the data for centralized dashboard monitoring."
      },
      {
        challenge: "Monitoring human presence during active testing operations.",
        solution:
          "Integrated CCTV streaming with YOLO-based Computer Vision to detect human presence and trigger monitoring alerts.",
      },
    ],
    results: [
      { label: "Real-Time Monitoring", value: "Test Passed" },
      { label: "Integrated Safety Monitoring", value: "Test Passed" },
      { label: "System Validation", value: "Test Passed" },
    ],
  },
  {
    id: "project-empat",
    title: "Realtime Chat App",
    category: "Full-Stack App",
    description:
      "Aplikasi chat real-time dengan autentikasi, room privat, dan indikator status online.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Socket.io", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-empat",
    longDescription: [
      "Realtime Chat App adalah aplikasi pesan instan yang dibangun untuk mengeksplorasi komunikasi dua arah berbasis WebSocket, lengkap dengan autentikasi pengguna dan room percakapan privat.",
      "Aplikasi ini menekankan pengalaman real-time yang responsif, termasuk indikator sedang mengetik dan status online yang diperbarui tanpa jeda terasa.",
    ],
    goals: [
      "Membangun komunikasi real-time yang stabil dengan latensi rendah.",
      "Mengimplementasikan autentikasi dan privasi room percakapan.",
      "Memberikan indikator status kehadiran pengguna secara akurat.",
    ],
    info: {
      role: "Full-Stack Developer",
      duration: "4 minggu",
      team: "Solo project",
      year: "2023",
    },
    gallery: [
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      {
        title: "Pesan Real-Time",
        description: "Pengiriman dan penerimaan pesan instan melalui koneksi Socket.io.",
      },
      {
        title: "Room Privat",
        description: "Percakapan satu-ke-satu maupun grup dengan akses terbatas.",
      },
      {
        title: "Status Online",
        description:
          "Indikator kehadiran pengguna dan status sedang mengetik secara langsung.",
      },
      {
        title: "Autentikasi Aman",
        description: "Login dan sesi pengguna dilindungi dengan token terenkripsi.",
      },
    ],
    timeline: [
      {
        phase: "Riset Arsitektur",
        period: "Minggu 1",
        description: "Menentukan pendekatan WebSocket dan struktur room percakapan.",
      },
      {
        phase: "Backend & Autentikasi",
        period: "Minggu 2",
        description: "Membangun API Express dan sistem autentikasi pengguna.",
      },
      {
        phase: "Fitur Real-Time",
        period: "Minggu 3",
        description:
          "Implementasi pengiriman pesan, status online, dan indikator mengetik.",
      },
      {
        phase: "Pengujian & Rilis",
        period: "Minggu 4",
        description: "Pengujian beban koneksi bersamaan dan deploy.",
      },
    ],
    challenges: [
      {
        challenge:
          "Koneksi terputus saat pengguna berpindah jaringan menyebabkan pesan hilang.",
        solution:
          "Menambahkan mekanisme reconnect otomatis dan antrian pesan sementara di sisi klien.",
      },
      {
        challenge: "Status online tidak akurat saat banyak tab dibuka bersamaan.",
        solution:
          "Melacak sesi per koneksi socket, bukan per pengguna, lalu menggabungkan statusnya di server.",
      },
    ],
    results: [
      { label: "Latensi Rata-Rata Pesan", value: "<150ms" },
      { label: "Koneksi Bersamaan Teruji", value: "500+" },
      { label: "Uptime Selama Demo", value: "99.9%" },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getRelatedProjects(id: string, limit = 3): Project[] {
  return PROJECTS.filter((project) => project.id !== id).slice(0, limit);
}
