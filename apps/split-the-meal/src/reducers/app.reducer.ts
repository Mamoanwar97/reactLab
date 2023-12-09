import { AppActions } from "./app.actions";
import { AppState } from "./app.state";

export const appReducer = (state: AppState, actions: AppActions): AppState => {
  switch (actions.type) {
    case "REGISTER_PERSONAS": {
      return {
        ...state,
        personas: actions.payload,
        phase: "MEALS_PREPARATION",
      };
    }
    case "MEAL_COOKED": {
      return {
        ...state,
        meals: actions.payload,
        phase: "FEES_CALCULATIONS",
      };
    }
    case "ADD_FEES": {
      return {
        ...state,
        fees: actions.payload,
        phase: "SHARING_TIME",
      };
    }

    default:
      return state;
  }
};
