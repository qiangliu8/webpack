import React from 'react'
import { NavBar, Icon ,List, InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import axios from 'axios'
import { connect } from 'react-redux'
// import { createForm } from 'rc-form';
import { Redirect } from 'react-router-dom'
import AvatorSelector from '../component/avator'
import '../../scss/info.scss'
import flavor from '../../assets/info/flavor.png'
import cuisine from '../../assets/info/cuisine.png'
import knife from '../../assets/info/knife.png'
import budget from '../../assets/info/budget.png'
@connect(
  state => state.user,
)

class Info extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  selectavator(img){
    this.setState({ avator: img })
  }

  hanleChange(key,val){
    this.setState({[key]:val})
  }

  render () {
    // const { getFieldProps } = this.props.form;
    return (
      <div className="container_info">
        <NavBar
            mode="light"
            onrightClick={() => console.log('onLeftClick')}
            rightContent="完成"
        >信息完善</NavBar>
        <AvatorSelector selectavator={img=>this.selectavator(img)}>

        </AvatorSelector>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <InputItem labelNumber={2}
        onChange={e=>this.hanleChange('flavor',e)}
        placeholder="快说说擅长烧什么菜">
          <img src={flavor} />
        </InputItem>
        <WhiteSpace size="md" />
        <InputItem labelNumber={2}
          type="digit"
          extra="个"
          onChange={e=>this.hanleChange('knife',e)}
        placeholder="最大安排量">
          <img src={knife} />
        </InputItem>
        <InputItem labelNumber={2}
        onChange={e=>this.hanleChange('cuisine',e)}
        placeholder="你的菜系">
          <img src={cuisine} />
        </InputItem>
        <InputItem labelNumber={2}
          type="digit"
          extra="元"
          onChange={e=>this.hanleChange('budget',e)}
        placeholder="开锅预算">
          <img src={budget} />
        </InputItem>
      </div>
    )
  }
}
// const Info = createForm()(Infos);
export default Info