import { BigSubHeading } from "@/atomes/Heading";
import Image from "next/image";

const skills = [
  { name: "React", image: "/react.png" ,proficiency:"70%"},
  { name: "TypeScript", image: "/typescript.png" ,proficiency:"60%"},
  { name: "Node.js", image: "/nodejs.png" ,proficiency:"50%"},
  { name: "JavaScript", image: "/js.png" ,proficiency:"75%"},
  { name: "CSS3", image: "/css-3.png" ,proficiency:"70%"},
  { name: "HTML5", image: "/html-5.png" ,proficiency:"90%"},
  { name: "Next.js", image: "/icons8-next.js-512.png" ,proficiency:"80%"},
  { name: "MongoDB", image: "/mongodb.svg" ,proficiency:"65%"},
  // { name: "GitHub", image: "/github.svg" ,proficiency:"70%"},
  // { name: "Jira", image: "/jira.svg" ,proficiency:"70%"},
  { name: "Express.js", image: "/Express-js.png" ,proficiency:"60%"},
  { name: "Tailwind CSS", image: "/tailwind-css.svg" ,proficiency:"75%"},
];


const Skills = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        {/* <h2 className="text-3xl font-bold text-yellow-400 mb-4"></h2> */}
        {/* <HeadingWithAfter>Tech Stack</HeadingWithAfter> */}
                  <BigSubHeading>Skills i have</BigSubHeading>
        <p className="text-gray-500 mb-8">
          I am a developer specializing in modern web technologies.
        </p>

        <div className="grid grid-cols-2 sml:grid-cols-3 lg:!grid-cols-5 gap-6 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform"
            >
              <Image src={skill.image} alt={skill.name} height={512} width={512} className="w-16 h-16 mb-3" />
              <p className="text-green-400 font-semibold">{skill.name}</p>

              <div className="w-[100px] mt-1 h-[5px] border rounded-full " title={`${skill.proficiency} proficiency`}>
                <span className="h-full bg-green-500 block" style={{width:skill.proficiency}}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
