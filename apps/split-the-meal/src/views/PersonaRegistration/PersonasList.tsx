import { Persona } from "../../models/Personas";
import { ListWrapper } from "../../atoms/ListWrapper";
import { ListItem } from "../../atoms/ListItem";

type PersonasListProps = {
  personas: Array<Persona>;
  remove: (id: string) => void;
};

export const PersonasList = (props: PersonasListProps) => {
  const personasList = structuredClone(props.personas).reverse();
  return (
    <ListWrapper>
      {personasList.map((persona) => (
        <ListItem key={persona.id}>
          {persona.name}
          <button
            type="button"
            style={{ all: "unset", cursor: "pointer", wordBreak: "keep-all" }}
            onClick={() => props.remove(persona.id)}
          >
            remove
          </button>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
