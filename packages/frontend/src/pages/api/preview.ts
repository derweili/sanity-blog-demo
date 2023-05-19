import type { NextApiRequest, NextApiResponse } from 'next'
import { draftMode } from 'next/headers';

export default function preview(req: NextApiRequest, res: NextApiResponse) {

	// get slug query arg
	const { slug } = req.query

	res.setPreviewData({})
	res.writeHead(307, { Location: slug ? `/movie/${slug}` : '/' })
	res.end()
}