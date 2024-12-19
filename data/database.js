import { MongoClient, ServerApiVersion } from 'mongodb';

// const connectionProtocol = process.env.MONGODB_CONNECTION_PROTOCOL;
// const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
// const dbUser = process.env.MONGODB_USERNAME;
// const dbPassword = process.env.MONGODB_PASSWORD;
// const dbName = process.env.MONGODB_DB_NAME;

const connectionProtocol = "mongodb+srv";
const clusterAddress = "cluster0.z1l2m.mongodb.net";
const dbUser = "MW";
const dbPassword = encodeURIComponent("zaq1@WSX");
const dbName = "Cluster0";

const uri = `${connectionProtocol}://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority&appName=${dbName}`;
// const client = new MongoClient(uri);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

console.log('Trying to connect to db');

// try {
//   await client.connect();
//   await client.db(dbName).command({ ping: 1 });
//   console.log('Connected successfully to server');
// } catch (error) {
//   console.log('Connection failed.');
//   await client.close();
//   console.log('Connection closed.');
//   process.exit(1);
// }
//
// const database = client.db(dbName);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const database = client.db(dbName);
export default database;
