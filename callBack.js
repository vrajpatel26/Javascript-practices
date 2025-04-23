//High-order function :- this is function that take another function in arguments or return a function as result


//callback function :- it is function that placed into another function's arguments and execute after the completion of task.

function Details(name ,callback){
    console.log("Received input : "+name);
    callback(name)
    
}

function castDetails(name){
    console.log("hello ,"+name);
    
}

Details("Vraj",castDetails)