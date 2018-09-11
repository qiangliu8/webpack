export function getRedirectPath ({type,avator}) {
  //更具用户信息 返回跳转地址
  let url = (type === 'eqicure') ? '/eqicure' : '/cook'
  if (!avator) {
    url +='info'
  }
  return url
}
