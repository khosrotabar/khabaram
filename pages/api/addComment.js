import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userMobile, comment, scoreVal } = req.body;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.gfww0.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    if (comment.text == "" || comment.title == "") {
      res.status(400).json("emptyFields");
      client.close();
    }

    const db = client.db();

    try {
      const results = await db.collection("comments").insertOne(comment);

      res.status(200).json("addCommentSuccess");
      console.log(results);
    } catch (err) {
      res.status(500).json("addCommentFailed");
    }

    const results2 = await db
      .collection("products-bed-services")
      .find({ code: comment.product })
      .toArray();

    const product = JSON.parse(JSON.stringify(results2));
    const productScore = product[0].score;

    const isSameScore = productScore.find((item) => item.user == userMobile);

    const newScore = {
      user: userMobile,
      score: scoreVal,
    };

    if (isSameScore == undefined) {
      try {
        const results3 = await db.collection("products-bed-services").updateOne(
          { code: comment.product },
          {
            $push: {
              score: newScore,
            },
          }
        );

        console.log(results3);
      } catch (err) {
        res.status(500).json("updateScoreFailed");
      }
    } else if (isSameScore !== undefined) {
      const objIndex = productScore.findIndex(
        (item) => item.user == userMobile
      );

      productScore[objIndex].score = scoreVal;

      const results4 = await db.collection("products-bed-services").updateOne(
        { code: comment.product },
        {
          $set: {
            score: productScore,
          },
        }
      );

      console.log(results4);
    }

    client.close();
  }
}

export default handler;
