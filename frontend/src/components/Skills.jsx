import React, { useEffect, useState } from "react";
import axios from "axios";

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-center text-gray-50 mb-10">{title}</h2>
);

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/skills")
      .then((response) => setSkills(response.data))
      .catch((error) => console.error("Gagal mengambil data skills:", error));
  }, []);

  return (
    <section id="skill" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Keahlian & Teknologi" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="text-gray p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <p className="text-white mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
