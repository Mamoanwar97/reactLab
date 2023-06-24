import { COOLORS } from "../utils/coolors";
import styled from "@emotion/styled";

export const ListWrapper = styled.ul`
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
