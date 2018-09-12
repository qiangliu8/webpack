import { dispatch } from "../../node_modules/rxjs/internal/observable/range";
import { Toast } from 'antd-mobile'
import axios from 'axios'
import { getRedirectPath } from '../util/util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo:'',
    msg: '',
    user: '',
    type:''
}
export function user (state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, msg: '', redirectTo:getRedirectPath(action.playload),...action.playload }
        case LOAD_DATA:
            return {...state,...action.playload}
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state
    }
}


//登录成功返回
function authSuccess (data) {
    return {type:AUTH_SUCCESS,playload:data}
}

//错误返回信息
function errorMsg (msg) {
    Toast.info(msg, 2, null, false);
    return { msg, type: ERROR_MSG }
}

//登录操作
export function login ({ user, pwd }) {
    if (!user || !pwd ) {
        return errorMsg('用户名密码必须输入！')
    }
    return dispatch => {
        axios.post('/user/login', { user, pwd })
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

//注册操作
export function register ({ user, pwd, repeatpwd,type }) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入！')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('两次密码必须输入一致！')
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd, type })
            .then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess({ user, type }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

//获取用户信息
export function getUserInfo (userinfo) {
    return { type: LOAD_DATA, playload: userinfo }

}

export function getUserInfos () {
    return dispatch => {
        axios.get('/user/info').then(res => {
            if (res.status === 200) {
                if (res.data.code === 0) {
                
                } else {
                    this.props.loadData(res.data.data)
                    this.props.history.push('/communitylogin')
                }
            }
        })
    }

}

//保存用户完善信息
export function updateInfo (data) {
    return dispatch => {
        axios.post('/user/update', data)
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
            }
        })
    }
}