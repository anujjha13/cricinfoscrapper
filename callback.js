const fs=require("fs");

console.log("Before :");

fs.readFile("file.txt",cb); //since wea re using asynchronous thats'why it is executed after all lines executes and then cb calling done

function cb(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data+"");
    }
}

console.log("After: ");