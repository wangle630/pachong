var mysql = require('mysql');
var cheerio = require('cheerio');
var request = require('request');
var debug = require('debug')('blog:update');

//创建数据库链接
var db = mysql.createConnection({
    host: 'localhost',
    port:   3306,
    user: 'root',
    password:'root',
    database:'sina_blog',
})

db.query('show tables',function(err,tables){
    if(err){
        console.error(err.stack);
    }else{
        console.log(tables);
    }
    db.end();
})