import { Meal } from "./Meal";
import { Persona } from "./Personas";

export type Share = {
  mealId: Meal["id"];
  quantity: number;
  personasIds: Array<Persona["id"]>;
};
