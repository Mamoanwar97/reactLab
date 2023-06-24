import { useState } from "react";
import { COOLORS } from "../../utils/coolors";
import styled from "@emotion/styled";
import { PERSONAS_NICKNAME_MAX_LIMIT } from "./constants";
import { Button } from "../../atoms/Button";

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 30px;
  column-gap: 8px;
`;

type PersonasInputProps = {
  add: (name: string) => boolean;
};

export const PersonasInput = ({ add }: PersonasInputProps) => {
  const [personaName, setPersonaName] = useState("");
  const [duplicateNameError, setDuplicateNameError] = useState<string>();

  function reset() {
    setPersonaName("");
    setDuplicateNameError(undefined);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isError = add(personaName);
    if (isError) {
      setDuplicateNameError(personaName);
    } else {
      reset();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
    >
      <p
        style={{
          color: COOLORS.fourth,
          fontSize: "12px",
        }}
      >
        Max limit is {PERSONAS_NICKNAME_MAX_LIMIT} characters
      </p>
      <InputWrapper>
        <input
          type="text"
          placeholder="Please enter a nickname"
          maxLength={PERSONAS_NICKNAME_MAX_LIMIT}
          value={personaName}
          onChange={(e) => setPersonaName(e.target.value)}
          style={{ flex: "1 0 auto", padding: "0 16px" }}
        />
        <Button>register</Button>
      </InputWrapper>
      <p
        style={{
          color: COOLORS.secondary,
          fontSize: "12px",
          visibility: duplicateNameError ? "visible" : "hidden",
        }}
      >
        Nickname {duplicateNameError} already exists
      </p>
    </form>
  );
};
