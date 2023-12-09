import { Meal } from "./Meal";
import { Persona } from "./Personas";

export type Share = {
  quantity: number;
  mealName: Meal["name"];
  personasNames: Array<Persona["name"]>;
};
