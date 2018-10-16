import fetch from '@/utils/fetch'


export function joinProject(data) {
  return fetch({
    url:'?m=api&c=project&a=pullMember',
    method:'post',
    data
  })
}
