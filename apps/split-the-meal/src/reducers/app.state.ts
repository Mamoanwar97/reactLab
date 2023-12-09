import { Fees } from "../models/Fees";
import { Meal } from "../models/Meal";
import { Persona } from "../models/Personas";
import { Share } from "../models/Share";

export type AppPhase =
  | "MEALS_PREPARATION"
  | "FEES_CALCULATIONS"
  | "PERSONAS_REGISTRATION"
  | "SHARING_TIME"
  | "FINAL_SUMMARY";

export type AppState = {
  phase: AppPhase;
  personas: Array<Persona>;
  meals: Array<Meal>;
  fees: Fees;
  shares: Array<Share>;
};
