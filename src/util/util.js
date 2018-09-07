export function getRedirectPath ({type,avator}) {
  //更具用户信息 返回跳转地址
  let url = (type === 'bachelor') ? '/bachelor' : '/matcher'
  if (!avator) {
    url +='info'
  }
  return url
}
