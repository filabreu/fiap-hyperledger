// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { create } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  const block = await create(req.query.key, JSON.parse(req.body).value)

  console.log(block)

  res.status(200).json(block)
}
