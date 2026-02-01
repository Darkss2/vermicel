export default function handler(req, res) {
  res.status(200).json({
    message: "This will create Chargily payment in real version",
    checkout_url: "/success.html"
  });
}
