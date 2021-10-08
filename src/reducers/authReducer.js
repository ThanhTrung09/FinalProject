
const initialState = {
  userInfo: null,
  token: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      console.tron.log(action.data)
      return {
        ...state,
        token: action.data.data?.token,
        userInfo: action.data.data?.userInfo?.[0]
      };
    default:
      return state;
  }
}