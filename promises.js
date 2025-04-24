/*const pro = new Promise((resolve,reject) =>{

    setTimeout(() => {
    resolve("I am fine")
    // reject("i am not fine")
    },2000);
})

pro.then((res)=>{
console.log(res);

})
.catch((error)=>{
console.log(error);

})
.finally(()=>{
    console.log("we all are fine");
    
})*/


//-------------------------------------------------------------------------


/*
studentName = "Vraj"

const enrollStudent = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessfull = Math.random() > 0.6

            if (isSuccessfull) {
                resolve(`Enrollment of ${studentName} is successfull`);

            }
            else {
                reject(`Enrollment of ${studentName} is failed`);

            }
        }, 2000);
    })
}

enrollStudent(studentName)
    .then((res) => {
        console.log(res);

    })
    .catch((error) => {
        console.log(error);

    })
    .finally(() => {
        console.log("Enrollment process is done !");

    })
*/


//-----------------------Promises method--------------------

const Promise11 = new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve("first")},3000)
})


const Promise12 = new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve("second")},3000)
})


const Promise13 = new Promise( (resolve,reject) =>{
    setTimeout(()=>{resolve("third")},3000)
})

//------promise.all - required all promise is resolve

Promise.all([Promise11,Promise12,Promise13])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
    
})

//-------promise.allsettled - can run if some is reject

const Promise21 = new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve("first")},3000)
})


const Promise22 = new Promise((resolve,reject) =>{
    setTimeout(()=>{reject("second")},3000)
})


const Promise23 = new Promise( (resolve,reject) =>{
    setTimeout(()=>{resolve("third")},3000)
})


Promise.allSettled([Promise21,Promise22,Promise23])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
})


//----------promise.race - whose time is low & first occured  that is output , doesnt matter resolve/reject


const Promise31 = new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve("first")},3000)
})


const Promise32 = new Promise((resolve,reject) =>{
    setTimeout(()=>{reject("second")},2000)
})


const Promise33 = new Promise( (resolve,reject) =>{
    setTimeout(()=>{resolve("third")},3000)
})



Promise.race([Promise31,Promise32,Promise33])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
})