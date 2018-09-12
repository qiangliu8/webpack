export function getRedirectPath ({type,avator}) {
  //更具用户信息 返回跳转地址
  let url = (type === 'epicure') ? '/epicure' : '/cook'
  if (!avator&&avator!==0) {
    url +='info'
  }
  return url
}
