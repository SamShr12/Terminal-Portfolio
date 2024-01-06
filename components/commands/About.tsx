import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

export default function About() {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello, my name is <HighlightSpan>Samyam</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a web developer</HighlightAlt>.
      </p>
      <p>
        Dreaming ideas and making them into reality is my goal in life.
        {/* I also
          make digital <br />
          illustrations, write novels, research topics and play piano. */}
      </p>
    </AboutWrapper>
  );
}
