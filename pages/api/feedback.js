// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// server side code only
// this code will never exposed to our visitors
function handler(req, res) {

  res.status(200).json({ message: 'This works!' })
}

export default handler