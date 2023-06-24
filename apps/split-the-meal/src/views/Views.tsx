import { useAppState } from "../contexts/appContext";
import { CalculatingFunds } from "./CalculatingFunds";
import { MealPreparation } from "./MealPreparation";
import { PersonaRegistration } from "./PersonaRegistration";
import { SummaryTime } from "./SummaryTime";

export const Views = () => {
  const state = useAppState();

  switch (state.phase) {
    case "PERSONA_REGISTRATION":
      return <PersonaRegistration />;
    case "CALCULATING_FUNDS":
      return <CalculatingFunds />;
    case "MEAL_PREPARATION":
      return <MealPreparation />;
    case "SUMMARY_TIME":
      return <SummaryTime />;
    default:
      throw new Error("Phase isn't implemented yet");
  }
};
