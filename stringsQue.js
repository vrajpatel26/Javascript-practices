//------------ Que :  1 - print letter "a" to "z"-----------

/*
//--method to find char code of charactrer
console.log("a".charCodeAt(0));//97
console.log("z".charCodeAt(0));//122


//--method to find character of char code
console.log(String.fromCharCode(97));//a
console.log(String.fromCharCode(122));//z
*/

/*
for(char=97 ; char <=122 ; char++){
    console.log(String.fromCharCode(char));
}
*/




//----- Que : 2- write a function to check all vowels are present in the string or not.

/*
const checkAllVowels = (str) =>{
 
    const vowels = "aeiou";

    for(let char of vowels){
        // console.log(char); //get indiviual char like a,e,i,o,u
        // console.log(str.includes(char));//get individual true/false

        if(!str.includes(char)){
            return false ;
        }
        
    }
    return true ;
}

console.log(checkAllVowels("my name is vraj patel "));//false
console.log(checkAllVowels("om taking oud perfume "));//true
*/



//---Que : 3 - write the function to count the number of vowels in a string.

/*
const countVowels = (str) =>{

    const vowels = "aeiou";
    let count = 0;
    for(let char of str){
        // console.log(char); //get all alphabet of string
        //console.log(vowels.includes(char)) // get t/f of all word of strings.

        if(vowels.includes(char)){
            count ++ ;
        }
    }
    return count;
}


console.log(countVowels("my name is vraj patel"));//6
console.log(countVowels("amazing item is oud wood perfume"));//13
*/





//Que : 4 - write a javascript function isPangram that takes a string as input and return true if the string is a pangram.
//pangram means contains all letter of the alphabet.


const pangramChecker = (str) => {

    let inputArr = str.toLowerCase().split("")
    // console.log(inputArr);

    const values = inputArr.filter((currElement)=>

        currElement.charCodeAt() >= "a".charCodeAt() && currElement.charCodeAt() <= "z".charCodeAt()
    )
//    console.log(values);

// console.log([...new Set(values)].length );

   return [...new Set(values)].length === 26 ;
    
}

console.log(pangramChecker("The quick brown fox jumps ove the lazy dog ")); //true 

// console.log(pangramChecker("The quick brown fox jumps ove the lazy dog ")); //true 
