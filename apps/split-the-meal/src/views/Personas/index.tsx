import styled from "@emotion/styled";
import { useState } from "react";
import { COOLORS } from "../../utils/coolors";
import { PersonasList } from "./PersonasList";
import { PersonasInput } from "./PersonasInput";
import { Button } from "../../atoms/Button";
import { Persona } from "../../models/Personas";
import { uuid } from "../../utils/uuid";

const PersonasBackground = styled.div`
  width: 600px;
  border-radius: 8px;
  border: 2px solid ${COOLORS.tertiary};
  color: ${COOLORS.fifth};
  padding: 24px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 16px;
`;

const PersonasFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Personas = () => {
  const [personas, setPersonas] = useState<Array<Persona>>([]);

  function remove(id: string) {
    setPersonas((prev) => prev.filter((persona) => persona.id !== id));
  }

  function add(name: string) {
    const personaValue = name.trim();

    let isError: boolean = false;

    if (personaValue !== "") {
      setPersonas((prev) => {
        if (prev.some((persona) => persona.name === personaValue)) {
          isError = true;
          return prev;
        }
        const id = uuid();
        return prev.concat({ id, name: personaValue });
      });
    }

    return isError;
  }

  return (
    <PersonasBackground>
      <h1>Personas</h1>
      <PersonasInput add={add} />
      <PersonasList personas={personas} remove={remove} />
      <PersonasFooter>
        <Button type="button" disabled={personas.length < 1}>
          Proceed &gt;&gt;
        </Button>
      </PersonasFooter>
    </PersonasBackground>
  );
};
