import Layout from "../../common/layout/Layout";
import { useUsersPage } from "../../../hooks";
import { Spinner } from "../../common/spinner/Spinner";
import { SingleUser } from "./SingleUser";

const UsersPage = () => {
  const { data, loading, assignRoleHandler, assignRoleLoading } =
    useUsersPage();
  return (
    <Layout>
      {loading && <Spinner />}
      {data &&
        data?.getAllUsers?.map((user) => {
          return (
            <SingleUser
              key={user.id}
              {...user}
              assignRoleHandler={assignRoleHandler}
              assignRoleLoading={assignRoleLoading}
            />
          );
        })}
    </Layout>
  );
};

export default UsersPage;
