import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="sm:px-6 md:px-20 py-14 pt-22 bg-[#0B0F17] text-white ">
      <div className="flex flex-col max-w-3xl mx-auto ml-4">
        <h1 className="text-4xl font-bold text-blue-400">Contact Us</h1>
        <p className="mt-3 text-gray-300">
          Have questions, suggestions, or want to collaborate?
          Feel free to reach out anytime!
        </p>

        <div className="mt-10 ml-2 sm:ml-8 space-y-6 text-lg">

          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all w-fit"
          >
            <FaEnvelope size={24} />
            MrAliBilal@outlook.com
          </a>

          <a
            href="https://www.linkedin.com/in/mralibilal/"
            target="_blank"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all w-fit"
          >
            <FaGithub size={24} />
            github.com/MrAliBilal
          </a>

          <a
            href="https://www.linkedin.com/in/mralibilal/"
            target="_blank"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all w-fit"
          >
            <FaLinkedin size={24} />
            linkedin.com/in/MrAliBilal
          </a>
        </div>
      </div>

      <section className="flex items-center justify-center px-2 sm:px-4 pt-10">
        <div className="w-full max-w-3xl bg-zinc-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Contact Us
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-white mb-2">Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Message:</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </section>
  );
};

export default Contact;
