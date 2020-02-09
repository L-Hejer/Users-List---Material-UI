import {
  USER_LOADING,
  LOADING_FAIL,
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from '../const/actionTypes';

const initialState = {
  isLoading: false,
  user: { name: '', surName: '', birthYear: '', birthPlace: '' }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
        user: action.payload
      };
    case LOADING_FAIL:
      return {
        ...state,
        isLoading:false,
        user: null
      };
    default:
      return state;
  }
}
