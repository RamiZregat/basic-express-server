'use strict';

const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3030
const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator=require('./middleware/validator')

app.use(logger);


app.get('/',(req,res)=>{
    res.status(200).send('Hello this is the Home page')
})

//http://localhost:3030/person?name=${name}
app.get('/person',validator,(req,res)=>{
    let name=req.query.name
const object={
    'name':name
}
    res.status(200).json(object)
})






app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }
  
  
  module.exports = {
    app,
    start
  }