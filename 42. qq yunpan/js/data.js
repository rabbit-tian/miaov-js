///这些都是文件夹，单独文件数据怎么写？
var data = [
    {   "id":0,
        "route":"0",
        "parent":"data",
        "title":"",
        "type":"",
        "child":[
            {
                "id":0,
                "route":"0_0",
                "parent":"ren",
                "title":"最近",
                "type":"ren",
                "child":[
                    {
                        "id":0,
                        "route":"0_0_0",
                        "title":"Miaov课件",
                        "type":"course",
                        "fileType":"folder",
                        "child":[]
                    },
                    {
                        "id":1,
                        "route":"0_0_1",
                        "title":"Miaov视频",
                        "type":"course",
                        "fileType":"folder",
                        "child":[]
                    }
                ]
            }
        ]
    }, //最近
    {
        "id":1,
        "route":"1",
        "parent":"data",
        "title":"文件",
        "type":"file",
        "child":[
            {
                "id":0,
                "route":"1_0",
                "parent":"file",
                "title":"全部",
                "type":"all",
                "child":[
                    {
                        "id":0,
                        "route":"1_0_0",
                        "title":"QQ",
                        "type":"qq",
                        "fileType":"folder",
                        "child":[

                        ]
                    },
                    {
                        "id":1,
                        "route":"1_0_1",
                        "title":"QQ网盘",
                        "type":"qqdisk",
                        "fileType":"folder",
                        "child":[

                        ]
                    },
                    {
                        "id":2,
                        "route":"1_0_2",
                        "title":"QQ音乐",
                        "type":"qqmusic",
                        "fileType":"folder",
                        "child":[

                        ]
                    },
                    {
                        "id":3,
                        "route":"1_0_3",
                        "title":"QQ邮箱",
                        "type":"qqemail",
                        "fileType":"folder",
                        "child":[
                            {
                                "id":0,
                                "route":"1_0_3_0",
                                "title":"126邮箱",
                                "type":"126email",
                                "fileType":"folder",
                                "child":[
                                    {
                                        "id":0,
                                        "route":"1_0_3_0_0",
                                        "title":"126邮箱-备份.txt",
                                        "type":"126email",
                                        "fileType":"txt"
                                    }
                                ]
                            },
                            {
                                "id":1,
                                "route":"1_0_3_1",
                                "title":"163邮箱",
                                "type":"163email",
                                "fileType":"folder",
                                "child":[
                                    {
                                        "id":0,
                                        "route":"1_0_3_1_0",
                                        "title":"163邮箱-备份.txt",
                                        "type":"163email",
                                        "fileType":"txt"
                                    }
                                ]
                            },
                            {
                                "id":2,
                                "route":"1_0_3_2",
                                "title":"gmail邮箱",
                                "type":"gmail",
                                "fileType":"folder",
                                "child":[
                                    {
                                        "id":0,
                                        "route":"1_0_3_2_0",
                                        "title":"gmail-backup",
                                        "type":"gmail",
                                        "fileType":"txt"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "id":4,
                        "route":"1_0_4",
                        "title":"网络收藏夹",
                        "type":"qqfavorite",
                        "fileType":"folder",
                        "child":[

                        ]
                    }
                ]
            },
            {
                "id":1,
                "route":"1_1",
                "parent":"file",
                "title":"文档",
                "type":"doc",
                "child":[]
            },
            {
                "id":2,
                "route":"1_2",
                "parent":"file",
                "title":"图片",
                "type":"pic",
                "child":[]
            },
            {
                "id":3,
                "route":"1_3",
                "parent":"file",
                "title":"视频",
                "type":"video",
                "child":[]
            },
            {
                "id":4,
                "route":"1_4",
                "parent":"file",
                "title":"笔记",
                "type":"note",
                "child":[
                    {
                        "id":0,
                        "route":"1_4_0",
                        "title":"HTML5",
                        "type":"work",
                        "fileType":"folder",
                        "child":[
                            {
                                "id":0,
                                "route":"1_4_0_1",
                                "title":"标准盒模型",
                                "type":"html5",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":1,
                                "route":"1_4_0_1",
                                "title":"浮动",
                                "type":"html5",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":2,
                                "route":"1_4_0_2",
                                "title":"表单表格",
                                "type":"html5",
                                "fileType":"folder",
                                "child":[

                                ]
                            }
                        ]
                    },
                    {
                        "id":1,
                        "route":"1_4_1",
                        "title":"CSS3",
                        "type":"work",
                        "fileType":"folder",
                        "child":[

                        ]
                    },
                    {
                        "id":2,
                        "route":"1_4_2",
                        "title":"VUE",
                        "type":"work",
                        "fileType":"folder",
                        "child":[

                        ]
                    },
                    {
                        "id":3,
                        "route":"1_4_3",
                        "title":"React",
                        "type":"work",
                        "fileType":"folder",
                        "child":[

                        ]
                    }
                ]
            },
            {
                "id":5,
                "route":"1_5",
                "parent":"file",
                "title":"音乐",
                "type":"music",
                "child":[
                    {
                        "id":0,
                        "route":"1_5_0",
                        "title":"欧美",
                        "type":"ua",
                        "fileType":"folder",
                        "child":[
                            {
                                "id":0,
                                "route":"1_5_0_0",
                                "title":"Augustana",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":1,
                                "route":"1_5_0_1",
                                "title":"Daniel Powter",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":2,
                                "route":"1_5_0_2",
                                "title":"G.E.M",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":3,
                                "route":"1_5_0_3",
                                "title":"4nON bLONDES",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            }
                        ]
                    },
                    {
                        "id":1,
                        "route":"1_5_1",
                        "title":"日韩",
                        "type":"jk",
                        "fileType":"folder",
                        "child":[
                            {
                                "id":0,
                                "route":"1_5_1_0",
                                "title":"BIGBANG",
                                "type":"Rap",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                        ]
                    },
                    {
                        "id":2,
                        "route":"1_5_2",
                        "title":"大陆",
                        "type":"china",
                        "fileType":"folder",
                        "child":[
                            {
                                "id":0,
                                "route":"1_5_2_0",
                                "title":"韩寒",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":1,
                                "route":"1_5_2_1",
                                "title":"范晓萱",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            },
                            {
                                "id":2,
                                "route":"1_5_2_2",
                                "title":"梁博",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[
                                    {
                                        "id":0,
                                        "route":"1_5_2_2_0",
                                        "title":"花火",
                                        "type":"song",
                                        "fileType":'mp3',
                                        "child":[

                                        ]
                                    },
                                ]
                            },
                            {
                                "id":3,
                                "route":"1_5_2_3",
                                "title":"花儿乐队",
                                "type":"singer",
                                "fileType":"folder",
                                "child":[

                                ]
                            }
                        ]
                    },
                    {
                        "id":3,
                        "route":"1_5_3",
                        "title":"港台",
                        "type":"ht",
                        "fileType":"folder",
                        "child":[

                        ]
                    }
                ]
            }
        ]
    }, //文件
    {
        "id":2,
        "route":"2",
        "parent":"data",
        "title":"照片",
        "type":"photo",
        "child":[
            {
                "id":0,
                "route":"2_0",
                "parent":"photo",
                "title":"时间",
                "type":"time",
                "child":[]
            }
        ]
    }, //照片
    {
        "id":3,
        "route":"3",
        "parent":"data",
        "title":"我的",
        "type":"my",
        "child":[
            {
                "id":0,
                "route":"3_0",
                "parent":"my",
                "title":"保险箱",
                "type":"safebox",
                "child":[]
            },
            {
                "id":1,
                "route":"3_1",
                "parent":"my",
                "title":"分享链接",
                "type":"share",
                "child":[]
            },
            {
                "id":2,
                "route":"3_2",
                "parent":"my",
                "title":"回收站",
                "type":"trash",
                "child":[]
            }
        ]
    }  //我的
];