// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { destroy } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  const block = await destroy(req.query.key)

  console.log(block)

  res.status(200).json(block)
}
