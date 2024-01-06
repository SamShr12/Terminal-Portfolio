import { useLayoutEffect, useRef } from "react";
import { PreImg, PreName } from "../styles/Welcome.styled";
import { gsap } from "gsap";

export default function Sl() {
  const root = useRef<any>();
  useLayoutEffect(() => {
    //animate ".box" from an opacity of 0 to an opacity of 0.5
    // gsap.fromTo(".call-the-train", { x: "100%" }, { x: 0, duration: 15 });
    let tween = gsap.fromTo(
      ".call-the-train",
      { x: "100%", duration: 25, ease: "none" },
      { x: 0, duration: 30, ease: "bounce.out" }
    );

    tween.play();
    return;
  }, []);
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.fromTo(".call-the-train", {opacity});
  //   }, root);
  //   return () => ctx.revert();
  // }, []);
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <section className="call-the-train">
        <div
          style={{
            marginBottom: "-39px",
          }}
        >
          <PreImg>
            {`
                 00000
          `}
          </PreImg>
        </div>
        <div
          style={{
            marginBottom: "-39px",
          }}
        >
          <PreImg>
            {`
             00000
          `}
          </PreImg>
        </div>
        <div
          style={{
            marginBottom: "-39px",
          }}
        >
          <PreImg>
            {`
      oooo000
          `}
          </PreImg>
        </div>
      </section>
      <div className="call-the-train" ref={root}>
        <PreImg>
          {`
     oo  ____          :::::::::::::::::: :::::::::::::::::: __|------|__
     Y_,_|[]| --++++++ |[][][][][][][][]| |[][][][][][][][]| |  [] []   |
    {|_|_|__|;|______|;|________________|;|________________|;|__________|;
     /OO--OO   oo  oo   oo oo      oo oo   oo oo      oo oo   oo     oo
          `}
        </PreImg>
      </div>
      <div
        style={{
          marginTop: "-20px",
        }}
      >
        {`
        +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
        `}
      </div>
    </div>
  );
}
