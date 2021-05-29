import { Text } from "../../util-components";

import { SingleUserRowWrapper, SingleUserRowFormWrapper } from "./components";

export const SingleUser = ({ username, createdAt, role }) => {
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

      <SingleUserRowFormWrapper></SingleUserRowFormWrapper>
    </SingleUserRowWrapper>
  );
};
