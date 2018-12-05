/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const path=require('path');

module.exports={
    "config":path.resolve('./config','config.json'),
    "models_path":path.resolve('./models'),
    "seeders-path":path.resolve("./seeders"),
    "migrations-path":path.resolve('./migrations')
};

