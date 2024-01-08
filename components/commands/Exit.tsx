import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

export default function Exit() {
  const { history, rerender } = useContext(termContext);
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "exit") {
    // window.open("https://samyam.netlify.app/", "_blank");
    window.location.href = "https://samyam.netlify.app/";
  }

  return (
    <div>
      <div>Logout . . .</div>
      <div className="mt-3">Closing terminal mode.</div>
    </div>
  );
}
