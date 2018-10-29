import { combineReducers } from 'redux'
import { user } from './user.redux'
import { chatuser } from './chatuser.redux'

export default combineReducers({ user,chatuser})