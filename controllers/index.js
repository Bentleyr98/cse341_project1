const mongodb = require('../database/db');
const ObjectId = require('mongodb').ObjectId;

const sendName = async (req, res, next) => {
  res.send('Chris Bentley')
}

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts')
    .find({ _id: userId });
    
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllContacts, sendName, getContact };