export interface Post {
  body: string
  id: number
  title: string
  userId: number
  user?: User
}

export interface User {
  name: string
  id: number

}
