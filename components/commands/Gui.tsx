import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

export default function Gui() {
  const { history, rerender } = useContext(termContext);

  // const currentCommand = _.split(history[0], " ");

  // if (rerender && currentCommand[0] === "gui") {
  //   window.open("https://samyam.netlify.app/", "_blank");
  // }

  return (
    <span>
      <p>Changing to Normal Mode...</p>
    </span>
  );
}
