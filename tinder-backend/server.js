//require("dotenv").config();
import express from "express";
const app=express();
import Cards from './dbCards.js';
import Cors from "cors";
import "./conn.js";
const port=8003

app.use(express.json())
app.use(Cors());

app.get('/', (req,res)=>res.status(200).send("hey bro"));

app.post("/tinder/cards", (req, res) => {
    // save request body into a var
    const dbCard = req.body;
    //   function to create a new document
    Cards.create(dbCard, (err, data) => {
      // if there is error
      if (err) {
        // set response to 500, which means internal server error and send error back
        res.status(500).send(err);
      } else {
        // 201 means created, successfully created our data and send back the data
        res.status(201).send(data);
      }
    });
  });
  
  // another endpoint (the same) which will download data from the db
  // with this will be retrieving every single thing from the collection DB that we just created
  app.get("/tinder/cards", (req, res) => {
    //   function to find a card
    Cards.find((err, data) => {
      // if there is error
      if (err) {
        // set response to 500, which means internal server error and send error back
        res.status(500).send(err);
      } else {
        // 200 means found
        res.status(200).send(data);
      }
    });
  });


app.listen(port,()=>{
    console.log(`Listening ${port}`);
});



























// import express from 'express';
// import mongoose from 'mongoose';
// import Cards from './dbCards.js';

// //APP config
// const app = express();
// const port=process.env.PORT || 8001
// const connection_url ='mongodb+srv://ijoysinha:tinder@cluster0.swtb7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// //middleware

// //DB Config
// mongoose.connect(connection_url,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });

// //API End points
// app.get('/', (req,res)=>res.status(200).send("hey bro"));

// app.post("/tinder/cards", (req, res) => {
//     // save request body into a var
//     const dbCard = req.body;
//     //   function to create a new document
//     Cards.create(dbCard, (err, data) => {
//       // if there is error
//       if (err) {
//         // set response to 500, which means internal server error and send error back
//         res.status(500).send(err);
//       } else {
//         // 201 means created, successfully created our data and send back the data
//         res.status(201).send(data);
//       }
//     });
//   });
  
//   // another endpoint (the same) which will download data from the db
//   // with this will be retrieving every single thing from the collection DB that we just created
//   app.get("/tinder/cards", (req, res) => {
//     //   function to find a card
//     Cards.find((err, data) => {
//       // if there is error
//       if (err) {
//         // set response to 500, which means internal server error and send error back
//         res.status(500).send(err);
//       } else {
//         // 200 means found
//         res.status(200).send(data);
//       }
//     });
//   });




// //listeners
// app.listen(port,()=> console.log(`listening : ${port}`));