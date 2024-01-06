import React from "react";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";
import { PreImg } from "../styles/Welcome.styled";

const eduBg = [
  {
    title: "Web Developer - Intern",
    desc: "SkillHub Ltd. | 2024 - 2027",
  },
  // {
  //   title: "High School",
  //   desc: "Deerwalk Sifal Secondary School | Nepal | 2020 - 2022",
  // },
  // {
  //   title: "Schooling",
  //   desc: "Bouddha International School | Nepal | 2016-2020",
  // },
];

export default function Experience() {
  return (
    <Wrapper data-testid="education">
      <div className="illu-section">
        <PreImg></PreImg>
      </div>
      <EduIntro>My Professional Experiences!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
}
