import { resetAuth } from '../api/instances/auth-api-instance';
import { removePersistedState } from '../store/localStorage';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../routes';


export const useLogout = () => {
  const history = useHistory();

  return () => {
    resetAuth();
    removePersistedState();
    history.push(AppRoutes.UserAuth);
  }
}
