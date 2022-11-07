const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middle wares
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mxrfp9v.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    const serviceCollection = client.db('travelBee').collection('services');
    try {

    } finally {

    }
}
run().catch(err => console.log(err));


app.get('/', (req, res)=>{
    res.send('Travel bee server is running!')
});

app.listen(port, ()=>{
    console.log(`Travel bee server running on ${port}`)
})