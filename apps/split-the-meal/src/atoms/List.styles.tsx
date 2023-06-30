import styled from "@emotion/styled";
import { COOLORS } from "../utils/coolors";

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

export const ListItem = styled.li`
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

export const ListRemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  word-break: keep-all;
`;
