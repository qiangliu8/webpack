import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Radio,Button} from 'antd-mobile'
// import { createForm } from 'rc-form';
import  axios  from 'axios'
import { withRouter,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/user.redux'
import '../../scss/register.scss'

@withRouter
@connect(
  state => state.user,
  { getUserInfo }
)
class AuthRoute extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const publicList = ['/communitylogin','/register','/accountlogin']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
          if (res.data.code === 0) {
            this.props.getUserInfo(res.data.data)
          } else {
              this.props.history.push('/communitylogin')
          }
      }
  })
  }
  render () {
    return (<div>
       {/* {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/>:null} */}
    </div>)
  }
}
export default AuthRoute