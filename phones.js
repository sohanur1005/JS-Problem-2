const phones=[
    {name:'samsung',price:20000,camera:'15mp',color:'black'},
    {name:'Iphone',price:100000,camera:'15mp',color:'black'},
    {name:'vivo',price:27000,camera:'15mp',color:'black'},
    {name:'walton',price:12000,camera:'15mp',color:'black'},
    {name:'realme',price:29000,camera:'15mp',color:'black'},
]

function cheapestPhone(phones){
    let min=phones[0];
    for(let i=0;i<phones.length;i++)
    {
        if(phones[i].price<min.price)
        {
            min=phones[i];
        }
    }
    return min;

}
const cheap=cheapestPhone(phones);
console.log("cheapest phone is:",cheap);