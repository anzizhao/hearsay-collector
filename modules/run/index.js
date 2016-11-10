var async = require('async');
var http = require('http');

exports = module.exports = function (scraper, rssReader, jsonFetcher, config) {
    async.series({
        startHttpServer: function (callback) {
            if('heroku' == config.get('env')){
                // http server to be able to keep the process alive on heroku free apps
                http.createServer(function (req, res) {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end('Keep Alive, Stay Cool..\n');
                }).listen(config.get('port'));
            }
            callback();
        },
        collectAndDistributeContent: function (callback) {
            async.parallel({
                runSiteScraper: function (callback) {
                    if (process.env.NODE_ENV === 'development') {
                        async.forever(scraper.run.bind(scraper), callback);
                    } else {
                        async.forever(scraper.run.bind(scraper), callback);
                    }
                },
                runRssFeedParser: function (callback) {
                    if (process.env.NODE_ENV === 'development') {
                        //async.forever(rssReader.run.bind(rssReader), callback);
                    } else {
                        setTimeout(function(){
                            async.forever(rssReader.run.bind(rssReader), callback);
                        },  10 * 60 * 1000 ) // 开启后10分钟抓取

                    }
                },
                runJsonFetcherAndMapper: function (callback) {
                    if (process.env.NODE_ENV === 'development') {
                        //async.forever(jsonFetcher.run.bind(jsonFetcher), callback);
                    } else {
                        setTimeout(function(){
                            async.forever(jsonFetcher.run.bind(jsonFetcher), callback);
                        },  30 * 60 * 1000 ) // 30分钟抓取
                    }
                }
            }, callback);
        }
    }, function (err, results) {
        if (err) {
            debug(util.inspect(err), 'error');
            process.exit(1);
        } else {
            console.log('??? - this should never happen');
        }
    });
};
