import React from "react";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";
import { PreImg } from "../styles/Welcome.styled";

const eduBg = [
  {
    title: "Developer",
    desc: "SkillHub Ltd. | 2022 - 2022",
  },
  {
    title: "Frontend Developer & UI/UX Designer",
    desc: "Documentary Nepal | Nepal | 2022 - 2023",
  },
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
