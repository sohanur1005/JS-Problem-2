// const products=[
//     {name:'shampo',price:200,quantity:5},
//     {name:'pant',price:1000 ,quantity:4},
//     {name:'shirt',price:800 ,quantity:3}
// ]

// function  totalPrice(products){
//     let sum=0;
//     for(let i=0;i<products.length;i++)
//     {

        
//        sum=sum+products.price;
       
//     }
//     return sum;
// }

// const total=totalPrice(products)
// console.log('Total price is :',total);



const products=[
    {name:'shampo',price:200,quantity:5},
    {name:'pant',price:1000 ,quantity:4},
    {name:'shirt',price:800 ,quantity:3}
]

function  totalPrice(products){
    let sum=0;
    for(let i=0;i<products.length;i++)
    {

      const total=  products[i].price * products[i].quantity;

        
       sum=sum+total;
       
    }
    return sum;
}

const total=totalPrice(products)
console.log('Total price is :',total);