// function outerFunction()
// {
//     function innerFunction()
//     {
//         console.log('this is the innerfunction');
//     }
//     return innerFunction;
// }
// const output = outerFunction();
// // console.log(output);
// output(); 

function counter()
{
    let count = 0;

    function increment()
    {
        count = count+1;
        console.log(count);
    }
    return increment;
}

const valueIncrease = counter();
valueIncrease();
