
//------------------setTimeOut()-----------------
/*
const delayedFunction = () =>{
    console.log("we are here after delay 2 second");
}

setTimeout(delayedFunction,2000)
*/



//---------------setInterval()----date contionous in loop after given time

/*
const delayedFunction1 = () =>{
    console.log("we are here after every 2 second");
}

setInterval(delayedFunction1,2000)
*/


//----------------clearTimeOut()--if you want to cancel scheduled timeout before occurs , you can use clearTimeOut method.

const delayedFunction2 = () =>{
    console.log("we are here after delay 2 second");
}

const stop = setInterval(delayedFunction2,2000)
clearTimeout(stop)


//------clearInterval - if you want to cancel scheduled timeout after perticular occurs,then it is use------------

const repeatedFunc = () =>{
    console.log("This is repeatd every after 1 second");
    
}
repeatedFunc()
const intervalId = setInterval(repeatedFunc,1000)

setTimeout(()=>{
    clearInterval(intervalId)
},5000)