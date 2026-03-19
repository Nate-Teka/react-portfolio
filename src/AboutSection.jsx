import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGithub,
  SiCplusplus,
  SiMysql,
  SiNextdotjs,
  SiSwagger,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";

const techStack = [
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26] text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#663399] text-3xl" /> },
  {
    name: "Javascript",
    icon: <SiJavascript className="text-[#F7DF1E] text-3xl" />,
  },
  { name: "Java", icon: <FaJava className="text-[#007396] text-3xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-white text-3xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-white text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1] text-4xl" /> },
  { name: "ReactJS", icon: <SiReact className="text-[#61DAFB] text-3xl" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Swagger", icon: <SiSwagger className="text-[#85EA2D] text-3xl" /> },
  { name: "Sass", icon: <SiSass className="text-[#CC6699] text-3xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4] text-3xl" /> },
];

function AboutSection() {
  return (
    <section className="w-[90%] mx-auto">
      <h2
        className="text-center text-5xl my-20 max-[412px]:text-red-500"
        id="aboutLink"
      >
        About me
      </h2>
      <div className="flex flex-col gap-[15%] md:flex-row justify-between">
        <div>
          <h3 className="text-4xl whitespace-nowrap mb-8">My Origins</h3>
          <p className="max-w-175">
            A fresh graduate with a BSc. degree in Computer Science degree from Hope Enterprise University College, Ethiopia. Looking for work as a freelance or a full time developer with a strong passion for frontend web development.
          </p>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <h3 className="text-4xl text-center whitespace-nowrap mb-8">My skills</h3>
          <ul className="flex flex-wrap">
            {techStack.map((item) => (
              <li className="flex m-2 p-3 items-center  gap-2 bg-secondary rounded">
                {item.name === "MySQL" ? "" : item.name}
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
