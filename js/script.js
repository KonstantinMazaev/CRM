let name = document.querySelectorAll('.table__name');
for (let i = 0; i < name.length; i++){
  console.log(name[i].textContent)
}

let totalPrice = document.querySelectorAll('.table__total-price');
let total = 0;

for (let i = 0; i < totalPrice.length; i++) {
  total += Number(totalPrice[i].textContent)
}

console.log(`>> Общая сумма товара = $${total} <<`);
