import React from "react";
import AboutMeImg from '../../assets/AboutMe.png'

const Landing: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      <div className="relative max-w-4xl h-75">
        <img
          src={AboutMeImg}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold bg-black/40 px-6 py-2 rounded-xl">
            About Me
          </h1>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold my-4">
        Le Nam Pham
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        Final-year Software Engineering student at UTS with a strong passion
        for building practical and efficient systems. I enjoy transforming
        complex problems into structured, logical solutions through code.
      </p>

      <div className="max-w-3xl text-gray-700 space-y-4">
        <p>
          I am an international student from Vietnam driven by curiosity for
          technology and a genuine interest in solving real-world problems.
        </p>

        <p>
          During my internship at Optik Consultancy, I collaborated on an AI
          chatbot system using Retrieval-Augmented Generation (RAG), where I
          strengthened my teamwork, communication, and technical skills.
        </p>

        <p>
          I am a hardworking and independent learner who continuously adapts to
          new challenges, with the goal of becoming a capable software engineer
          and future technical leader.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/Pham-Le-Nam"
          target="_blank"
          className="px-5 py-2 bg-black text-white rounded-lg"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="px-5 py-2 border rounded-lg"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Landing;