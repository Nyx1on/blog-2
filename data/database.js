const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

let database;

async function connect() {
    database = client.db('blog');
}

function getDb(){
    if(!database){
        throw { message: 'Database connection not estabilished!'};
    }
    return(database);
}

module.exports = {
    connectToDatabase: connect,
    getDb: getDb,
};

