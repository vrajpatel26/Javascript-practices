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

const Promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve("first")},3000)
})


const Promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{resolve("second")},3000)
})


const Promise3 = new Promise( (resolve,reject) =>{
    setTimeout(()=>{resolve("third")},3000)
})

//------promise.all - required all promise is resolve

Promise.all([Promise1,Promise2,Promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
    
})

//-------promise.allsettled - can run if some is reject

