import { ApolloProvider } from '@apollo/client'
import { Box, Button, Container } from '@chakra-ui/react'
import SimpleSidebar from '@components/Layout'
import Nav from '@components/Layout/Nav'
import '@styles/globals.css'
import Theme from '@theme'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const PreviewButton = dynamic(() => import('@modules/PreviewButton'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default function App({ Component, pageProps }: AppProps) {
  const {preview = false} = pageProps
  return (
    <Theme>
      <Nav />
      {/* Spacer */}
      <div style={{ height: '32px' }} />
      <Container maxW={'1200'}>
        <Component {...pageProps} />
      </Container>

      {/* Floating bot on bottom right */}
      {
        preview && (
          <PreviewButton />
        )
      }
    </Theme>
  )
}
