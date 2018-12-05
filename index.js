const express=require("express");
const logger=require('morgan');
const bodyparser=require('body-parser');

const app=express();

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

require('./routes/')(app);
app.get('*',(req,res)=>res.status(200).send({
    message : 'Welcome to the beginning if nothingness'
}));

module.exports=app;