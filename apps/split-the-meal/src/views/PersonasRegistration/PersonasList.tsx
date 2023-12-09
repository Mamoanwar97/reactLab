import { Persona } from "../../models/Personas";
import { ListRemoveButton, ListWrapper } from "../../atoms/List.styles";
import { ListItem } from "../../atoms/List.styles";

type PersonasListProps = {
  personas: Array<Persona>;
  remove: (id: Persona["name"]) => void;
};

export const PersonasList = (props: PersonasListProps) => {
  const personasList = structuredClone(props.personas).reverse();
  return (
    <ListWrapper>
      {personasList.map((persona) => (
        <ListItem key={persona.name}>
          {persona.name}
          <ListRemoveButton onClick={() => props.remove(persona.name)}>
            remove
          </ListRemoveButton>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
