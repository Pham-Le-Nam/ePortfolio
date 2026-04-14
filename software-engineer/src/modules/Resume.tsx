import React from "react";

const Resume: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 w-full">Resume</h2>

        {/* Career Objective */}
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 border-b">
                CAREER OBJECTIVE
            </h3>
            <p className="text-gray-700 text-justify">
                Fourth year Software Engineering student seeking to apply for a full-time job in Software Engineer position in Industrus Graduate Program, which gives
                me opportunities to professionally apply my teamwork, problem-solving, data structure and algorithm, and other technical skills to make contributions for
                company, and further my knowledge of the Software Engineering industry from senior.
            </p>
        </div>

        {/* Education */}
        <div className="mb-8 w-full">
            <h3 className="text-xl font-semibold mb-2 border-b">
                EDUCATION
            </h3>
            <div className="flex flex-row justify-between">
                <ul>
                    <li className="font-bold">
                        Bachelor of Engineering (Honours) Software Engineering
                    </li>
                    <li>
                        University of Technology Sydney (UTS)
                    </li>
                </ul>

                <ul className="flex flex-col items-end">
                    <li className="font-bold">
                        Feb 2025 – Oct 2026
                    </li>
                    <li>
                        (Expected)
                    </li>
                </ul>
            </div>
            <div className="ml-15">
                <li>
                    <strong>Related Coursework</strong>: Software Development Studio, Software Analysis Studio
                </li>
                <li>
                    <strong>Concentrations</strong>: Full-stack development, Software Engineering
                </li>
                <li>
                    <strong>Achievements</strong>:
                </li>
                <div className="ml-15">
                    <li>
                        HD result in Software Development Studio subject (Redesign the UI/UX of the REELise organization)
                    </li>
                    <li className="ml-15">
                        Link: <a href="https://www.reelise.org.au/" className="text-blue-700 hover:underline">https://www.reelise.org.au/</a>
                    </li>
                    <li>
                        HD result in Software Analysis Studio subject
                    </li>
                    <li>
                        Current <strong>WAM: 86.38</strong>
                    </li>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <ul>
                    <li className="font-bold">
                        Computer Science (Bachelor)
                    </li>
                    <li>
                        Ho Chi Minh city University of Technology (HCMUT) – Vietnam National University (VNA)
                    </li>
                </ul>

                <ul className="flex flex-col items-end">
                    <li className="font-bold">
                        Aug 2022 – Dec 2024
                    </li>
                </ul>
            </div>
            <div className="ml-15">
                <li>
                    <strong>Related Coursework</strong>: Data Structure and Algorithm, Object-Oriented Programming, Database Management, Software Engineering
                </li>
                <li>
                    <strong>Concentrations</strong>: Full-stack development, Software Engineering
                </li>
                <li>
                    <strong>Achievements</strong>: GPA of 3.6/4 - Awarded a semester scholarship in all semesters
                </li>
            </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 border-b">
                EMPLOYMENT
            </h3>

            <div className="flex flex-row justify-between">
                <ul>
                    <li className="font-bold">
                        Software Engineer Intern
                    </li>
                    <li>
                        Optik Consultancy – Retrieval-Augmented Generation (RAG) project
                    </li>
                </ul>

                <ul className="flex flex-col items-end">
                    <li className="font-bold">
                        Nov 2025 – Feb 2026
                    </li>
                </ul>
            </div>
            <div className="ml-15">
                <li>
                    Designed and developed <strong>RESTful API endpoints</strong>, deploying the API server to a <strong>cloud environment</strong>
                </li>
                <li>
                    Implemented <strong>secure user authentication and authorization</strong> with <strong>JWT</strong>
                </li>
                <li>
                    Designed and managed a <strong>relational database schema</strong>, enforcing data relationships and integrity through constraints
                </li>
                <li>
                    Built a <strong>Retrieval-Augmented Generation (RAG) pipeline</strong> using <strong>Azure OpenAI</strong>, leveraging text embedding and chat completion models
                </li>
                <li>
                    Collaborated closely with team members to integrate components and deliver features cohesively
                </li>
                <li>
                    Liaised directly with clients to gather requirements, clarify expectations, and incorporate feedback
                </li>
                <li>
                    Adopted <strong>2-week Agile sprints</strong>, used <strong>Jira</strong> for task tracking, sprint planning, and progress reporting
                </li>
            </div>

            <div className="flex flex-row justify-between">
                <ul>
                    <li className="font-bold">
                        Kitchen Hand
                    </li>
                    <li>
                        Angie’s Little Italy Ristorante
                    </li>
                </ul>

                <ul className="flex flex-col items-end">
                    <li className="font-bold">
                        Feb 2025 – Sep 2025
                    </li>
                </ul>
            </div>
            <div className="ml-15">
                <li>
                    Communicated and cooperated with head chef to prepare dishes
                </li>
                <li>
                    Kept everything well organized
                </li>
                <li>
                    Handled unexpected situations calmly and quickly
                </li>
                <li>
                    Adapted to the job quickly
                </li>
            </div>
        </div>

      {/* Projects */}
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 border-b">
                PROJECTS
            </h3>
        
            <div className="flex flex-row justify-between">
                <ul>
                    <li className="font-bold">
                        Rapidea
                    </li>
                    <li>
                        UTS Capstone Project – Educational Social Media Website with Integrated AI-Powered Chatbot
                    </li>
                </ul>

                <ul className="flex flex-col items-end">
                    <li className="font-bold">
                        Fed 2026 – Nov 2026
                    </li>
                    <li>
                        (Expected)
                    </li>
                </ul>
            </div>
            <div className="ml-15">
                <li>
                    <strong>Planned and brainstormed</strong> the whole website <strong>system</strong> from scratch
                </li>
                <li>
                    A <strong>full-stack</strong> social learning platform where instructors publish courses and students subscribe to premium educational content
                </li>
                <li>
                    A <strong>freemium subscription model</strong> supporting multiple course subscriptions per user
                </li>
                <li>
                    <strong>RESTful APIs</strong> handling course management, subscriptions, reviews, and messaging
                </li>
                <li>
                    A <strong>relational database schema</strong> with Prisma ORM managing users, courses, subscriptions, followers, and reviews
                </li>
                <li>
                    <strong>Real-time mentor–student messaging</strong>
                </li>
                <li>
                    Developed <strong>content uploads including documents, videos, and livestream sessions</strong>
                </li>
                <li>
                    <strong>Tech Stacks:</strong>
                </li>
                    <li className="ml-15">
                        React, TypeScript, NestJS, Prisma ORM, PostgreSQL, JWT Auth
                    </li>
                <li>
                    <strong>Links:</strong>
                </li>
                    <li className="ml-15">
                        <strong>GitHub</strong>: <a href="https://github.com/Pham-Le-Nam/Rapidea" className="text-blue-700 hover:underline">https://github.com/Pham-Le-Nam/Rapidea</a>
                    </li>
            </div>
        </div>

      {/* Skills */}
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 border-b">
                TECHNICAL SKILLS
            </h3>
            <ul>
                <li>
                    <strong>Programming Languages</strong>: Assembly, C, C++, C#, Java, Python, R, Haskell, Ruby, Swift
                </li>
                <li>
                    <strong>DBMS</strong>: MySQL, PostgreSQL, Oracle SQL, MongoDB, Neo4j
                </li>
                <li>
                    <strong>Web development</strong>: HTML, CSS, JavaScript, Typescript, ReactJS, NestJS, WordPress, TailwindCSS
                </li>
                <li>
                    <strong>Development Tools</strong>: Visual Studio Code, Jupiter Notebook, Unity, Docker, Xcode, SwiftUI
                </li>
                <li>
                    <strong>Cloud Platform</strong>: Microsoft Azure (Azure OpenAI, Azure Database for PostgreSQL, Azure Web App, etc)
                </li>
                <li>
                    Have basic knowledge about <strong>Machine Learning, AI, GenAI,</strong> and <strong>RAG</strong>
                </li>
            </ul>
        </div>

        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 border-b">
                TRANSFERABLE SKILLS
            </h3>
            <ul>
                <li>
                    <strong>Teamwork</strong>: Collaborated with cross-functional team members to eliminate idle time and ensure timely delivery of project milestones
                </li>
                <li>
                    <strong>Organisation</strong>: Planned and organized sprint tasks using Jira, maintaining a clear workflow and balanced workload across the team
                </li>
                <li>
                    <strong>Problem Solving</strong>: Diagnosed and resolved environment-specific issues on a macOS development setup without impacting other team members’ environments
                </li>
                <li>
                    <strong>Quick Learning</strong>: Rapidly self-learned and applied Retrieval-Augmented Generation (RAG) concepts and Azure services in parallel with project development
                    to meet strict deadlines
                </li>
            </ul>
        </div>

        <div className="">
            <h3 className="text-xl font-semibold mb-2 border-b">
                REFEREES
            </h3>
            Available upon request
        </div>
    </section>
  );
};

export default Resume;