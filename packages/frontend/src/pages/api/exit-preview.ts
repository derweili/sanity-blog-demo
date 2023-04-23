import type { NextApiRequest, NextApiResponse } from 'next'

export default function exitPreview(req: NextApiRequest, res: NextApiResponse) {

	const { path = '/' } = req.query

	res.clearPreviewData({})
	res.writeHead(307, { Location: path ? `${path}` : '/' })
	res.end()
}