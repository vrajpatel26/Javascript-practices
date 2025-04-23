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