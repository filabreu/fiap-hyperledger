// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieve } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  const block = await retrieve(req.query.key)

  res.status(200).json(block)
}
