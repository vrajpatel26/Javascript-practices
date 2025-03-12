/*
const currentDate = new Date()
console.log(currentDate);
//Tue Mar 11 2025 10:47:12 GMT+0530 (India Standard Time)
// //2025-03-11T05:06:36.101Z-terminal output

const date1 = new Date(2025,2)
console.log(date1);
//Sat Mar 01 2025 00:00:00 GMT+0530 (India Standard Time)
// //2025-02-28T18:30:00.000Z-terminal output


const date2 = new Date(2025,1,18)
console.log(date2);
//Tue Feb 18 2025 00:00:00 GMT+0530 (India Standard Time)
//2025-02-17T18:30:00.000Z - terminal output

const date3 = new Date(2025,1,18,20)
console.log(date3);
//Tue Feb 18 2025 20:00:00 GMT+0530 (India Standard Time)
//2025-02-18T14:30:00.000Z - terminal output

const date4 = new Date(2025,1,18,20,40)
console.log(date4);
//Tue Feb 18 2025 20:40:00 GMT+0530 (India Standard Time)
//2025-02-18T15:10:00.000Z

const date5 = new Date(2025,1,18,20,40,58)
console.log(date5);
//Tue Feb 18 2025 20:40:58 GMT+0530 (India Standard Time)
//2025-02-18T15:10:58.000Z
*/


//----------------Get Date methods-----------------------
/*
const currdate = new Date();
const year = currdate.getFullYear()
const month = currdate.getMonth()
const date = currdate.getDate()
const day = currdate.getDay()


console.log(year); //2025
console.log(month);//2(march) bcz js month start from 0 index
console.log(date); //11
console.log(day); //2(tuesday) //start 0 like 0 for sunday , 1 for monday....
*/



//-------------JS Set date method-----------
/*
const date = new Date()
console.log(date)//2025-03-11T06:10:31.933Z

//date.setFullYear(2026)
//console.log(date);//2026-03-11T06:10:31.933Z

//date.setMonth(5)
//console.log(date);//2025-06-11T06:11:14.566Z   (start from 0 so in output we get 6)

date.setDate(15)
console.log(date);//2025-06-15T06:12:46.454Z
*/


//--------------Usefull methods of Date object in JS
/*
//1.toLocaleString()
const date = new Date()
const LocaleString = date.toLocaleString()
console.log(LocaleString); //  3/11/2025, 12:07:09 PM

//2.toLocalDateString()
const date1 = new Date()
const LocaleDateString = date1.toLocaleDateString()
console.log(LocaleDateString); //  3/11/2025

//3.toLocalTimeString()
const date2 = new Date()
const LocaleTimeString = date2.toLocaleTimeString()
console.log(LocaleTimeString) //12:09:28 PM

//4.parse()- conver UTC time into milliseconds
const dateString = "2025-03-11T06:41:00.090Z"
const parseDate = Date.parse(dateString)
console.log(parseDate) //1741675260090
*/

//console.log(Date.now()) //1741675611586



//-----------------------Interview Questions------------------

//1.Write a function to add 7 days to a given date

const addDaysToDate = (date,extraDay) =>{
    let updateDate = date.setDate(date.getDate()+extraDay)
    return new Date(updateDate)
}

//for an exp:
const date = new Date("2025-03-11")
const newDate = addDaysToDate(date,7)
console.log(newDate);


//2.Write a function to calcute the difference in days btwn twp given dates

const getDayDiff = (d1,d2) =>{

    let oneDay = 24*60*60*1000;
    let diff = d2 - d1 ;
    return Math.round(diff / oneDay);
}
//7

//for exp :
const date1 = new Date("2025-03-11")
const date2 = new Date("2025-03-18")
console.log(getDayDiff(date1,date2));

