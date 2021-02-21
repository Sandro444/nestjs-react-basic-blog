import styled from 'styled-components';

export const AuthPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormFieldWrapper = styled.div`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 15px;
  border-bottom: 2px solid grey;
`;

export const FormButtonWrapper = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  color: white;
  margin-top: 10px;
  border-radius: 20px;
  background-color: red;
  border: none;
`;
