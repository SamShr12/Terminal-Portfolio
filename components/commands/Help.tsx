import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

export default function Help() {
  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        {/* <div>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div> */}
        <div>Up Arrow {generateTabs(13)} - go back to previous command</div>
        {/* <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div> */}
      </KeyContainer>
    </HelpWrapper>
  );
}
