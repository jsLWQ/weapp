import { GET, POST } from '@/mini-lib/httpRequest'

export function getIndex (params = {}) {
  return new Promise((resolve,reject) => {
    GET({
      url: '',
      params,
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}