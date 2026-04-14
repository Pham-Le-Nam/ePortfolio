import React from "react";

const CoverLetter: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Cover Letter</h2>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>Dear Sir or Madam,</p>

        <p>
          I saw your advertisement for the Industrus Engineering Graduate Program 
          and would like to apply for the Software Engineering stream. As a 
          final-year Software Engineering student at the University of Technology 
          Sydney (UTS), I have developed strong technical knowledge through 
          academic study and industry experience. My internship and project work 
          have provided me with practical exposure to real-world software 
          development and teamwork. I believe these experiences have prepared me 
          well to contribute to your graduate program. Please find my response 
          to the selection criteria below.
        </p>

        <p>
          During my internship at Optik Consultancy, I worked on a cloud-based 
          Retrieval-Augmented Generation (RAG) system that required careful 
          management of user authentication and sensitive data. While 
          implementing JWT-based authentication and authorization, I ensured 
          that secure coding practices were followed and that user data was 
          properly protected. I also regularly reviewed my code and verified 
          that it complied with project security requirements before deployment. 
          This experience reinforced the importance of maintaining professional 
          accountability when developing systems that manage user information 
          and interact with cloud services.
        </p>

        <p>
          In the same internship project, I worked closely with software 
          engineers as well as clients who were not from technical backgrounds. 
          My responsibilities included discussing project requirements with 
          clients, clarifying expectations, and translating these requirements 
          into technical features for the development team. I also participated 
          in sprint meetings and progress reviews, ensuring that information was 
          clearly communicated between the development team and stakeholders. 
          This experience strengthened my ability to explain technical ideas 
          clearly and collaborate effectively across different professional 
          backgrounds.
        </p>

        <p>
          Innovation was a key aspect of my internship project, where our team 
          developed a Retrieval-Augmented Generation application using Azure 
          OpenAI services. As the project required technologies that I had not 
          previously used, I proactively researched RAG pipelines, embeddings, and 
          cloud deployment while continuing development tasks. By applying this 
          knowledge, I helped build the system architecture and integrate 
          AI-powered search capabilities into the application. This experience 
          demonstrated my willingness to learn new technologies quickly and 
          contribute creative solutions in a fast-moving development environment.
        </p>

        <p>
          During the development of the RAG application, I was responsible for 
          designing and managing the relational database schema using PostgreSQL 
          and Prisma ORM. This required careful planning of data relationships and 
          constraints to ensure data integrity and efficient retrieval. I also 
          implemented RESTful APIs to manage and process information between the 
          database, backend services, and client interface. Through this work, I 
          gained practical experience organizing, managing, and retrieving 
          information in a way that supports reliable system performance.
        </p>

        <p>
          Working in an Agile development environment required me to manage my own 
          tasks and deadlines effectively. Using Jira, I planned and tracked tasks 
          across two-week sprints, ensuring that deliverables were completed on 
          time. When encountering unfamiliar technologies, such as Azure OpenAI 
          services and RAG architecture, I independently researched solutions and 
          applied them to the project. This experience helped me develop strong 
          self-management skills and the ability to maintain productivity in a 
          professional workplace.
        </p>

        <p>
          Throughout my internship and university projects, teamwork has been 
          essential to achieving project goals. During the RAG application project, 
          I collaborated with team members to integrate backend APIs, database 
          systems, and cloud services into a cohesive solution. I also contributed 
          to sprint planning and problem-solving discussions to ensure that 
          development tasks were completed efficiently. By actively supporting 
          teammates and sharing knowledge when challenges arose, I helped maintain 
          steady project progress and a positive collaborative environment.
        </p>

        <p>
          Thank you for considering my application. I would welcome the opportunity 
          to further discuss how my technical skills and collaborative approach 
          could contribute to the Industrus Engineering Graduate Program. I look 
          forward to hearing from you.
        </p>

        <p>Yours sincerely,</p>
        <p><strong>Le Nam Pham</strong></p>
      </div>
    </section>
  );
};

export default CoverLetter;