
var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM sample_data ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Creación de Citas', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("sample_data", {title:'Insert Data into MySQL', action:'add'});

});

router.post("/add_sample_data", function(request, response, next){

	var complete_name = request.body.complete_name;

	var phone = request.body.phone;

	var email = request.body.email;

	var day = request.body.day;

	var time = request.body.time;

	var query = `
	INSERT INTO sample_data 
	(complete_name, phone, email, day, time) 
	VALUES ("${complete_name}", "${phone}", "${email}", "${day}", "${time}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'Sample Data Inserted');
			response.redirect("/sample_data");
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM sample_data WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Sample Data Deleted');
			response.redirect("/sample_data");
		}

	});

});

module.exports = router;