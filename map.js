const foods = ['banana', 'mango', 'apple', 'cheri'];

const firstUpperCase = foods.map(fst=>{
   if(fst == 'banana')
   {
    return fst.toUpperCase()
   }

   return fst;
}
)
console.log(firstUpperCase);


