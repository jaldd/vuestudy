import request from '@/utils/request'

export function login(data) {
  const res = request({
    url: '/user/login',
    method: 'post',
    data
  });
  console.log(res)
  return res;
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
