const nodemailer = require("nodemailer");

const NAME = "Meaghan Bradtke";
const EMAIL = "meaghan.bradtke98@ethereal.email";
const PASSWORD = "PbApbxq2bzNxv3nbgY";

// transport which knows where/to which server, 
// the email has to be sent to
const transport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587, //465
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

transport
  .sendMail({
    from: "Bushra <bushjabeen22@gmail.com",
    to: "jabeen@gmail.com",
    subject: "Your C1 score",
    text: "Your C1 score is: 10/10",
  })
  .then((info) => {
    console.log("Mail sent successfully", info);
  });
