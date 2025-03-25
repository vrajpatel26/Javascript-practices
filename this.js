const obj = {
    id:1,
    name:"vraj",
    greet:function(){
        console.log(this);
        
    }
}
obj.greet() //return whole object

//-------------------------------

const obj1={
    id:2,
    name:"viraj",
    greet(){
        console.log(this);
        
    }

}
obj1.greet() // return whole object



//----------------------------

const obj3 = {
    id:3,
    name:"hardik",
    greet : () =>{
        console.log(this);
        
    }
}
obj3.greet() //return global(window) object