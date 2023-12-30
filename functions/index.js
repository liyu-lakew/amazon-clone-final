const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  'sk_test_51OPgVaLEnGtXJ3In2mKyGZCHxkZ8oEDlXplekKtpuPCdPnSlmCVpYvLsPTRlTU3kRrmPDcDCRw5hivkyWuioWTvt00SkQgaaM3'
);

// - App config
const app = express();

// - Middlewears
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));



app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    // Subunits of the currency
    currency: "usd",
  });

  // Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// // - Listen Command
exports.api = functions.https.onRequest(app);  

