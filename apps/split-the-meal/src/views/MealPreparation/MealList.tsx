import { ListWrapper } from "../../atoms/ListWrapper";
import { ListItem } from "../../atoms/ListItem";
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
          <button
            type="button"
            style={{ all: "unset", cursor: "pointer", wordBreak: "keep-all" }}
            onClick={() => props.removeMeal(meal.id)}
          >
            remove
          </button>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
