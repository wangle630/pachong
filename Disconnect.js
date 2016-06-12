var async = require('async');

var arr=[1,2,3,4,5];

async.each(arr,function(item,done){
    //通过setTimeout执行一个异步任务
    setTimeout(function(){
        console.log(item);
        done();
    },Math.random()*1000);
},function(err){
    if(err) throw err;
    console.log('完成');
})