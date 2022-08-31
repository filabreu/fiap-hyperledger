// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { exists } from '../../../blockchain/invoke'

export default async function handler(req, res) {
  const blockExists = await exists(req.query.key)

  console.log("blockExists", blockExists)

  if (blockExists === 'true') {
    res.status(200).json(JSON.stringify({ message: 'ok' }))
  } else {
    res.status(404).json(JSON.stringify({ message: 'not found' }))
  }
}
