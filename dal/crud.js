const express = require('express');
const Family = require('../models/family');
const Task = require('../models/tasks');

const getAllFamily = ( req, res, next ) => {
	Family.find({}, ( err, person ) => {
		if (err){ return console.log(err)};
		res.status(200).json(person);
		return next();
	});
	
};

const getAllTasks = ( req, res, next ) => {
	Task.find({}).populate('personName').exec( ( err, task ) => {
		if ( err ) {return console.log(err)} ;
		res.json(task);
		return next();
	});	
};

const addTask = ( req, res, next ) => {
	const newTask = new Task( req.body );
	newTask.save((err, savedTask) => {
		Task.findOne(savedTask).populate('personName').exec( ( err, savedTask ) => {
			if ( err ) {return console.log(err)};
			res.json(savedTask);
			return next();
		});
	});
};

const delTask = ( req, res, next ) => {
	Task.remove({ _id: req.params.id }, err => {
		if (err) {return console.log(err)};
		console.log("deleted");
	});
	return next();

};


const MiddleWares = { getAllFamily, getAllTasks, addTask, delTask };
module.exports = MiddleWares;
