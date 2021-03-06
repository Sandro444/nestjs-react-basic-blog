import styled from "styled-components";

export const BlogPreviewWrapper = styled.div`
  width: 60%;
  height: 280px;
  margin: 5px;
  border: 2px solid black;
  display: grid;
  grid-template-rows: 3fr 4fr 1fr;
  box-sizing: border-box;
`;

export const BlogPreviewHeader = styled.div`
  border-bottom: 1px solid black;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const BlogSeeMoreButton = styled.button`
  width: 50px;
  height: 20px;
  background-color: white;
  border: 1px solid black;
  color: red;
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
