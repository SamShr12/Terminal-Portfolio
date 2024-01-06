import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

export default function Welcome() {
  return (
    <HeroContainer data-testid="welcome">
      {/* <div className="info-section">
        <PreName>{`
              o o o o ~~  ~~ ~                                      _____
              o     _____         ________________ ________________ ___|_=_|_()__
            .][_mm__|[]| ,===___ ||              | |              | |          |
           >(_______|__|_|_GBRR_]_|              |_|              |_|          |_|
           _/oo-OOOO-oo' !oo!!oo!=!o!o!----!o!o!'=!o!o!----!o!o!'=!o!o--o!o!'
           +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
`}</PreName>
        <PreWrapper>
          <PreNameMobile>{``}</PreNameMobile>
        </PreWrapper>
        <div>
          Welcome to my terminal portfolio. <code>(Version 2.7.5)</code>
        </div>
        <Seperator>-----</Seperator>

      </div> */}
      <div className="illu-section">
        <PreImg>
          {`
      ooooooooooooooooooooooooooooooooooooo
      88                               .d88
      88                               8888
      88    Welcome to Terminal mode   8888    oooooooooooooooo
      88                               8888    8              8
      88   Hope you have a great day!  8888    8             d8
      88                               8888    8            d88
      88                               8888    8           d888
      88   Type "help" for commands    8888    8          d8888
      88                               8888    8         d88888
      88                               8888    8        d888888
      88 .ooooooooooooooooooooooooocgmm8888    8       d8888888
      88.od88888888888888888888888888888888    8      d88888888
              |                   |            8    d8888888888
         ooooooooooooooooooooooooooooooo       8   d88888888888
        d                       ...oooddb      8  d888888888888
       d              ...oood888888888888b     8 d8888888888888
      dod8888888888888888888888888888888oob
           `}
          <div>
            For a list of available commands, type `<Cmd>help</Cmd>`.
          </div>
        </PreImg>
      </div>
    </HeroContainer>
  );
}
