import { useAxios } from '@vueuse/integrations/useAxios'
import type { Ref } from 'vue'
import { axiosInstance } from './axiosInstance'
import type { User } from '@/types'

export const indexUsers = (params?: any) =>
  useAxios('/users', { params }, axiosInstance)

export const showUser = (id: Ref<string | number>) => {
  return useAxios(`/users/${id.value}`, axiosInstance)
}

export const updateUser = (id: number, data: User) =>
  useAxios(`/users/${id}`, {
    method: 'PUT',
    data,
  }, axiosInstance)

export const createUser = (data: User) =>
  useAxios('/users', {
    method: 'POST',
    data,
  }, axiosInstance)

export const deleteUser = (id: number) =>
  useAxios(`/users/${id}`, {
    method: 'DELETE',
  }, axiosInstance)
