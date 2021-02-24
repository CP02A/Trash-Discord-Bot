const MongoClient = require('mongodb').MongoClient;
const uri = ""; // I removed it before uploading it
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
var dbConnection = client.connect();

exports.setPrefix = (serverId, prefix, callback) => {
	dbConnection.then(db => {
		db.db("trash").collection("prefix").update({"serverId": serverId}, {"prefix": prefix}, () => {
			callback();
		});
	});
}

exports.getPrefix = (serverId, callback) => {
	dbConnection.then(db => {
		db.db("trash").collection("prefix").find({"serverId": serverId}).toArray((err, result) => { // Schema: {serverId: <>, prefix: <>}
            if(result.length != 1)
                callback("^");
            else
			    callback(result[0].prefix);
		});
	});
}

exports.getAll = callback => {
	dbConnection.then(db => {
		db.db("trash").collection("prefix").find().toArray((err, result) => { // Schema: {serverId: <>, prefix: <>}
            if(result.length != 1)
                callback([]);
            else
			    callback(result);
		});
	});
}