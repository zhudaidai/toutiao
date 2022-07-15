// 封装  获取  和  存储  和删除 到本地的方法

import storage from './storage'
const TOKEN_KEY = 'HEIA_TOUTIAO_TOKEN'

export const getToken = () => storage.get(TOKEN_KEY)

export const setToken = (token) => storage.set(TOKEN_KEY, token)

export const removeToken = () => storage.remove(TOKEN_KEY)
