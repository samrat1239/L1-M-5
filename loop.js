// // for of loop
// const fruits = ['mango', 'orange', 'waterlemon'];

// for(const fruit of fruits)
// {
//     console.log(fruit.length);
// }
// console.log(`Length of fruits array ${fruits.length}`);



// << for in loop use in object>>........

const sorceOfIncome = {
    library : 40000,
    tution : 7000,
    freelancing : "1 lakh",
    cow_business : "3 lakh"
}

for(const income in sorceOfIncome )
{
    console.log(income, sorceOfIncome[income]);
}