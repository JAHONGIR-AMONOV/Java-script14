// const cars = [
//     {
//         id: 1,
//         model: "malibu",
//         price: 34000,
//         year: 2023
//     },
//     {
//         id: 2,
//         model: "Onix",
//         price: 14000,
//         year: 2024
//     },
//     {
//         id: 3,
//         model: "Monza",
//         price: 17000,
//         year: 2023
//     },
//     {
//         id: 4,
//         model: "Gentra",
//         price: 13500,
//         year: 2022
//     },
//     {
//         id: 5,
//         model: "Captiva",
//         price: 26000,
//         year: 2024
//     },
//     {
//         id: 6,
//         model: "Equinox",
//         price: 32000,
//         year: 2024
//     },
// ]

// const from = prompt('от этой суммы')
// const up = prompt('до этой суммы')

// let findedCars = []

// cars.forEach((item) => {
//     if(cars.price > from && cars.price < up) {
//         findedCars.push(item)
//     } 
// })

// console.log(findedCars);

//MARKET

// let milkProducts = {
//     total: 0,
//     total_price: 0
// }
// let fruitProducts = {
//     total: 0,
//     total_price: 0
// }
// let alcoProducts = {
//     total: 0,   
//     total_price: 0
// }

// market.filter((item)  => {
//     if(item.type === 'milk') {
//         milkProducts.total++
//     } else if(item.type === 'fruit') {
//         fruitProducts.total++
//     } else if(item.type === 'alcohol') {
//         alcoProducts.total++
//     } 
// } )

// market.forEach(item => {
//     if (item.type === 'milk') {
//       milkProducts.total_price += item.price;
//     } else if (item.type === 'fruit') {
//         fruitProducts.total_price += item.price;
//     } else if (item.type === 'alcohol') {
//         alcoProducts.total_price += item.price;
//     }
//   });

//   console.log(milkProducts, fruitProducts, alcoProducts);

  
//   let totalAmountOfProducts = milkProducts.total + fruitProducts.total + alcoProducts.total
//   let totalPriceOfProducts = milkProducts.total_price + fruitProducts.total_price + alcoProducts.total_price
  
//   let average_price = totalPriceOfProducts / totalAmountOfProducts
  
// console.log(average_price);


// let expiredProduct = []

// market.forEach(item => {

//   let expDate = new Date(item.expDate);

//   if (new Date() > expDate) {
//     expiredProduct.push(item);
//   }
// })

// console.log(expiredProduct);


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

const from = prompt('от этой суммы')
const up =prompt('до этой суммы')

let findedProducts = ""

market.forEach(item => {
    if(item.price > from && item.price < up) {
        findedProducts += ` ${item.title + " - $" + item.price}`
    }
})

if(findedProducts.trim().length > 0) {
    const selecting = prompt(`По вашему запросу найдено: 
        ${findedProducts} 

        Если вам понравилося товар из этого списка то напишите название ниже
        `).trim()
}

if (findedProducts.includes(selecting.toLowerCase())) {
    const finded = market.find(item => item.title.toLowerCase() === selected.toLowerCase());
  
    const goingToBuy = confirm(`
  
  Характеристики товаров:
  
  Type: ${finded.title},
  
  Price: ${finded.price},
  
  ExpDate: ${finded.expDate}
  
  Вы хотите купить этот товар?
  
  `);
  
    if (goingToBuy === true) {
      const purchase = +prompt(`Введите сумму продукта: ${finded.price}`);
  
      if (Number(purchase) >= finded.price) {
        alert(`Поздравляем вы приобрели товар ${finded.type} ваш остаток: ${purchase - finded.price}`);
      } else {
        alert(`Недостаточно средств: ${finded.type}`);
      }
    } else {
      alert('По вашему запросу ничего не найдено');
    }
  } 