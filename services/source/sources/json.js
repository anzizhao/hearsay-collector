exports = module.exports = [
    {
        "active": false,
        "origin": "json",
        "name": "Mashable (must-reads)",
        "url": "http://mashable.com/category/must-reads/?format=json",
        "listref": "data",
        "linkref": "url",
        "category": ['technology', 'mashable'],
        "format": "desktop",
        "body": true,
        "fetchInterval": 7 * 2, // 抓取单位:半天  15天抓一次 
        "template": {
            "elements": [
                {
                    "name": "guid",
                    "type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "link"
                        }
                    ]
                },
                {
                    "name": "title",
                    "required": true,
                    "items": [
                        {
                            "selector": "title"
                        }
                    ]
                },
                {
                    "name": "url",
                    "type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "link"
                        }
                    ]
                },
                {
                    "name": "image",
                    "type": "url",
                    "items": [
                        {
                            "selector": "responsive_images[1].image"
                        },
                        {
                            "selector": "responsive_images[0].image"
                        }
                    ],
                    "fallback": "http://rack.1.mshcdn.com/assets/header_share_logo.v2-11a2e0632ddb46b143c85e63f590734d.png"
                }
            ]
        }
    },
    {
        "active": false,
        "origin": "json",
        "name": "zhihudaily",
        "url": "http://news-at.zhihu.com/api/4/news/latest",
        "listref": "stories",
        "linkref": "url",
        "category": ['general', 'zhihu'],
        "format": "desktop",
        "body": true,
        "fetchInterval": 1 * 2, // 抓取单位:半天  15天抓一次 
        "template": {
            "elements": [
                {
                    "name": "guid",
                    "required": true,
                    "items": [
                        {
                            "selector": "id"
                        }
                    ]
                },
                {
                    "name": "title",
                    "required": true,
                    "items": [
                        {
                            "selector": "title"
                        }
                    ]
                },
                {
                    "name": "url",
                    "type": "url",
                    "special": true,
                    "items": [
                        {
                            "selector": "link"
                        }
                    ]
                },
                //{
                    //"name": "image",
                    //"type": "url",
                    //"items": [
                        //{
                            //"selector": "images[0]"
                        //}
                    //],
                    //"fallback": "http://rack.1.mshcdn.com/assets/header_share_logo.v2-11a2e0632ddb46b143c85e63f590734d.png"
                //}
            ]
        }
    },
    {
        "active": true,
        "origin": "json",
        //"name": '稀金掘土',
        "name": 'xitu',
        "url": 'https://api.leancloud.cn/1.1/classes/Entry?&where=%7B%22category%22%3A%22frontend%22%2C%22createdAt%22%3A%7B%22%24gte%22%3A%7B%22__type%22%3A%22Date%22%2C%22iso%22%3A%222016-10-16T13%3A01%3A33.238Z%22%7D%7D%7D&include=user&order=-hotIndex',
        "listref": "results",
        "linkref": "url",
        "category": ['frontend', 'xitu'],
        "format": "desktop",
        "body": true,
        "fetchInterval": 2, // 单位为抓取的时间
        "template": {
            "elements": [
                {
                    "name": "guid",
                    "type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "url"
                        }
                    ]
                },
                {
                    "name": "title",
                    "required": true,
                    "items": [
                        {
                            "selector": "title"
                        }
                    ]
                },
                {
                    "name": "url",
                    "type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "url"
                        }
                    ]
                },
                {
                    "name": "image",
                    "type": "url",
                    "items": [
                        {
                            "selector": "screenshot.url"
                        }
                    ]
                }
            ]
        }
    },
    {
        "active": false,
        "origin": "json",
        "name": 'medium',
        "url": 'https://medium.com/_/api/tags/javascript/stream',
        "outside": true,
        "listref": ['payload','references', 'Post'],
        "linkref": "url",
        "category": ['frontend', 'medium'],
        "format": "desktop",
        "body": true,
        "fetchInterval": 2, // 单位为抓取的时间
        "template": {
            "elements": [
                {
                    "name": "guid",
                    //"type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "uniqueSlug"
                        }
                    ]
                },
                {
                    "name": "title",
                    "required": true,
                    "items": [
                        {
                            "selector": "title"
                        }
                    ]
                },
                {
                    "name": "url",
                    "type": "url",
                    "special": true,
                    "items": [
                        {
                            "selector": "uniqueSlug"
                        }
                    ]
                }
            ]
        }
    },
];
