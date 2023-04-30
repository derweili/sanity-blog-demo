import Head from 'next/head'
import { Inter } from 'next/font/google'
import MoviesArchiveView from '@views/MoviesArchiveView'
import { SanityNews, getNews, sanityClient } from '@data'
import { SanityMovie, getMovies } from '@data'
import { PreviewSuspense } from "next-sanity/preview";
import MoviesArchiveViewPreview from '@views/MoviesArchiveViewPreview'
import { GetServerSideProps } from 'next'
import NewsTickerView from '@views/NewsTickerView'

type Props = {
  preview?: boolean
  movies?: SanityMovie[]
}

export default function Home({preview , movies, news}: any) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="http://localhost:3100/" />
      </Head>
      <main>
        {preview &&
          (
            <PreviewSuspense fallback="Loading...">
              <MoviesArchiveViewPreview />
            </PreviewSuspense>
          )
        }
        {
          !preview && (
            <>
              <MoviesArchiveView movies={movies} />
            </>
          )
        }
      </main>
    </>
  )
}

export const getServerSideProps : GetServerSideProps<Props> = async ({preview = false, query}) => {

  if (preview) {
    return { props: { preview } };
  }

  const movies: SanityMovie[] = await getMovies(sanityClient) || []

  return {
    props: {
      movies
    },
  }
}