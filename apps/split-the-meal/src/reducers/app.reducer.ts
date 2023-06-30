import { createLookupByKey } from "../utils/createLookupByKey";
import { AppActions } from "./app.actions";
import { AppState } from "./app.state";

export const appReducer = (state: AppState, actions: AppActions): AppState => {
  switch (actions.type) {
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
        phase: "CALCULATING_FUNDS",
      };
    }
    case "MEALS_ARE_READY": {
      const mealsLookup = createLookupByKey(actions.payload, "id");
      const updateShares: AppState["shares"] = state.shares.filter((share) =>
        mealsLookup.has(share.mealId)
      );
      return {
        ...state,
        meals: actions.payload,
        shares: updateShares,
        phase: "PERSONA_REGISTRATION",
      };
    }
    case "ADD_FUNDS": {
      return {
        ...state,
        funds: actions.payload,
        phase: "MEAL_PREPARATION",
      };
    }
    default:
      return state;
  }
};
