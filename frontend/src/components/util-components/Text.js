import styled from "styled-components";

export const Text = styled.div`
  font-family: ${({ fontFamily }) => fontFamily || "Helvetica"};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  color: ${({ color }) => color || "black"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  border: ${({ border }) => border || "auto"};
  text-decoration: ${({ textDecoration }) => textDecoration || "auto"};
`;
