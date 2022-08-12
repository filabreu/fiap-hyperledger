// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { create, retrieve } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  await create(req.query.key, req.body)

  const block = await retrieve(req.query.key)

  console.log(block)

  res.status(200).json(block)
}
