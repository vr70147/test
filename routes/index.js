const express = require('express');
const router = express.Router();
const MiddleWares = require('../dal/crud');

const getAllFamily = MiddleWares.getAllFamily;
const getAllTasks = MiddleWares.getAllTasks;
const delTask = MiddleWares.delTask;
const addTask = MiddleWares.addTask;

router.get('/all_family', getAllFamily, ( req, res ) => {
	return res.json( req.data );
});

router.get('/all_tasks', getAllTasks, ( req, res ) => {
	return res.json( req.data );
});

router.put('/add_task', addTask, ( req, res ) => {
	return res.json( req.data );
});

router.delete('/del_task/:id', delTask, ( req, res ) => {
	return res.json( req.data );
});


module.exports = router;