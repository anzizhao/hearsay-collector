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
                            selector: 'link'
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
                            selector: 'links'
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
        category: ['blogs', 'ruanyifeng'],
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
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //],
                    //fallback: 'https://st.imququ.com/static/img/blog/ququ.jpg',
                //}
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
                //{
                    //name: 'image',
                    //type: 'url',
                    //items: [
                        //{
                            //selector: 'enclosures[0].url'
                        //}
                    //]
                //}
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
    }, 
    {
        active: true,
        origin: 'feed',
        name: 'TheAtlantic - Technology',
        url: 'http://feeds.feedburner.com/atlanticscienceandtechnology',
        linkref: 'url',
        category: ['technology', 'theatlantic'],
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
                            selector: 'id'
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
                    fallback: 'http://cdn.theatlantic.com/static/front/images/logo/213x70.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Entrepreneur.com',
        url: 'http://feeds.feedburner.com/entrepreneur/latest',
        linkref: 'url',
        category: ['career', 'entrepreneur'],
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
                    fallback: 'http://www.entrepreneur.com/assets/img/ent-logo-high.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Coding Horror (Jeff Atwood)',
        url: 'http://feeds.feedburner.com/codinghorror',
        linkref: 'url',
        category: ['blogs', 'codinghorror'],
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
                    fallback: 'http://blog.codinghorror.com/assets/images/codinghorror-app-icon.png?v=0d085690dd'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'KQED MindShift',
        url: 'http://feeds.feedburner.com/kqed/nHAK?format=xml',
        linkref: 'url',
        category: ['career', 'mindshift'],
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
                    fallback: 'http://blogs.kqed.org/mindshift/wp-content/themes/MS-clear/img/logo-mindshift.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'ourjs',
        url: 'http://ourjs.com/rss',
        linkref: 'url',
        category: ['frontend', 'ourjs'],
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
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: '科学松鼠协会',
        url: 'http://songshuhui.net/feed',
        linkref: 'url',
        category: ['science', 'songshuhui'],
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
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'node weekly',
        url: 'http://nodeweekly.com/rss/16idejnb',
        linkref: 'url',
        originContent: true,
        category: ['node', 'nodeweekly'],
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
                }
            ]
        }
    }
];
