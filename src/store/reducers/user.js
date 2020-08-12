import { SET_USER } from '../constants';

const handlers = {
  [SET_USER]: (state, { user }) => ({
    ...state,
    user
  }),
  DEFAULT: (state = { user: null }) => ({
    ...state
  })
};

const userReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};

export default userReducer;