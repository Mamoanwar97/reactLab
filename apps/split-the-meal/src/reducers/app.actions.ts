import { Meal } from "../models/Meal";
import { Persona } from "../models/Personas";

type ActionTypes =
  | "REGISTER_PERSONAS"
  | "MEALS_ARE_READY"
  | "READY_TO_SERVE"
  | "ADD_FUNDS"
  | "SPLIT_THE_MEAL";

type BaseAction<TAction extends ActionTypes, TPayload extends any> = {
  type: TAction;
  payload: TPayload;
};

export type DoneWithPersonas = BaseAction<"REGISTER_PERSONAS", Array<Persona>>;
export type DoneWithMeals = BaseAction<"MEALS_ARE_READY", Array<Meal>>;

export type AppActions = DoneWithMeals | DoneWithPersonas;
