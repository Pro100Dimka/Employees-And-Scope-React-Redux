import { APP_ACTIONS } from './actions';

function getInitialState() {
  return {
    selectedJob: null,
  };
}
const INITIAL_STATE = getInitialState();

const state2ActionMapping = {
  [APP_ACTIONS.APP_FILTER_EMPLOYEES]: (state, action) => {
    return {
      ...state,
      selectedJob: action.payload,
    };
  },
};

const appReducer = (state = INITIAL_STATE, action) => {
  return state2ActionMapping[action.type]
    ? state2ActionMapping[action.type](state, action)
    : state;
};
export default appReducer;
