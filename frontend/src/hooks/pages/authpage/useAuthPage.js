import { useRouteMatch } from 'react-router-dom';
import useAuth from '../../common/auth/useAuth';

const useAuthPage = () => {
  const {
    params: { authType },
  } = useRouteMatch('/auth/:authType');

  return {
    authType:
      authType === 'login'
        ? 'login'
        : authType === 'register'
        ? 'register'
        : 'login',
  };
};

export default useAuthPage;
