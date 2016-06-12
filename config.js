var mysql = require('mysql');


exports.db = mysql.createConnection({
    host:                   '127.0.0.1',
    port:                   3306,
    database:               'sina_blog',
    user:                   'root',
    password:               'root'
});

exports.sinaBlog = {
    url:        'http://blog.sina.com.cn/u/1560906700'      //博客首页地址
};

