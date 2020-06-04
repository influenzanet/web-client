import { useDispatch } from 'react-redux';
import { apiActions } from '../store/api/apiSlice';
import { setDefaultAccessTokenHeader } from '../api/instances/auth-api-instance';
import { removePersistedState } from '../store/localStorage';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../routes';


export const useLogout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return () => {
    dispatch(apiActions.setState({
      accessToken: '',
      refreshToken: '',
      expiresAt: 0,
    }));
    setDefaultAccessTokenHeader('');
    removePersistedState();
    history.replace(AppRoutes.UserAuth);
  }
}
