import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51NLNdaSA2gDnvoeYRPCsW2yyEmO00nyMHLHu8SRecXL6MCmZL3jsNmfaPs9Wq8Ztw0ACvZTq98xRejRw4HA398VE00YJTMgfuT"
);

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const { total } = request.body;
  console.log("Payment Received BOOM!!! for this amount >>>>>>>", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100, // Convert to cents
      currency: "usd",
    });

    console.log("clients", paymentIntent);

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    response.status(500).send({
      error: "Failed to create payment intent.",
    });
  }
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http function initialized (http://127.0.0.1:5001/clone-3194a/us-central1/api)
