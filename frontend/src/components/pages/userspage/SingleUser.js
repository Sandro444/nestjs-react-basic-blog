import { Text, Button } from "../../util-components";

import { SingleUserRowWrapper, SingleUserRowFormWrapper } from "./components";

const roleNames = {
  user: "user",
  publisher: "publisher",
  administrator: "administrator",
};

export const SingleUser = ({
  username,
  createdAt,
  id,
  role,
  assignRoleHandler,
  assignRoleLoading,
}) => {
  return (
    <SingleUserRowWrapper>
      <div>
        <Text fontSize="16px" margin={0} padding={0}>
          username - {username}
        </Text>
        <Text fontSize="14px" margin={0} padding={0}>
          join date - {createdAt}
        </Text>
        <Text fontSize="12px" margin={0} padding={0}>
          role - {role?.name}
        </Text>
      </div>

      <SingleUserRowFormWrapper>
        <Button
          padding="5px"
          margin="10px"
          onClick={() => assignRoleHandler(id, "User")}
          disabled={assignRoleLoading || role.name === roleNames.user}
        >
          user
        </Button>
        <Button
          padding="5px"
          margin="10px"
          onClick={() => assignRoleHandler(id, "Publisher")}
          disabled={assignRoleLoading || role.name === roleNames.publisher}
        >
          publisher
        </Button>
        <Button
          padding="5px"
          margin="10px"
          onClick={() => assignRoleHandler(id, "Administrator")}
          disabled={assignRoleLoading || role.name === roleNames.administrator}
        >
          administrator
        </Button>
      </SingleUserRowFormWrapper>
    </SingleUserRowWrapper>
  );
};
