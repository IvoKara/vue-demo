import { QueryClient, VUE_QUERY_CLIENT, dehydrate, hydrate } from 'vue-query'
import type { UserModule } from '@/types'

export const install: UserModule = ({ app, initialState, isClient }) => {
  const client = new QueryClient()

  if (!isClient)
    initialState.vueQueryState = { toJSON: () => dehydrate(client) }
  else
    hydrate(client, initialState.vueQueryState)

  client.mount()
  app.provide(VUE_QUERY_CLIENT, client)
}
