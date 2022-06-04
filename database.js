const mysql = require('mysql');

var connection = mysql.createConnection({
	host: "en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rkam7mm4feuw6hwh",
    password: "gygqvlres0b1zn2b",
    database : "vj3mza8hgyuw216b"
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;
