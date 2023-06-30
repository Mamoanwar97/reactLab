import { useState } from "react";
import { PhaseBackground, PhaseTitle } from "../../atoms/Phase.styles";
import { MealForm } from "./MealForm";
import { MealList } from "./MealList";
import { Meal } from "../../models/Meal";
import { PhaseFooter } from "../../atoms/Phase.styles";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { FormButton } from "../../atoms/FormButton";
import { uuid } from "../../utils/uuid";

export const MealPreparation = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [meals, setMeals] = useState<Array<Meal>>(state.meals);

  const addMeal = (params: Omit<Meal, "id">) => {
    const id = uuid();
    setMeals((prev) => prev.concat({ ...params, id }));
  };

  const removeMeal = (mealId: Meal["id"]) => {
    setMeals((prev) => prev.filter((meal) => meal.id !== mealId));
  };

  function proceed() {
    dispatch({
      type: "MEAL_COOKED",
      payload: meals,
    });
  }

  return (
    <PhaseBackground>
      <PhaseTitle>Meal preparation</PhaseTitle>
      <MealForm addMeal={addMeal} />
      <MealList meals={meals} removeMeal={removeMeal} />
      <PhaseFooter>
        <FormButton
          type="button"
          disabled={meals.length < 1}
          onClick={() => proceed()}
        >
          Proceed &gt;&gt;
        </FormButton>
      </PhaseFooter>
    </PhaseBackground>
  );
};
