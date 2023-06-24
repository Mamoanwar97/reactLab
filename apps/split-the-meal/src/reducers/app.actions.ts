import { Persona } from "../models/Personas";

type ActionTypes =
  | "REGISTER_PERSONAS"
  | "READY_TO_SERVE"
  | "ADD_FUNDS"
  | "SPLIT_THE_MEAL";

type BaseAction<TAction extends ActionTypes, TPayload extends any> = {
  type: TAction;
  payload: TPayload;
};

export type Proceed = BaseAction<"REGISTER_PERSONAS", Array<Persona>>;

export type AppActions = Proceed;
