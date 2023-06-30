import { AppState } from "./app.state";

export const DEFAULT_APP_STATE: AppState = {
  phase: "MEAL_PREPARATION",
  personas: [],
  meals: [],
  fees: {
    vat: false,
    service: false,
    delivery: 0,
    tips: 0,
    discount: 0,
  },
  shares: [],
};
