import Axios from 'axios'

const axiosInst = Axios.create({
  headers: {
    'Authorization': ''
  },
  baseURL: process.env.NODE_ENV === 'production' ? '/api/' : '/'
})

function request(url, data = {}, method = 'get', options = {}) {
  return new Promise((resolve, reject) => {
    const _method = method.toLowerCase()
    if (_method === 'get') {
      const search = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
      url += `?${search}`
    }
    axiosInst[_method](url, data, options)
      .then(res => {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          throw res.data.message
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default request