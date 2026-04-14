import React from "react";
import Landing from "./modules/landing/Landing";
import Resume from "./modules/Resume";
import CoverLetter from "./modules/cover-letter/CoverLetter";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-center gap-6 py-4">
          <a href="#landing" className="hover:text-blue-500">Home</a>
          <a href="#resume" className="hover:text-blue-500">Resume</a>
          <a href="#cover" className="hover:text-blue-500">Cover Letter</a>
          <a href="https://pham-le-nam.github.io/ePortfolio/" className="text-blue-700 hover:underline">https://pham-le-nam.github.io/ePortfolio/</a>
        </div>
      </nav>

      {/* Sections */}
      <div id="landing" className="pt-20">
        <Landing />
      </div>

      <div id="resume" className="bg-white">
        <Resume />
      </div>

      <div id="cover" className="bg-gray-50">
        <CoverLetter />
      </div>
    </div>
  );
};

export default App;