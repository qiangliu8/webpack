import { combineReducers } from 'redux'
import { user } from './user.redux'
import { chatuser } from './chatuser.redux'
import { Chat } from './chat.redux'
export default combineReducers({ user, chatuser, Chat })