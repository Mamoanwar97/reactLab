import { ListRemoveButton, ListWrapper } from "../../atoms/List.styles";
import { ListItem } from "../../atoms/List.styles";
import { Meal } from "../../models/Meal";

type MealListProps = {
  meals: Array<Meal>;
  removeMeal(id: Meal["id"]): void;
};

export const MealList = (props: MealListProps) => {
  return (
    <ListWrapper>
      {props.meals.map((meal) => (
        <ListItem key={meal.id}>
          <p>name: {meal.name}</p>
          <p>price per item: {meal.pricePerItem}</p>
          <p>quantity: {meal.quantity}</p>
          <ListRemoveButton onClick={() => props.removeMeal(meal.id)}>
            remove
          </ListRemoveButton>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
