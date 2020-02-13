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

// Get List of  Battle locations
battleroute.get('/list', async (req, res) => {
  try {
    logger.info(`Battle/: Get Battle ${req.params.id}`);
    let locations = await Battle.find({},{ "location":1 });
    res.status(200).send([...new Set(locations.map(loc=>loc.location).filter(a=>a.length>0))]);
  } catch (error) {
    logger.error(`Battle/: Error while finding Battle ${req.params.id}: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while finding Battle ${req.params.id}: ${error}` });
  }
});

// Get total number of battles occurred.
battleroute.get('/count', async (req, res) => {
  try {
    logger.info(`Battle/: Get Battles count`);
    let Battles = await Battle.find({});
    res.status(200).send({data:Battles.length});
  } catch (error) {
    logger.error(`Battle/: Error while finding Battle count : ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while finding Battle count : ${error}` });
  }
});


// Get list of battles with search filter
battleroute.get('/search', async (req, res) => {
  try {
    logger.info(`Battle/: Search Battle for ${JSON.stringify(req.query)}`);
    let blogs = await Battle.find(req.query);
    if(blogs.length===0){
      logger.warn(`Battle/search: No data found for search: ${JSON.stringify(req.query)}`)
      res.status(300).send({message: `No data found for search: ${JSON.stringify(req.query)}`});
    }else{
      res.status(200).send(blogs);
    }
  } catch (error) {
    logger.error(`Battle/: Error while searching battle for: ${JSON.stringify(req.query)}: ${((error.stack) ? error.stack : error)}`);
    res.status(400).send({ message: `Error while searching battle for: ${JSON.stringify(req.query)}: ${error}` });
  }
});


module.exports = battleroute;
