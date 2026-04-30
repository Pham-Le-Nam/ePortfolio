import React from "react";

const Reflection: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Internship Reflection</h2>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b">
            Expectations Before Joining
          </h3>
          <p>
            Before joining Optik Consultancy, I expected to be involved in a
            multidisciplinary project that extended beyond traditional software
            or website development. Knowing that interns were entrusted with
            real-world responsibilities and given ownership of their projects, I
            was excited by the opportunity to apply my programming skills in
            broader contexts. I was particularly interested in exploring how
            technology could be integrated into other domains to create
            practical and meaningful solutions. Additionally, I aspired to step
            into a leadership role within the team. I wanted to challenge myself
            not only technically but also professionally by strengthening my
            communication, coordination, and organizational skills. I hoped to
            contribute by facilitating collaboration, managing tasks
            effectively, and engaging confidently with clients during meetings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b">
            Reality of the Internship
          </h3>
          <p>
            However, the reality of the internship was different from what I
            initially imagined. On my first day, I learned that my project would
            focus entirely on software development, specifically building an AI
            chatbot website using Retrieval-Augmented Generation (RAG) and
            cloud-based services. This did not fully align with my expectation
            of working on a broader multidisciplinary project. Moreover, I had
            limited prior experience with applied AI and Azure cloud services,
            which made the project feel overwhelming at the beginning. During
            the first few weeks, I struggled to understand the team's workflow,
            clarify expectations, and determine how best to approach my tasks. I
            often felt uncertain about whether I was contributing effectively.
          </p>

          <p className="mt-4">
            Over time, however, consistent effort and hands-on experience helped
            me gain clarity and confidence. As I became more familiar with the
            technical stack, developing RESTful APIs, implementing JWT
            authentication, designing relational databases, and working with
            Azure OpenAI, I began to see how the different components fit
            together. Communication with the client was also challenging
            initially, as misunderstandings and unclear expectations slowed
            progress. By the third week, though, our discussions became more
            structured and aligned, leading to smoother collaboration. Although
            I did not take on a formal leadership position, I benefited greatly
            from working with supportive teammates who encouraged open
            communication and shared problem-solving.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b">
            Most Important Lessons
          </h3>
          <p>
            The most important lessons I gained were centered on communication
            and professional mindset rather than purely technical knowledge. I
            realized that effective communication is the foundation of any
            successful engineering project. Clear alignment between team members
            and stakeholders ensures that project scope, requirements, and
            deliverables are understood by all parties. I also learned that no
            project is inherently more valuable than another; growth depends on
            the attitude and dedication you bring to the experience. This
            shifted my perspective as a junior developer, helping me embrace
            challenges instead of comparing projects to initial expectations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b">
            Value Proposition to an Employer
          </h3>
          <p>
            As a result of this internship, I believe my value proposition to an
            employer lies in being a technically capable and adaptable junior
            developer who combines strong problem-solving skills with effective
            communication. I can demonstrate this through tangible project
            outcomes, my GitHub portfolio, and my ability to quickly learn new
            technologies such as Azure cloud services and applied AI under real
            project constraints.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b">
            Career Direction
          </h3>
          <p>
            Finally, the internship influenced my career interests
            significantly. While I was previously more interested in embedded
            programming, working extensively on a web-based AI system sparked a
            strong interest in web development and intelligent applications. I
            now feel more confident pursuing software roles in this space, while
            remaining open to continuous learning and new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
