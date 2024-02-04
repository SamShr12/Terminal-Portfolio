import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { PreImg } from "../styles/Welcome.styled";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        {/* <div className="text-4xl">
          My Projects <br />
        </div> */}
<div className="illu-section">
        <PreImg>
          {`
███╗   ███╗██╗   ██╗    ██████╗ ██████╗  ██████╗      ██╗ ███████╗  ██████╗████████╗███████╗
████╗ ████║╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔═══██╗     ██║ ██╔════╝ ██╔════╝╚══██╔══╝██╔════╝
██╔████╔██║ ╚████╔╝     ██████╔╝██████╔╝██║   ██║     ██║ █████╗   ██║        ██║   ███████╗
██║╚██╔╝██║  ╚██╔╝      ██╔═══╝ ██╔══██╗██║   ██║ ██  ██║ ██╔══╝   ██║        ██║   ╚════██║
██║ ╚═╝ ██║   ██║       ██║     ██║  ██║╚██████╔╝ ╚█████╔ ███████╗ ╚██████╗   ██║   ███████║
╚═╝     ╚═╝   ╚═╝       ╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚════╝ ╚══════╝  ╚═════╝   ╚═╝   ╚══════╝
           `}
        </PreImg>
      </div>
        {/* Here are some of my projects you shouldn't misss */}
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: "My personal website with my creations",
    url: "https://samyam.netlify.app/",
  },
  {
    id: 2,
    title: "ArtForLife",
    desc: "A social media and ecommerce website for artist to share there creations and works and also with accesibility to sell their work.",
    url: "",
  },
  {
    id: 3,
    title: "MerchantPlus",
    desc: "A software for shop keepers and direct card transcation services",
    url: "",
  },
  {
    id: 4,
    title: "SkillHub",
    desc: "A online learning platform for student and teacher to host their subject, assignment and materials",
    url: "",
  },
  {
    id: 5,
    title: "Documentary Nepal",
    desc: "An enquiry site for film production industry",
    url: "",
  },
  {
    id: 6,
    title: "DAWN : RUNAWAY",
    desc: "3d ship running game.",
    url: "https://github.com/SamShr12/GalaxyFantasyGame",
  },
];

export default Projects;
