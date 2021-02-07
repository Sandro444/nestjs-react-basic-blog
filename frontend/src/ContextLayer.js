import { useReducer } from 'react';
import App from './App';
import {
  AuthContext,
  AuthReducer,
  initialState,
} from './context/authcontext/authContext';
export const ContextLayer = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <App />
    </AuthContext.Provider>
  );
};
