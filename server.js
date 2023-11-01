// import express from "express";
import cors from 'cors'

import {MongoClient} from "mongodb";

const app = express()

app.use(express.json());

app.use(cors());



const router = express.Router();



router.post('/getusers', async (req, res) => {
  try {
    const uri = "mongodb+srv://testac042:qrBNlA5NMpGYDm3h@testleet.y9jtdbz.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();

    const dbName = "student";
    console.log("hello1")
    const collectionName = "user";
    console.log("hello2")
    const database = client.db(dbName);
    console.log("hello3")
    // const collection = database.collection(collectionName);  
    console.log("hello4")
    const users = await  await database.collection(collectionName).find().toArray();
    console.log(users)
    res.json(users);
    console.log("hello5")
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

app.use('/auth', router)

// Create references to the database and collection in order to run
// operations on them.




const port = 3333
app.listen(port, ()=> console.log(`Server Running on ${port}`));

