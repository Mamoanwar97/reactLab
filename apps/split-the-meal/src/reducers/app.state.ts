import { Funds } from "../models/Funds";
import { Meal } from "../models/Meal";
import { Persona } from "../models/Personas";
import { Share } from "../models/Share";

export type AppPhase =
  | "PERSONA_REGISTRATION"
  | "MEAL_PREPARATION"
  | "CALCULATING_FUNDS"
  | "SUMMARY_TIME";

export type AppState = {
  phase: AppPhase;
  personas: Array<Persona>;
  meals: Array<Meal>;
  funds: Funds;
  shares: Array<Share>;
};
