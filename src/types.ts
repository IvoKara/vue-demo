import type { ViteSSGContext } from 'vite-ssg'
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

export interface MenuItem {
  name: string
  link: string
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

export interface Credentials {
  username: string
  password: string
  confirmPass?: string
}

export interface QuillOptions {
  debug?: string
  placeholder?: string
  theme: string
  modules?: {
    toolbar: any
  }
}

export type UserModule = (ctx: ViteSSGContext) => void
