const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors()); // Use the CORS middleware
app.use(express.json());

const replicateApiUrl = "https://api.replicate.com/v1/predictions";
const token = "r8_Lo4XHmskRjHV2p9YKsWH6dsxuwXjgkZ0ewxJn";

app.post("/makePrediction", async (req, res) => {
  const data = req.body; // Data to be forwarded to the Replicate API

  try {
    const response = await axios.post(replicateApiUrl, data, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("in post js");

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error making the prediction request:", error);
    res.status(500).send("Error making the prediction request");
  }
});
app.get("/makePrediction", async (req, res) => {
  const { url } = req.query;
  const decodedUrl = decodeURIComponent(url);
  console.log(decodedUrl);
  let predictionStatus = "processing";
  let response;


  while (predictionStatus === "processing" || predictionStatus === "starting") {
    response = await axios.get(decodedUrl, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    predictionStatus = response.data.status;
    console.log("Prediction status:in", predictionStatus);
    if (predictionStatus === "succeeded" || predictionStatus === "failed") {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  console.log("in get js");
  console.log("Prediction status:", predictionStatus);
  res.json(response.data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Hey Express Server running on port ${PORT}`);
});
