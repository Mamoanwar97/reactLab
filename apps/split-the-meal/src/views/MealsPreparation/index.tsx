import { useState } from "react";
import { PhaseBackground, PhaseTitle } from "../../atoms/Phase.styles";
import { MealForm } from "./MealForm";
import { MealsList } from "./MealsList";
import { Meal } from "../../models/Meal";
import { PhaseFooter } from "../../atoms/Phase.styles";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { FormButton } from "../../atoms/FormButton";
import { createLookupByKey } from "../../utils/createLookupByKey";

export const MealsPreparation = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [meals, setMeals] = useState<Array<Meal>>(state.meals);

  const addMeal = (params: Meal) => {
    setMeals((prev) => {
      const mealsLookup = createLookupByKey(prev, "name");

      const mealExist = mealsLookup.get(params.name);

      if (mealExist === undefined) {
        mealsLookup.set(params.name, params);
      } else {
        //TODO: Handle if they have the same name but different prices per item
        mealsLookup.set(params.name, {
          ...mealExist,
          quantity: mealExist.quantity + params.quantity,
        });
      }

      return Array.from(mealsLookup.values());
    });
  };

  const removeMeal = (mealName: Meal["name"]) => {
    setMeals((prev) => prev.filter((meal) => meal.name !== mealName));
  };

  function proceed() {
    dispatch({
      type: "MEAL_COOKED",
      payload: meals,
    });
  }

  return (
    <PhaseBackground>
      <PhaseTitle>Meals preparation</PhaseTitle>
      <MealForm addMeal={addMeal} />
      <MealsList meals={meals} removeMeal={removeMeal} />
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
