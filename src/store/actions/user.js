import { SET_USER } from '../constants';

export const setUser = (user) => {
  console.log('HERE: ', user);

  return {
    type: SET_USER,
    payload: user
  }
};
