import { Fees } from "../models/Fees";
import { Meal } from "../models/Meal";
import { Persona } from "../models/Personas";
import { Share } from "../models/Share";

export type AppPhase =
  | "MEAL_PREPARATION"
  | "FEES_CALCULATIONS"
  | "PERSONA_REGISTRATION"
  | "SUMMARY_TIME";

export type AppState = {
  phase: AppPhase;
  personas: Array<Persona>;
  meals: Array<Meal>;
  fees: Fees;
  shares: Array<Share>;
};
