import { PhaseBackground, PhaseTitle } from "../../atoms/Phase.styles";
import { RawBox } from "./RawBox";
import { SplicedBox } from "./SplicedBox";

export const MealSharing = () => {
  return (
    <PhaseBackground>
      <PhaseTitle>Meal Sharing</PhaseTitle>
      <RawBox />
      <SplicedBox />
    </PhaseBackground>
  );
};
