import Title from "@/elements/Title";
import React from "react";

const Intro = () => {
  const tools = [
    "Node",
    "React.js",
    "Next.js",
    "Angular",
    "Express.js",
    "JavaScript (ES6+)",
    "Mongo DB",
    "PostgreSQL",
    "TypeScript"
  ];

  return (
    <>
      <Title name="My Skills" />
      <p className="subtitle-5 description">
        As web technologies are constantly advancing quickly, I am enthusiastic about acquiring knowledge on various technologies and utilizing them in my projects.
      </p>
      <p className="subtitle-5 description">
        If my current challenges require the use of different tools, I am open to learning them. Furthermore, when collaborating with a team, I adapt according to their requirements. Each team has its unique needs, and I strive to deliver the best outcomes for the current team I am working with.
      </p>
      <p className="subtitle-5 description">
        This web site has been created using Next.js framework and uses bootstrap, Sass and Chakra UI to implement the graphics.
      </p>
      <p className="subtitle-5 description">
        Here is just a few of the Technologies and tools I have worked with:
      </p>
      <ul>
        {tools.map(tool => (
          <li key={tool} className="smallText-1">
            {tool}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Intro;
