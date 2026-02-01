export default function handler(req, res) {
  console.log("Chargily webhook received:", req.body);
  res.status(200).json({ received: true });
}
