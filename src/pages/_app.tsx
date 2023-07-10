import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider,QueryClient } from 'react-query'
import { QueryClientConfig } from 'react-query'
import { ContextProvider } from '@/context/ContextProvider'
import { UseQueryResult } from 'react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ContextProvider>
)
}
