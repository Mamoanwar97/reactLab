import { ListRemoveButton, ListWrapper } from "../../atoms/List.styles";
import { ListItem } from "../../atoms/List.styles";
import { Meal } from "../../models/Meal";

type MealsListProps = {
  meals: Array<Meal>;
  removeMeal(id: Meal["name"]): void;
};

export const MealsList = (props: MealsListProps) => {
  return (
    <ListWrapper>
      {props.meals.map((meal) => (
        <ListItem key={meal.name}>
          <p>name: {meal.name}</p>
          <p>price per item: {meal.pricePerItem}</p>
          <p>quantity: {meal.quantity}</p>
          <ListRemoveButton onClick={() => props.removeMeal(meal.name)}>
            remove
          </ListRemoveButton>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
