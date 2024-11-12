// ----------------Synchronous & Asynchronous-------------//

// Synchronous code(This loop takes time..)
console.log('start');
for(let index=0;index<200;index++){
    console.log('Synchronous code',index);
}
console.log('End');

// Asynchronous code(setTimeout,fetch,Promises)
console.log('start');
setTimeout(()=>{
    console.log('Asynchronous-runs in background allowing other code to run');
},30000);
console.log('End');

// ----------------PROMISES---------------- //

// Promises-Represent the complition of a event of asynchronous operation.
/**It has 3-states
 * Pending:outcome is unknown.
 * Fulfilled:successful exicution.
 * Reject:Operation Failed.**/

// Promise using constructer.
const checknumber=new Promise((resolve,reject)=>{
    if(-5<0.001){
        resolve('Resolved-It is grater');
    }else{
        reject('Rejected,condition is False -5 is too less than 0.001');
    }
});

// handling the promise 
/*.then() is used for success-executes if the promise is resolved.
 *.catch() is used for failure-executes if the promise is rejected */

checknumber.then((message)=>{
    console.log('then',message);   
}).catch((error)=>{
    console.log('Error',error);
});

// Function that returns the promise based on the i/p number.
function checkNumber(num){
    return new Promise((resolve,reject)=>{
      if(num>-50){
        const data={
            msg:'Resolved',
            statuscode:200,
            value:num
        };
        resolve(data);
      }else{
        reject('THe number is too small..');
      }  
    });
}

// calling the function.
checkNumber(150).then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log(error); 
});

// ------------API---------- //

/*HTTP request method
-GET:Retrives the data from the server
-POST:Send the data to the server
-PUT:Update existing data on the server
-DELETE:Remove data from the server */

const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
// Fetch data from the API
fetch(apiUrl)
    .then((res)=>res.json())
    .then((data)=>console.log('Data',data))
    .catch((error)=>console.log('Error',error));