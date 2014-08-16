exports = module.exports = [
    {
        active: true,
        origin: 'feed',
        name: 'Gamer.no',
        url: 'http://www.gamer.no/feeds/general.xml',
        linkref: 'url',
        category: ['technology' ,'gaming'],
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
                    fallback: 'http://static.tek.no/images/main/gamer-white.png'
                }
            ]
        }
    },
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
                            selector: 'title'
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
                    fallback: 'https://news.ycombinator.com/y18.gif'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Mashable',
        url: 'http://feeds.mashable.com/mashable',
        linkref: 'url',
        category: ['technology', 'mashable'],
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
                            selector: 'title'
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
                    fallback: 'http://rack.1.mshcdn.com/assets/header_share_logo.v2-11a2e0632ddb46b143c85e63f590734d.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'TechCrunch',
        url: 'http://feeds.feedburner.com/techCrunch',
        linkref: 'url',
        category: ['technology', 'techcrunch'],
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
                            selector: 'title'
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
                    fallback: 'http://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/logo.svg'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Pressfire.no',
        url: 'http://www.pressfire.no/rss/nyheter',
        linkref: 'url',
        category: ['technology', 'gaming'],
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
                            selector: 'title'
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
                    fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png'
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
                            selector: 'title'
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
                            selector: 'title'
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
        category: ['career', 'wired'],
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
                            selector: 'title'
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
        name: 'Morgenbladet',
        url: 'http://morgenbladet.no/feed',
        linkref: 'url',
        category: ['news', 'morgenbladet'],
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
                            selector: 'title'
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
                    fallback: 'http://morgenbladet.no/sites/default/themes/morgenbladet/logo.png'
                }
            ]
        }
    },
    {
        active: true,
        origin: 'feed',
        name: 'Aftenposten - Digital',
        url: 'http://www.aftenposten.no/rss/?kat=forbruker_digital',
        linkref: 'url',
        category: ['technology', 'aftenposten'],
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
                            selector: 'title'
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
                            selector: 'title'
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
    }
];