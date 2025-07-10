import React from 'react';

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
);

const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-800 text-white' >
   <footer id="kontak" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle title="Hubungi Saya" />
        <p className="text-xl text-gray-300 mb-8">
          Jangan ragu untuk terhubung atau bertanya.
        </p>

        <a
          href="mailto:emailanda@example.com"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
        >
          Kirim Email
        </a>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Nama Mahasiswa. Dibuat dengan ❤️
        </p>
      </div>
    </footer>
    </div>
 
  );
};

export default Contact;
