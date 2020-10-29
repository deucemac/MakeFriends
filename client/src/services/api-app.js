import api from './api-helper'

export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const getUserFriends = async (id) => {
  const response = await api.get(`users/${id}/friendships`)
  return response.data.filter(friend=> friend.status ===1)
}

export const getUserFriendRequests = async (id) => {
  const response = await api.get(`users/${id}/friendships`)
  return response.data.filter(friend=> friend.status !== 1)
}

export const sendFriendRequest = async (id, addresseeId, status) => {
  const resp = await api.post(`users/${id}/friendships`, {
    requester_id: id,
    addressee_id: addresseeId,
    status: status
  })
  return resp.data
}

export const acceptOrDeny = async (id, friendship_id, status) => {
  const resp = await api.put(`users/${id}/friendships/${friendship_id}`, { status: status })
  return resp.data
}

export const denyFriendship = async (id, friendship_id) => {
  const resp = await api.delete(`/users/${id}/friendships/${friendship_id}`)
  return resp.data
}

export const getFriendFromFriendship = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}

export const updateUserStatus =async (id, status)=>{
  const resp = await api.put(`/users/${id}`, { status: status })
  return resp.data
}

export const getOnlineUsers = async () => {
  const resp = await api.get('/users/online')
  return resp.data
}