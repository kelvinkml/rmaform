const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 8000;
const cors = require("cors");
const postmark = require("postmark");

const client = new postmark.ServerClient(
  "1b36befa-2dbe-4ab8-b60e-ba5c02161a16"
);

app.use(cors());
app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, () => {
  console.log(`nodemailer spike is listening on port localhost:${port}`);
});

// const sendEmail = (params) => {
//   return new Promise((resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       port: 587,
//       auth: {
//         user: "sibyl.prosacco19@ethereal.email",
//         pass: "WPMm65HRguhbHMfrMV",
//       },
//     });
//     const mailOptions = {
//       from: params.from,
//       to: params.to,
//       subject: params.subject,
//       text: params.message,
//     };
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.log(err);
//         return reject({ message: err });
//       }
//       return resolve({ message: "email sent" });
//     });
//   });
// };

const sendMail = (params) => {
  client.sendEmail({
    From: "kelvin.leeming@gamma.co.uk",
    To: "kelvin.leeming@gamma.co.uk",
    Subject: params.subject,
    HtmlBody: "<strong>Hello</strong> dear Postmark user.",
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
  sendMail(req.body);
  // .then(console.log(response))
  // .then((response) => res.send(response.message));
  // .catch((error) => res.status(500).send(error.message));
});
