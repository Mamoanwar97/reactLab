import { createLookupByKey } from "../utils/createLookupByKey";
import { AppActions } from "./app.actions";
import { AppState } from "./app.state";

export const appReducer = (state: AppState, actions: AppActions): AppState => {
  switch (actions.type) {
    case "MEAL_COOKED": {
      const mealsLookup = createLookupByKey(actions.payload, "id");
      const updateShares: AppState["shares"] = state.shares.filter((share) =>
        mealsLookup.has(share.mealId)
      );
      return {
        ...state,
        meals: actions.payload,
        shares: updateShares,
        phase: "FEES_CALCULATIONS",
      };
    }
    case "ADD_FEES": {
      return {
        ...state,
        fees: actions.payload,
        phase: "PERSONA_REGISTRATION",
      };
    }
    case "REGISTER_PERSONAS": {
      const personasLookup = createLookupByKey(actions.payload, "id");
      const updateShares: AppState["shares"] = state.shares.map((share) => ({
        ...share,
        personasIds: share.personasIds.filter((id) => personasLookup.has(id)),
      }));

      return {
        ...state,
        personas: actions.payload,
        shares: updateShares,
        phase: "MEAL_PREPARATION",
      };
    }
    default:
      return state;
  }
};
