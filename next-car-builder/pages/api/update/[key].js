// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { update } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  const block = await update(req.query.key, JSON.parse(req.body).value)

  console.log(block)

  res.status(200).json(block)
}
