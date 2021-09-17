// const express = require("express");

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// let accounts = [
//   {
//     id: 1,
//     username: "paulhal",
//     role: "admin",
//   },
//   {
//     id: 2,
//     username: "johndoe",
//     role: "guest",
//   },
//   {
//     id: 3,
//     username: "sarahjane",
//     role: "guest",
//   },
// ];

// app.get("/accounts", (request, response) => {
//   response.json(accounts);
// });

// app.get("/accounts/:id", (request, response) => {
//   const accountId = Number(request.params.id);
//   const getAccount = accounts.find((account) => account.id === accountId);

//   if (!getAccount) {
//     response.status(500).send("Account not found.");
//   } else {
//     response.json(getAccount);
//   }
// });

// app.get("/", (req, res) => {
//   res.render(__dirname + "/views/big.html");
// });

// app.listen(PORT, () =>
//   console.log(`Express server currently running on port ${PORT}`)
// );
//require our express package
const express = require("express");
const app = express();

//VIEW ENGINE -- Using EJS
app.set("view engine", "ejs");

//PARAMETERS
//path, (req, res, next)
app.get("/", (req, res) => {
  console.log("root");
  // res.json({ message: "Error" });
  // res.send("hi");
  //second parameter with object if you want to pass data down to the EJS page
  res.render("index", {
    text: "world",
  });
  // res.download("server.js");
});

//importing the USer routes and using app use
const userRouter = require("./routes/users");

app.use("/users", userRouter);
//listening on port 3000
app.listen(3000);
