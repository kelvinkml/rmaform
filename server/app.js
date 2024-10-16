const express = require("express");
const cors = require("cors");
const postmark = require("postmark");
const app = express();
const port = 8000;

const client = new postmark.ServerClient(
  "1b36befa-2dbe-4ab8-b60e-ba5c02161a16"
);

app.use(cors());
app.use(express.json({ limit: "25mb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, () => {
  console.log(`nodemailer spike is listening on port localhost:${port}`);
});

const sendMail = (params) => {
  return client.sendEmail({
    From: "kelvin.leeming@gamma.co.uk",
    To: "kelvin.leeming@gamma.co.uk",
    Subject: params.subject,
    HtmlBody: `<strong>PL+ RMA</strong><br><br> ${params.message}.`,
    TextBody: params.message,
    MessageStream: "broadcast",
  });
};

app.get("/", (req, res) => {
  sendMail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/sendMail", (req, res) => {
  sendMail(req.body)
    .then((response) => res.send(response.MessageID))
    .catch((error) => res.status(500).send(error.message));
});
