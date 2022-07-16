/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
import store from '@/store'
/**
 * 用户登录
 */
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
//  发送验证码 注意：每个手机号每分钟只能发送一次
export const sendSms = (mobile) => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

export const getUserInfo = () => {
  return request({
    url: '/v1_0/user',
    headers: {
      Authorization: `Bearer ${store.state.user.token}`
    }
  })
}
