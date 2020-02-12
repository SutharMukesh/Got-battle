/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const express = require('express');
const Battle = require('../models/battle');
const csv = require('csvtojson');
const path = require('path');
const battleroute = express.Router();

(async()=>{
  try {
    // Save battles.csv to mongodb
    const jsonarray = await csv().fromFile(path.join(__dirname,"../battles.csv"));
    const insertresult = await Battle.insertMany(jsonarray);
    logger.info(`Battle: Csv Data inserted into mongo successfully`);
  } catch (error) {
    logger.error(`Battle: Error while inserting battle.csv to mongo`);
  }
})()

// Get All Blogs for homepage
battleroute.get('/', async (req, res) => {
  try {
    logger.info(`Battle/: Get all blogs for home page`);
    let blogs = await Battle.find({});
    res.status(200).send(blogs);
  } catch (error) {
    logger.error(`Battle/: Error while finding Battle: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while finding Battle: ${error}` });
  }
});

// Get specific Battle
battleroute.get('/:id', async (req, res) => {
  try {
    logger.info(`Battle/: Get Battle ${req.params.id}`);
    let blogs = await Battle.find({ _id: req.params.id });
    res.status(200).send(blogs);
  } catch (error) {
    logger.error(`Battle/: Error while finding Battle ${req.params.id}: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while finding Battle ${req.params.id}: ${error}` });
  }
});

// Add new Battle
battleroute.post('/add', async (req, res) => {
  try {
    logger.info(`Battle/add: Adding Battle ${JSON.stringify(req.body)}`);
    newblog = new Battle(req.body);
    result = await newblog.save();
    res.status(200).send({ message: 'Added Battle successfully' });

  } catch (error) {
    logger.error(`Battle/add: Error while inserting Battle: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while inserting Battle: ${error}` });
  }
});

// Edit a Battle
battleroute.post('/update/:id', async (req, res) => {
  try {
    logger.info(`Battle/update: Updating Battle ${JSON.stringify(req.body)}`);
    await Battle.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
    res.status(200).send({ message: 'Battle details updated' });
  } catch (error) {
    logger.error(`Battle/update: Error while updating Battle: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while updating Battle: ${error}` });
  }
});

// Delete a Battle
battleroute.delete('/:id', async (req, res) => {
  // Only Supervisor can delete a product
  try {
    logger.info(`Battle/delete: Deleting Battle id: ${req.params.id}`);
    result = await Battle.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: `delete Battle details: ${JSON.stringify(result)}` });
  } catch (error) {
    logger.error(`Battle/delete: Error while deleting Battle: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while deleting: ${error}` });
  }
});

module.exports = battleroute;
