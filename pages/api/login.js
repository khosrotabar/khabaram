const https = require("https");
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const mobile = req.body.mobile;

    const code = Math.floor(Math.random() * 90000) + 10000;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    const db = client.db();

    const results = await db
      .collection("users")
      .find({ mobileNumber: mobile })
      .toArray();

    const products = JSON.parse(JSON.stringify(results));

    if (products.length > 0) {
      const results2 = await db.collection("users").updateOne(
        { mobileNumber: mobile },
        {
          $set: {
            mobileCode: code.toString(),
          },
        }
      );

      console.log(results2);
    }

    const data = JSON.stringify({
      from: "50004001070553",
      to: mobile,
      text: code.toString(),
    });

    const options = {
      hostname: "console.melipayamak.com",
      port: 443,
      path: "/api/send/simple/cf6baf42b39547ada7e2f64d2cbc9b00",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    const request = https.request(options, (response) => {
      res.status(200).json(response.statusCode);

      response.on("data", (d) => {
        process.stdout.write(d);
      });
    });

    request.on("error", (err) => {
      res.status(500).json(err);

      console.log(err);
    });

    request.write(data);
    request.end();

    client.close();
  }
}

export default handler;
