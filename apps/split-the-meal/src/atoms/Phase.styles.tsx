import styled from "@emotion/styled";
import { COOLORS } from "../utils/coolors";

export const PhaseFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhaseBackground = styled.div`
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

export const PhaseTitle = styled.h1``;
