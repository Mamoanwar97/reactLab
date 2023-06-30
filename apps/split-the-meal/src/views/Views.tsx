import { useAppState } from "../contexts/appContext";
import { CalculatingFees } from "./CalculatingFees";
import { MealPreparation } from "./MealPreparation";
import { PersonaRegistration } from "./PersonaRegistration";
import { SummaryTime } from "./SummaryTime";

export const Views = () => {
  const state = useAppState();
  // return <CalculatingFees />;

  switch (state.phase) {
    case "MEAL_PREPARATION":
      return <MealPreparation />;
    case "PERSONA_REGISTRATION":
      return <PersonaRegistration />;
    case "FEES_CALCULATIONS":
      return <CalculatingFees />;
    case "SUMMARY_TIME":
      return <SummaryTime />;
    default:
      throw new Error("Phase isn't implemented yet");
  }
};
