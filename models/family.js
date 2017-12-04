const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FamilySchema = new Schema({
	name: String,
	nick: String,
	description: String
});

const Family = mongoose.model('families', FamilySchema);
module.exports = Family;