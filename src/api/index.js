import instance from './config'
// 获取系统信息
export const getIndex = () => {
  return instance.get('/index/index.md')
}
