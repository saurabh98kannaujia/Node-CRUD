
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoos = require("mongoose")
const uri = "mongodb+srv://saurabhk1824:xisFDdQwwWZ9g55r@spgamer.vektz7g.mongodb.net/?retryWrites=true&w=majority&appName=spgamer";


dbConnect = async() => {
  try {
    console.log("OKO")
    const t = await mongoos.connect(uri)
    console.log("OKOqqq")

  } catch(error) {

  }
}


module.exports = dbConnect
