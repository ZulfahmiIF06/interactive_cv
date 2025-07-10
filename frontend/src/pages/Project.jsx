import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Gagal mengambil data projects:", err));
  }, []);

  return (
    <div className="herobody">
      <section id="proyek" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Proyek Unggulan
          </h2>
          <div
            className="grid md:grid-cols-2 gap-12"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`Gambar dari ${project.title}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-50 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-block bg-blue-100 text-red-600 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Lihat Detail &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
