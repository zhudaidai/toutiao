
class Storage {
  // 存储到本地
  set (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  // 取出本地存储
  get (key) {
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }

  // 删除本地存储
  remove (key) {
    localStorage.removeItem(key)
  }
}
const storage = new Storage()
export default storage
