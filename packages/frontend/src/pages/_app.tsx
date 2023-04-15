import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@data/client'
import '@styles/globals.css'
import Theme from '@theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ApolloProvider>
  )
}
