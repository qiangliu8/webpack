import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Radio,Button} from 'antd-mobile'
// import { createForm } from 'rc-form';
import  axios  from 'axios'
import { withRouter } from 'react-router-dom'
import '../../scss/register.scss'

@withRouter
class AuthRoute extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const publicList = ['/communitylogin','/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          
        } else {
          this.props.history.push('/communitylogin')
        }
      }
    })
  }
  render () {
    return <div></div>
  }
}
export default AuthRoute