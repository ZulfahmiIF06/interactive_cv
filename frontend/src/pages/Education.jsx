import React, { useEffect, useState } from "react";
import axios from "axios";

const Education = () => {
  const [educationHistory, setEducationHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/education")
      .then((response) => setEducationHistory(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="education" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-50 mb-10 text-center">
          Riwayat Pendidikan
        </h2>
        <div className="space-y-4">
          {educationHistory.map((edu, index) => (
            <div
              key={index}
              className="p-4 text-gray-50 bg-gradient-to-b from-red-700 to-grey rounded-lg shadow"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
              <p>{edu.major}</p>
              <p className="text-gray-50">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
