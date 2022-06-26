const request=require("request");

request('https://www.google.com',function(error,response,body){
    if(error){
        console.log('error:' , error);
    }
    else{
        console.log('body:',body);
    }
});