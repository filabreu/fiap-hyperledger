// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { create } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  await create(req.query.key, JSON.stringify(req.body))

  res.status(201).json(JSON.stringify({ message: 'created'}))
}
