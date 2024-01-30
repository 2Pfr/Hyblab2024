import { Composition, AbsoluteFill, Sequence } from "remotion";
import { Frame1 } from "./Frame1";
import { Frame2 } from "./Frame2";
import { Frame3 } from "./Frame3";

export const MyVideo = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={120}>
        <Frame1 text="t"></Frame1>
      </Sequence>
      <Sequence from={120} durationInFrames={120}>
        <Frame2></Frame2>
      </Sequence>
      <Sequence from={240} durationInFrames={120}>
        <Frame3 text="t"></Frame3>
      </Sequence>
    </>
  );
};