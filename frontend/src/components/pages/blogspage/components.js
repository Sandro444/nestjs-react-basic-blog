import styled from 'styled-components';

export const BlogPreviewWrapper = styled.div`
  width: 60%;
  height: 140px;
  margin: 5px;
  border: 2px solid black;
  display: grid;
  grid-template-rows: 2fr 4fr 1fr;
  box-sizing: border-box;
`;

export const BlogPreviewHeader = styled.h2`
  border-bottom: 1px solid black;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const BlogPreviewContent = styled.p`
  color: grey;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`;

export const BlogPreviewButtons = styled.div`
  display: flex;
  justify-content: center;
`;
