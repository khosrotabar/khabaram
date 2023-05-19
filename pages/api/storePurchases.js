import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const {
      userMobile,
      currentAddress,
      products,
      finalPrice,
      payMethod,
      condition,
      delivered,
      returned,
      PaymentStatus,
    } = req.body;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    try {
      let options = { year: "numeric", month: "long", day: "numeric" };
      const date = new Date().toLocaleDateString("fa-IR", options);

      const purchaseData = {
        currentAddress: currentAddress,
        products: products,
        finalPrice: finalPrice,
        payMethod: payMethod,
        condition: condition,
        delivered: delivered,
        returned: returned,
        PaymentStatus: PaymentStatus,
        date: date,
      };

      for (var i = 0; i < products.length; i++) {
        const productNumbers = products[i].number;
        const productCode = products[i].code;

        const results = await db
          .collection("products")
          .findOne({ code: productCode });
        const product = JSON.parse(JSON.stringify(results));

        const stock = product.stock - productNumbers;

        const results2 = await db.collection("products").updateOne(
          { code: productCode },
          {
            $set: {
              stock: stock,
            },
          }
        );
      }

      const results = await db.collection("users").updateOne(
        { mobileNumber: userMobile },
        {
          $set: {
            shoppingCart: [],
          },
          $push: {
            purchases: purchaseData,
          },
        }
      );

      console.log(results);

      res.status(200).json({ purchaseSuccess: 1 });
    } catch (error) {
      console.log(error);
      res.status(400).json({ purchaseSuccess: 0 });
    }

    client.close();
  }
}

export default handler;
