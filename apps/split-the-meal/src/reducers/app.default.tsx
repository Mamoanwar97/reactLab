import { AppState } from "./app.state";

export const DEFAULT_APP_STATE: AppState = {
  phase: "MEAL_PREPARATION",
  personas: [],
  meals: [],
  funds: {
    vat: false,
    service: false,
    delivery: 0,
    tips: 0,
  },
  shares: [],
};
