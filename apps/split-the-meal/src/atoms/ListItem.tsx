import { COOLORS } from "../utils/coolors";
import styled from "@emotion/styled";

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
