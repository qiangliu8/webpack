import React from 'react'
export function getRedirectPath ({type,avator}) {
  //更具用户信息 返回跳转地址
  let url = (type === 'epicure') ? '/epicure' : '/cook'
  if (!avator&&avator!==0) {
    url +='info'
  }
  return url
}

export function HocFrom(Comp){
  return class WrapperComp extends React.Component{
    constructor(props){
      super(props)
      this.state={}
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(key,val){
      this.setState({[key]:val})
    }
    render(){
      return <Comp handleChange= {this.handleChange} state={this.state} {...this.props}></Comp>
    }
  }
}