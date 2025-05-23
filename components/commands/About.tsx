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
        I am <HighlightAlt>developer</HighlightAlt>.
      </p>
      <p>
        I create. I explore new horizons.I develop.
        {/* I also
          make digital <br />
          illustrations, write novels, research topics and play piano. */}
      </p>
    </AboutWrapper>
  );
}
