var async = require('async');

exports = module.exports = function (Entry, config) {
    return function(entry, callback) {
        // async control flow
        async.waterfall([
            // check if article exists
            function (callback) {
                Entry.findOne({ guid: entry.guid }, function (err, result) {
                    callback(err, !!result, result);
                });
            },
            // create new entry in db, or update existing (when using upsert, the defaults are ignored, hence the use of findOne/update/save)
            function (exists, result,  callback) {
                //console.log( 'exists: ', exists )
                if (exists) {
                    if( result.content ||  !entry.content  ) {
                        //console.log( 'result.content true')
                        callback(null, false);
                    } else {
                        //console.log( 'result.content false')
                        entry.createdAt = new Date();
                        //将content title 赋值到外面的title  因为阮一峰的rss编码的原因  外面的title为乱码
                        entry.title = entry.content.title; 
                        Entry.update({ guid: entry.guid }, entry, { upsert: true }, function (err, numberAffected, raw) {
                            callback(err, false);
                        });
                    } 
                } else {

                    entry.createdAt = new Date();
                    entry.posted = new Date(); // overwrite

                    var newEntry = new Entry(entry);

                    newEntry.save(function (err, product) {
                        var error = err ? 'error saving article: ' + err : null;
                        callback(error, product);
                    });
                }
            }
        ], function (err, newEntry) {
            callback(err, newEntry);
        });
    };
};


