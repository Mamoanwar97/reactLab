import { COOLORS } from "../../utils/coolors";
import styled from "@emotion/styled";
import { Persona } from "../../models/Personas";

const ListWrapper = styled.ul`
  color: ${COOLORS.fourth};
  overflow: hidden auto;
  flex: 1 0 auto;
  height: 1px;
  padding: 8px;
  border-style: dashed;
  border-width: 1px;
  border-color: ${COOLORS.fourth};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 8px;
`;

const ListItem = styled.li`
  all: unset;
  padding: 8px;
  border: 1px solid ${COOLORS.fourth};
  border-radius: 8px;
  width: 100%;
  text-wrap: balance;
  word-break: break-all;
  display: block;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
