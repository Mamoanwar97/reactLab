import { useAppState } from "../contexts/appContext";
import { CalculatingFees } from "./CalculatingFees";
import { MealsPreparation } from "./MealsPreparation";
import { MealSharing } from "./MealSharing";
import { PersonasRegistration } from "./PersonasRegistration";
import { Summary } from "./Summary";

export const Views = () => {
  const state = useAppState();

  switch (state.phase) {
    case "PERSONAS_REGISTRATION":
      return <PersonasRegistration />;
    case "MEALS_PREPARATION":
      return <MealsPreparation />;
    case "FEES_CALCULATIONS":
      return <CalculatingFees />;
    case "SHARING_TIME":
      return <MealSharing />;
    case "FINAL_SUMMARY":
      return <Summary />;
    default:
      throw new Error("Phase isn't implemented yet");
  }
};
