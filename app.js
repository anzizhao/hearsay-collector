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
var e_waitTime ; //抓取的时间单位为: 半天
var e_timeout; //抓取的时间单位为: 半天
if (process.env.NODE_ENV === 'development') {
    e_waitTime = 120 *1000; 
    e_timeout = 10000; 

} else {
    e_waitTime = 12 * 3600 *1000; //抓取的时间单位为: 半天
    e_timeout = 300000; //抓取的时间单位为: 半天
}



// website scraper module
var siteScraper = new SiteScraper({
    getSources: services.source.getSites,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: e_waitTime, // 半天获取一次
    timeout: e_timeout// 5分钟
});

// rss feed reader/parser
var rssReader = new RssReader({
    getSources: services.source.getFeeds,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: e_waitTime, 
    timeout: e_timeout
});

// json endpoint fetcher and mapper
var jsonFetcher = new JsonFetcher({
    getSources: services.source.getMappings,
    handleEntry: services.entry.save,
    sockets: 15,
    waitTime: e_waitTime, 
    timeout: e_timeout
});

// run the process
require('./modules/run')(siteScraper, rssReader, jsonFetcher, config);
