import { useAxios } from '@vueuse/integrations/useAxios'
import { axiosInstance } from './axiosInstance'
import type { Post } from '@/types'

export const indexPosts = (params?: any) =>
  useAxios('/posts', { params }, axiosInstance)

export const showPost = (id: any) =>
  useAxios(`/posts/${id}`, axiosInstance)

export const updatePost = (id: number, data: Post) =>
  useAxios(`/posts/${id}`, {
    method: 'PUT',
    data,
  }, axiosInstance)

export const createPost = (data: Post) =>
  useAxios('/posts', {
    method: 'POST',
    data,
  }, axiosInstance)

export const deletePost = (id: number) =>
  useAxios(`/posts/${id}`, {
    method: 'DELETE',
  }, axiosInstance)

