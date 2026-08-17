import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // =========================
  // ADMIN
  // =========================

  const passwordHash = await bcrypt.hash("Admin123!", 12);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@portfolio.local",
    },
    update: {},
    create: {
      name: "Administrator",
      email: "admin@portfolio.local",
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Admin berhasil dibuat:", admin.email);

  // =========================
  // PROJECTS
  // =========================

  const projects = [
    {
      id: "project-one",
      title: "Content Management System FOR MARTABAK LUMER TELUR",
      slug: "martabak-lumer-telur",
      shortDescription:
        "Web-based CMS for menu management, inventory tracking, and customer order processing.",
      description:
        "The Martabak Lumer Telur CMS is a web-based content management system that simplifies menu management, inventory tracking, and customer order processing.",
      category: "ACADEMIC" as const,
      technologies: ["PHP", "LARAVEL", "PYTHON", "Tailwind CSS"],
      images: ["/images/martabak_foto/profil-martabak.jpg"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/achen023/martabak-lumer-telur.git",
      featured: true,
      published: true,
    },

    {
      id: "project-two",
      title:
        "Ecopower Monitoring Surya Panel Based on IoT For Vehicle Transportation",
      slug: "ecopower-monitoring-iot",
      shortDescription:
        "IoT-based solar power monitoring system for vehicle transportation.",
      description:
        "EcoPower Monitoring is an IoT-based solar power monitoring system for vehicle transportation with real-time monitoring.",
      category: "ACADEMIC" as const,
      technologies: [
        "Python",
        "C++",
        "IoT",
        "Grafana",
        "SQLite",
        "Docker",
        "Tailwind CSS",
        "ESP32",
        "PHP",
        "Laravel",
      ],
      images: ["/images/plts_foto/profil-plts.jpg"],
      demoUrl: "https://example.com",
      githubUrl:
        "https://github.com/AldiSiagian53/Monitoring-PLTS-Based-on-IOT-For-Vehicle-Trasnportation.git",
      featured: true,
      published: true,
    },

    {
      id: "project-three",
      title:
        "Development of an Integrated Monitoring System at the Testing Bay",
      slug: "testing-bay-monitoring",
      shortDescription:
        "Integrated industrial monitoring system using PLC, sensors, and computer vision.",
      description:
        "An integrated industrial monitoring web application developed for Testing Bay operations through PLC, sensor, and computer vision integration.",
      category: "ACADEMIC" as const,
      technologies: [
        "PHP",
        "Python",
        "Laravel",
        "Computer Vision",
        "PLC",
        "Modbus-TCP",
        "SQLServer",
        "Three.js",
      ],
      images: ["/images/spm_foto/spm-profil.jpg"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Maksum885/Testing_bay.git",
      featured: true,
      published: true,
    },

    {
      id: "project-empat",
      title: "Realtime Chat App",
      slug: "realtime-chat-app",
      shortDescription:
        "Real-time chat application with authentication and private rooms.",
      description:
        "Aplikasi chat real-time dengan autentikasi, room privat, dan indikator status online.",
      category: "PRIVATE" as const,
      technologies: ["React", "Socket.io", "Express"],
      images: [],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/username/project-empat",
      featured: false,
      published: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: {
        id: project.id,
      },
      update: {
        title: project.title,
        slug: project.slug,
        shortDescription: project.shortDescription,
        description: project.description,
        category: project.category,
        technologies: project.technologies,
        images: project.images,
        demoUrl: project.demoUrl,
        githubUrl: project.githubUrl,
        featured: project.featured,
        published: project.published,
      },
      create: project,
    });
  }

  console.log(`${projects.length} projects berhasil dibuat.`);
}

main()
  .catch((error) => {
    console.error("Seed error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });