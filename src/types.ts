import type { Ref } from 'vue'

export interface Post {
  body: string
  id: number
  title: string
  userId: number
  user?: User
}

export interface User {
  id: number
  name: string
  username?: string
}

export interface InputOptions {
  label: string
  type: string
  placeholder?: string
  targetRef: Ref<string>
}

export interface SmallText {
  text: string
  link: string
  linkText: string
}
