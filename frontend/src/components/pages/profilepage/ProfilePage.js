import Layout from "../../common/layout/Layout";
import { useProfilePage } from "../../../hooks";

const ProfilePage = () => {
  const { userRole } = useProfilePage();
  return (
    <Layout>
      <h1>Profile Page</h1>
      <h1>User role {userRole} </h1>
    </Layout>
  );
};

export default ProfilePage;
