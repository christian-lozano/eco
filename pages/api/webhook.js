export default function handler(req, res) {
    if (req.method === "GET") {
      console.log(req.body);
      res.status(200).json({ req: req.body });
    } else {
      return res.status(200).json("gettin products");
    }
  
    //   res.json({
    //     Payment: req.query.payment_id,
    //     Status: req.query.status,
    //     MerchantOrder: req.query.merchant_order_id,
    //   });
  }