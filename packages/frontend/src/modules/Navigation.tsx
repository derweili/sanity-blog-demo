'use client'
import Nav from '@components/Nav'
import { SanityNews, getNews, sanityClient } from '@data'
import NewsTickerView from '@views/NewsTickerView'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Navigation = (props: Props) => {

	const pathname = usePathname()

	return <Nav currentPath={pathname || ''}/>

}

export default Navigation