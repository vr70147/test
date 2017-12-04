const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Family = require('../models/family');

const TaskSchema = new Schema({
	description: String,
	date: String,
	personName: { type: Schema.Types.ObjectId, ref: 'families' }
});

const Task = mongoose.model('tasks', TaskSchema);
module.exports = Task;