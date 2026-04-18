// const value = fetch('https://jsonplaceholder.typicode.com/todos/1').
// then((res)=> res.json())
// .then((data)=>console.log(data));

// console.log((value));


// const person = {
//     name : "Md samrat hossain Rabbi",
//     address : "kushtia",
//     roll : 7,
//     age : 23

// };

// const jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);


// load function use with api

const loadData = () =>
{
 fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=> res.json())
 .then((data)=>console.log(data));
}
