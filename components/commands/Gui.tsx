import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { useRouter } from "next/navigation";

export default function Gui() {
  const { history, rerender } = useContext(termContext);
  const router = useRouter();

  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "gui") {
    // window.open("https://samyam.netlify.app/", "_blank");
    window.location.href = "https://samyam.netlify.app/";
  }

  return (
    <span>
      <p>Changing to Normal Mode...</p>
    </span>
  );
}
