const nodemailer = require("nodemailer");
const { readFileSync } = require("fs");

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

// transport
//   .sendMail({
//     from: "Bushra <bushjabeen22@gmail.com",
//     to: "jabeen@gmail.com",
//     subject: "Your C1 score",
//     text: "Your C1 score is: 10/10",
//   })
//   .then((info) => {
//     console.log("Mail sent successfully", info);
//   });

transport
  .sendMail({
    from: "Bushra <bushjabeen22@gmail.com",
    to: "jabeen@gmail.com",
    subject: "Cute dog",
    text: "Hello",
    html: readFileSync("./index.html"),
    //html: "<h1>Hello world</h1> <img src='https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmx1ZmZ5JTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80/ />",
  })
  .then((info) => {
    console.log("Mail sent successfully", info);
  });

// const template = hbs.compile(readFileSync("./login.hbs", "utf-8"));

// transport
//   .sendMail({
//     from: "Bushra <bushjabeen22@gmail.com",
//     to: "jabeen@gmail.com",
//     subject: "Login success",
//     html: template({
//       username: "Bush",
//       age: 21,
//       eligibility: "Eligible",
//     }),
//   })
//   .then((info) => {
//     console.log("Mail sent successfully", info);
//   });
