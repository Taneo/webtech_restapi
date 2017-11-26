"use strict";

const RANDOM_STATUS = (function() {
	const STATUS_OBJ = {"status": 200, "body": "Oops, something happened."};
	const STATUS_ARRAY = [400, 401, 403, 404, 418, 429, 451, 500, 501, 502, 503, 504];
	const PROBABILITY = 5;
	return function() {
		let randomIndex = Math.floor(Math.random() * STATUS_ARRAY.length * PROBABILITY);
		let result = Object.assign({}, STATUS_OBJ);
		if(randomIndex < STATUS_ARRAY.length) {
			result.status = STATUS_ARRAY[randomIndex];
		}
		return result;
	}
}());

module.exports = {
	data: [
		{
			"id": 1,
			"name": "Hugo",
			"alter": 223
		}, {
			"id": 2,
			"name": "Bert",
			"alter": 2
		}, {
			"id": 3,
			"name": "Ben",
			"alter": 50
		}
	],
	indexOf: function(id) {
		let eID = parseInt(id);
		
		for(let i = 0; i < this.data.length; i++) {
			if(this.data[i].id === eID){
				return i;
			}
		}
		return -1;
	},
	findAll: function(callback) {
		let statusObj = RANDOM_STATUS();
		
		callback(statusObj.status === 200 ? null : statusObj, this.data);
	},
	findOne: function(id, callback) {
		let statusObj = RANDOM_STATUS();
		try {
			callback(
				statusObj.status === 200 ? null : statusObj,
				this.data[this.indexOf(id)]
			);
		} catch(err) {
			statusObj.status = 500;
			statusObj.body = err;
			callback(statusObj, null);
		}
	},
	update: function(id, data, callback) {
		let statusObj = RANDOM_STATUS();
		try {
			let index = this.indexOf(id);
			if(statusObj.status === 200) {
				statusObj = null;
				
				Object.assign(this.data[index], data);
				this.data[index].id = parseInt(id);
			}
			callback(statusObj, this.data[index]);
		} catch (err) {
			statusObj.status = 500;
			statusObj.body = err;
			callback(statusObj, null);
		}
	},
	remove: function(id, callback) {
		let statusObj = RANDOM_STATUS();
		
		let index = this.indexOf(id);
		if(index < 0) {
			statusObj.status = 500;
			statusObj.body = new Error(`Element ${id} does not exist!`);
		} else if(statusObj.status === 200) {
			statusObj = null;
			
			this.data.splice(index, 1);
		}
		callback(statusObj, {});
	},
	add: function(entry, callback) {
		let statusObj = RANDOM_STATUS();
		if(entry === null || typeof entry === 'undefined') {
			statusObj.status = 500;
			statusObj.body = new Error('Element is undefined');
		}
		
		let result = null;
		if(statusObj.status === 200) {
			statusObj = null;
			
			let newID = 0;
			this.data.forEach( e => newID = Math.max(newID, e.id) + 1 ); // calc new id
			
			result = Object.assign({ "id": 0, "name": "Unknown", "alter": 0 }, entry);
			result.id = newID;
			
			this.data.push(result);
		}
		callback(statusObj, result);
	}
};
