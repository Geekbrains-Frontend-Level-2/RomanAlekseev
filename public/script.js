
const fs = require('fs')
const text = fs.readFileSync('/script.js', 'utf8')
console.log(text)
const now = new Date().toLocaleString()
console.log(now)

window.alert("Hello from script.js!");

/* const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('goods-list').innerHTML = goodsList;
  }
  
  renderGoodsList(goods); */