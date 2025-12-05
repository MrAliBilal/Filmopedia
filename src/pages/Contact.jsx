import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-6 md:px-20 py-14 pt-22 bg-[#0B0F17] text-white">
      <h1 className="text-4xl font-bold text-amber-400">Contact Us</h1>
      <p className="mt-3 text-gray-300 max-w-xl">
        Have questions, suggestions, or want to collaborate?  
        Feel free to reach out to the Filmopedia team anytime!
      </p>

      <div className="mt-10 space-y-6 text-lg">

        <a
          href="mailto:your-email@example.com"
          className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all w-fit"
        >
          <FaEnvelope size={24} />
          MrAliBilal@outlook.com
        </a>

        <a
          href="https://github.com/MrAliBilal"
          target="_blank"
          className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all w-fit"
        >
          <FaGithub size={24} />
          github.com/MrAliBilal
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin-profile/"
          target="_blank"
          className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all w-fit"
        >
          <FaLinkedin size={24} />
          linkedin.com/in/MrAliBilal
        </a>
      </div>
    </section>
  );
};

export default Contact;
