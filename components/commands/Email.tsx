import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

export default function Email() {
  const { history, rerender } = useContext(termContext); //from terminal file

  /* ===== get current command ===== */
  // const currentCommand = _.split(history[0], " ");

  // if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
  //   window.open("mailto:" + "samyamshr07@gmail.com", "_self");
  // }

  return (
    <Wrapper>
      <span>
        <a href="mailto:samyamshr07@gmail.com" title="crtl + click">
          samyamshr07@gmail.com
        </a>
      </span>
    </Wrapper>
  );
}
