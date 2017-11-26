"use strict";
var express = require('express');
var router  = express.Router();
var data    = require('../public/javascripts/data');

const DEFAULT_RESPONSE = {"status": 200, "error": null, "response": null};

const DEFAULT_CALLBACK = function(res, error, results) {
	let response = Object.assign({}, DEFAULT_RESPONSE);
	
	if(error === null || typeof error === 'undefined') {
		response.response = results;
	} else {
		res.status(error.status);
		response.status = error.status;
		response.error = error.body;
	}
	
	console.log(response);
	
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(response));
};

/* GET users listing. */
router.get('/', function(req, res, next) {
	data.findAll(function(error, results) {
		DEFAULT_CALLBACK(res, error, results);
	});
});

router.get('/:id(\\d+)', function(req, res, next) {
	data.findOne(req.params.id, function(error, results) {
		DEFAULT_CALLBACK(res, error, results);
	});
})

router.post('/', function(req, res, next) {
	data.add(req.body, function(error, results) {
		DEFAULT_CALLBACK(res, error, results);
	});
});

router.put('/:id(\\d+)', function(req, res, next) {
	data.update(req.params.id, req.body, function(error, results) {
		DEFAULT_CALLBACK(res, error, results);
	});
});

router.delete('/:id(\\d+)', function(req, res, next) {
	data.remove(req.params.id, function(error, results) {
		DEFAULT_CALLBACK(res, error, results);
	});
});

module.exports = router;
