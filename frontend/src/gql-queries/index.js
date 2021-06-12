import LoginMutation from "./queries/login.js";
import RegisterMutation from "./queries/register";
import GetCurrentUserQuery from "./queries/getCurrentUser";
import AllBlogsQuery from "./queries/allBlogs";
import singleBlogQuery from "./queries/singleBlog";
import createBlogMutation from "./queries/createBlog";
import uploadBlogImageMutation from "./queries/uploadBlogImage";
import CreateCommentMutation from "./queries/createComment";
import getAllUsersQuery from "./queries/getAllUsers";
import AssignRoleMutation from "./queries/assignRole";
import commentAddedSubscription from "./queries/commentAdded";
import getTopBlogsQuery from "./queries/getTopBlogs";

export {
  getTopBlogsQuery,
  uploadBlogImageMutation,
  LoginMutation,
  RegisterMutation,
  GetCurrentUserQuery,
  AllBlogsQuery,
  singleBlogQuery,
  createBlogMutation,
  CreateCommentMutation,
  getAllUsersQuery,
  AssignRoleMutation,
  commentAddedSubscription,
};
