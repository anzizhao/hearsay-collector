exports = module.exports = [
    {
        active: true,
        origin: 'site',
        name: 'Wired Science',
        url: 'http://www.wired.com/science',
        linkref: 'url',
        category: ['technology', 'science'],
        format: 'desktop',
        body: true,
        "fetchInterval": 1 * 2, // 单位为抓取的时间
        template: {
            containers: [
                {
                    selector: 'div[role=article]',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.wired.com/wp-content/themes/wired/assets/images/post_wired_logo_150x60.gif',
                            items: [
                                {
                                    selector: 'picture img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'segmentfault',
        url: 'https://segmentfault.com/t/javascript/blogs?page=1',
        linkref: 'url',
        category: ['frontend', 'segmentfault'],
        format: 'desktop',
        "fetchInterval": 1, // 单位为抓取的时间
        body: true,
        template: {
            containers: [
                {
                    selector: '.stream-list_item',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 > a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 > a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: '科学网',
        url: 'http://news.sciencenet.cn/topnews.aspx',
        linkref: 'url',
        category: ['science', 'science'],
        format: 'desktop',
        body: true,
        "fetchInterval": 2*2, // 单位为抓取的时间
        template: {
            containers: [
                {
                    selector: '#DataGrid1 tr[onmouseover]',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'a',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: '伯乐在线',
        url: 'http://web.jobbole.com/all-posts/',
        linkref: 'url',
        category: ['frontend', 'bole'],
        format: 'desktop',
        body: true,
        "fetchInterval": 1*2, // 单位为抓取的时间
        template: {
            containers: [
                {
                    selector: '.post.floated-thumb',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: '.read-more>a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: '.read-more>a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: '.archive-title',
                                    attribute: 'title'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: '伯乐在线',
        url: 'http://blog.jobbole.com/all-posts/',
        linkref: 'url',
        category: ['frontend', 'bole'],
        format: 'desktop',
        body: true,
        "fetchInterval": 1*2, // 单位为抓取的时间
        template: {
            containers: [
                {
                    selector: '.post.floated-thumb',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: '.read-more>a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: '.read-more>a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: '.archive-title',
                                    attribute: 'title'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
];
