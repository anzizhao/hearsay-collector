// config
var common = require('hearsay-common');
var config = require('./config');
var setup = require('./setup');

// dependencies
var mongoose = require('mongoose');
var debug = require('debug')('hearsay:collector:app');
var SiteScraper = require('congregator-sitescraper');
var RssReader = require('congregator-rssreader');
var JsonFetcher = require('congregator-jsonfetcher');
// create connection to db
setup.db(mongoose, config);

// app specific modules
var models = common.models(mongoose);
var services = require('./services')(models, config); // this can be mocked

// website scraper module
var siteScraper = new SiteScraper({
    getSources: services.source.getSites,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: 12 * 3600 *1000, // 半天获取一次
    //waitTime:  60 *1000, // 半天获取一次
    timeout: 300000 // 5分钟
    //timeout: 60000
});

// rss feed reader/parser
var rssReader = new RssReader({
    getSources: services.source.getFeeds,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: 12 * 3600 *1000, // 半天获取一次
    //waitTime: 600 * 1000 , // 10分钟获取一次
    timeout: 300000 // 5分钟
});

// json endpoint fetcher and mapper
var jsonFetcher = new JsonFetcher({
    getSources: services.source.getMappings,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: 12 * 3600 *1000 , // 半天获取一次
    //waitTime: 60 * 1000 , // 半天获取一次
    timeout: 300000 // 5分钟
    //timeout: 60000
});

// run the process
require('./modules/run')(siteScraper, rssReader, jsonFetcher, config);
