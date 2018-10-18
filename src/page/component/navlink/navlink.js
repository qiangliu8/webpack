import React from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

@withRouter
  
class NavLinkBar extends React.Component{
  static propTypes = {
    data:PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
  }
  render () {
    const navlist = this.props.data.filter(v => !v.hide)
    const { pathname } = this.props.location
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#515151"
          barTintColor="white"
        >{navlist.map(v => (
            <TabBar.Item
            title={v.text}
              key={v.path}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require(`assets/index/navlink/${v.icon}.png`)}) center center /  21px 21px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require(`assets/index/navlink/${v.icon}_select.png`)}) center center /  21px 21px no-repeat`
              }}
              />}
              selected={pathname === v.path}
              onPress={() => {
              this.props.history.push(v.path)
            }}>
          </TabBar.Item>
        ))}
        </TabBar>
      </div>
    )
  }
}

export default NavLinkBar