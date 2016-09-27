exports = module.exports = [
    {
        active: true,
        origin: 'feed',
        name: 'Hacker News',
        url: 'https://news.ycombinator.com/rss',
        linkref: 'url',
        category: ['technology', 'hackernews'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png'
                }
            ]
        }
    },
    // 阮一峰博客的css
    {
        active: true,
        origin: 'feed',
        name: '阮一峰网络日志',
        url: 'http://www.ruanyifeng.com/blog/atom.xml',
        linkref: 'url',
        category: ['blogs', '阮一峰'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.ruanyifeng.com/blog/images/person2_s.jpg'
                }
            ]
        }
    },
    // 天壤的博客
    {
        active: true,
        origin: 'feed',
        name: '天镶的博客',
        url: 'http://www.lingyu.wang/atom.xml',
        linkref: 'url',
        category: ['blogs', 'tianyu'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'https://avatars1.githubusercontent.com/u/2663351?v=3&s=460'
                }
            ]
        }
    },
    // jerry Qu 的博客
    {
        active: true,
        origin: 'feed',
        name: '屈光宇的博客',
        url: 'https://imququ.com/rss.html',
        linkref: 'url',
        category: ['blogs', 'jerryQu'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'https://st.imququ.com/static/img/blog/ququ.jpg',
                }
            ]
        }
    },
    // 十年踪迹博客
    {
        active: true,
        origin: 'feed',
        name: '十年踪迹博客',
        url: 'https://www.h5jun.com/rss.html',
        linkref: 'url',
        category: ['blogs', 'shinianzongji'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'https://www.h5jun.com/static/upload/201603/logo.jpg'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'The Muse - Career',
        url: 'https://www.themuse.com/feeds/rss',
        linkref: 'url',
        category: ['career', 'themuse'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'https://tm-prod.global.ssl.fastly.net/images/the-muse.png?v=03e99f6'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Wired.com',
        url: 'http://feeds.wired.com/wired/index',
        linkref: 'url',
        category: ['technology', 'wired'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.wired.com/wp-content/themes/wired/assets/images/post_wired_logo_150x60.gif'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Inc.com',
        url: 'http://feeds.inc.com/home/updates',
        linkref: 'url',
        category: ['career', 'inc'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://images.inc.com/topnav/inc-logo.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Ars Technica',
        url: 'http://feeds.arstechnica.com/arstechnica/technology-lab',
        linkref: 'url',
        category: ['technology', 'arstechnica'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://cdn.arstechnica.net/wp-content/themes/arstechnica/assets/images/logo.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Chris Dixon',
        url: 'http://cdixon.org/feed/',
        linkref: 'url',
        category: ['blogs', 'chrisdixon'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Smashing Magazine',
        url: 'http://www.smashingmagazine.com/feed/',
        linkref: 'url',
        category: ['blogs', 'smashingmagazine'],
        format: 'desktop',
        body: true,
        template: {
            elements: [
                {
                    name: 'guid',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'guid'
                        },
                        {
                            selector: 'link'
                        },
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'title',
                    required: true,
                    items: [
                        {
                            selector: 'title',
                            decode: true
                        }
                    ]
                },
                {
                    name: 'url',
                    type: 'url',
                    required: true,
                    items: [
                        {
                            selector: 'link'
                        }
                    ]
                },
                {
                    name: 'image',
                    type: 'url',
                    items: [
                        {
                            selector: 'enclosures[0].url'
                        }
                    ],
                    fallback: 'http://www.smashingmagazine.com/wp-content/themes/smashing-magazine/images/logo.png'
                }
            ]
        }
    } 
    //freeburner 国内无法访问 
    
    //{
        //active: true,
        //origin: 'feed',
        //name: 'TechCrunch',
        //url: 'http://feeds.feedburner.com/TechCrunch/',
        //linkref: 'url',
        //category: ['technology', 'techcrunch'],
        //format: 'desktop',
        //body: true,
        //template: {
            //elements: [
                //{
                    //name: 'guid',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'guid'
                        //},
                        //{
                            //selector: 'link'
                        //},
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'title',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'url',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'link'
                        //}
                    //]
                //},
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //],
                    //fallback: 'http://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/logo.svg'
                //}
            //]
        //}
    //},
    //{
        //active: true,
        //origin: 'feed',
        //name: 'TheAtlantic - Technology',
        //url: 'http://feeds.feedburner.com/atlanticscienceandtechnology',
        //linkref: 'url',
        //category: ['technology', 'theatlantic'],
        //format: 'desktop',
        //body: true,
        //template: {
            //elements: [
                //{
                    //name: 'guid',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'guid'
                        //},
                        //{
                            //selector: 'link'
                        //},
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'title',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'url',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'link'
                        //}
                    //]
                //},
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //],
                    //fallback: 'http://cdn.theatlantic.com/static/front/images/logo/213x70.png'
                //}
            //]
        //}
    //},
    //{
        //active: true,
        //origin: 'feed',
        //name: 'Entrepreneur.com',
        //url: 'http://feeds.feedburner.com/entrepreneur/latest',
        //linkref: 'url',
        //category: ['career', 'entrepreneur'],
        //format: 'desktop',
        //body: true,
        //template: {
            //elements: [
                //{
                    //name: 'guid',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'guid'
                        //},
                        //{
                            //selector: 'link'
                        //},
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'title',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'url',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'link'
                        //}
                    //]
                //},
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //],
                    //fallback: 'http://www.entrepreneur.com/assets/img/ent-logo-high.png'
                //}
            //]
        //}
    //},
    //{
        //active: true,
        //origin: 'feed',
        //name: 'Coding Horror (Jeff Atwood)',
        //url: 'http://feeds.feedburner.com/codinghorror',
        //linkref: 'url',
        //category: ['blogs', 'codinghorror'],
        //format: 'desktop',
        //body: true,
        //template: {
            //elements: [
                //{
                    //name: 'guid',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'guid'
                        //},
                        //{
                            //selector: 'link'
                        //},
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'title',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'url',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'link'
                        //}
                    //]
                //},
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //],
                    //fallback: 'http://blog.codinghorror.com/assets/images/codinghorror-app-icon.png?v=0d085690dd'
                //}
            //]
        //}
    //},
    //{
        //active: true,
        //origin: 'feed',
        //name: 'KQED MindShift',
        //url: 'http://feeds.feedburner.com/kqed/nHAK?format=xml',
        //linkref: 'url',
        //category: ['career', 'mindshift'],
        //format: 'desktop',
        //body: true,
        //template: {
            //elements: [
                //{
                    //name: 'guid',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'guid'
                        //},
                        //{
                            //selector: 'link'
                        //},
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'title',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'title',
                            //decode: true
                        //}
                    //]
                //},
                //{
                    //name: 'url',
                    //type: 'url',
                    //required: true,
                    //items: [
                        //{
                            //selector: 'link'
                        //}
                    //]
                //},
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //],
                    //fallback: 'http://blogs.kqed.org/mindshift/wp-content/themes/MS-clear/img/logo-mindshift.png'
                //}
            //]
        //}
    //}
];
