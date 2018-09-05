export function user(state = initState, action) {
  switch (action.type) {
      case AUTH_SUCCESS:
          return {...state, msg: '', ...action.playload }
      case ERROR_MSG:
          return {...state, msg: '', msg: action.msg }
      case LOAD_DATA:
          return { ...state, ...action.playload }
      default:
          return state
  }
}