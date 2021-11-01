'use strict';

function validator (req,res,next){
    
    if(req.query.name){     
        console.log('name: ',req.query.name);
        next();
    }else{
        next('Error there is no name!');
    }
    
}
module.exports=validator
