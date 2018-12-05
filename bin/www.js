/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const http=require('http');
const app=require('../index');
const path = require('path');

const port = parseInt(process.env.PORT,10) || 3000;

app.set('post',port);

const server=http.createServer(app);
console.log("server set on localhost:"+port);
server.listen(port);


