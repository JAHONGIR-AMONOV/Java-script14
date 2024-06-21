//Homework
let market = [
    {
        title: "moloko",
        type: 'milk',
        price: 12000,
        expDate: "2024-06-21"
    },
    {
        title: "cheese",
        type: 'milk',
        price: 68000,
        expDate: "2023-06-21"
    },
    {
        title: "watermelon",
        type: 'fruit',
        price: 8000,
        expDate: "2024-06-29"
    },
    {
        title: "banana",
        type: 'fruit',
        price: 24000,
        expDate: "2023-07-08"
    },
    {
        title: "apple",
        type: 'fruit',
        price: 5000,
        expDate: "2024-07-08"
    },
    {
        title: "baltika 7",
        type: 'alcohol',
        price: 18000,
        expDate: "2023-07-08"
    },
    {
        title: "jaguar",
        type: 'alcohol',
        price: 12000,
        expDate: "2025-07-08"
    },
]

let milkProducts = {
    total: 0,
    total_price: 0
}
let fruitProducts = {
    total: 0,
    total_price: 0
}
let alcoProducts = {
    total: 0,   
    total_price: 0
}

market.filter((item)  => {
    if(item.type === 'milk') {
        milkProducts.total++
    } else if(item.type === 'fruit') {
        fruitProducts.total++
    } else if(item.type === 'alcohol') {
        alcoProducts.total++
    } 
} )

market.forEach(item => {
    if (item.type === 'milk') {
      milkProducts.total_price += item.price;
    } else if (item.type === 'fruit') {
        fruitProducts.total_price += item.price;
    } else if (item.type === 'alcohol') {
        alcoProducts.total_price += item.price;
    }
  });

  console.log(milkProducts, fruitProducts, alcoProducts);

  
  let totalAmountOfProducts = milkProducts.total + fruitProducts.total + alcoProducts.total
  let totalPriceOfProducts = milkProducts.total_price + fruitProducts.total_price + alcoProducts.total_price
  
  let average_price = totalPriceOfProducts / totalAmountOfProducts
  
console.log(average_price);



let expiredProduct = []

market.forEach(item => {

  let expDate = new Date(item.expDate);

  if (new Date() > expDate) {
    expiredProduct.push(item);
  }
})

console.log(expiredProduct);