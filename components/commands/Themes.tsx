import { useContext, useEffect } from "react";
import _ from "lodash";
import { themeContext } from "../../app/[locale]/App";
import { Wrapper } from "../styles/Output.styled";
import { ThemeSpan, ThemesWrapper } from "../styles/Themes.styled";
import {
  checkThemeSwitch,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import theme from "../styles/themes";
import Usage from "../Usage";

const myThemes = _.keys(theme);

export default function Themes() {
  const { arg, history, rerender } = useContext(termContext);

  const themeSwitcher: any = useContext(themeContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkThemeSwitch(rerender, currentCommand, myThemes)) {
      themeSwitcher?.(theme[currentCommand[2]]);
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "set", myThemes) ? <Usage cmd="themes" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <Wrapper data-testid="themes">
      <ThemesWrapper>
        {myThemes.map((myTheme) => (
          <ThemeSpan key={myTheme}>{myTheme}</ThemeSpan>
        ))}
      </ThemesWrapper>
      <Usage cmd="themes" marginY />
    </Wrapper>
  );
}