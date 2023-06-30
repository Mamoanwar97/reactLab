import { Fees } from "../models/Fees";
import { Meal } from "../models/Meal";
import { Persona } from "../models/Personas";

type ActionTypes =
  | "MEAL_COOKED"
  | "ADD_FEES"
  | "REGISTER_PERSONAS"
  | "READY_TO_SERVE"
  | "SPLIT_THE_MEAL";

type BaseAction<TAction extends ActionTypes, TPayload extends any> = {
  type: TAction;
  payload: TPayload;
};

export type DoneWithMeals = BaseAction<"MEAL_COOKED", Array<Meal>>;
export type AddFees = BaseAction<"ADD_FEES", Fees>;
export type DoneWithPersonas = BaseAction<"REGISTER_PERSONAS", Array<Persona>>;

export type AppActions = DoneWithMeals | DoneWithPersonas | AddFees;
