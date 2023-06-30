import { useState } from "react";
import { PhaseBackground } from "../../atoms/PhaseBackground";
import { MealForm } from "./MealForm";
import { MealList } from "./MealList";
import { Meal } from "../../models/Meal";
import { PhaseFooter } from "../../atoms/PhaseFooter";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { Button } from "../../atoms/Button";
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
      type: "MEALS_ARE_READY",
      payload: meals,
    });
  }

  return (
    <PhaseBackground>
      <h1>Meal preparation</h1>
      <MealForm addMeal={addMeal} />
      <MealList meals={meals} removeMeal={removeMeal} />
      <PhaseFooter>
        <Button
          type="button"
          disabled={meals.length < 1}
          onClick={() => proceed()}
        >
          Proceed &gt;&gt;
        </Button>
      </PhaseFooter>
    </PhaseBackground>
  );
};
