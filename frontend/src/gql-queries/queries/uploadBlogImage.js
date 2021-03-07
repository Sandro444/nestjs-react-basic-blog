import { gql } from '@apollo/client';
const uploadBlogImage = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default uploadBlogImage;
