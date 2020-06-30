import format_result from "./format_result.js";
import statement from "./statement.js";

// в invoices.json ключи сделаны числовыми, убрано дублирование информации о типе пьесы
const invoices = [
  {
    customer: "MDT",
    performance: [
      { playId: 1, audience: 55 },
      { playId: 2, audience: 35 },
      { playId: 3, audience: 40 },
    ],
  },
  {
    customer: "MDT_new",
    performance: [
      { playId: 2, audience: 25 },
      { playId: 3, audience: 60 },
    ],
  },
];
const plays = {
  "1": { name: "Гамлет", type: "tragedy" },
  "2": { name: "Ромео и Джульетта", type: "tragedy" },
  "3": { name: "Отелло", type: "comedy" },
};

console.log("invoices =", invoices);
console.log("plays =", plays);

//рисуем список клиентов на экране на основе json
const select_customer = document.getElementById("select_customer");
let inner;
invoices.forEach((invoice) => {
  inner += `<option value="${invoice.customer}">${invoice.customer}</option>`;
});
select_customer.innerHTML = "<option disabled>Клиент</option>" + inner;

//считаем все инвойсы
let statement_all = [];
for (let invoice of invoices) {
  statement_all[invoice.customer] = statement(invoice, plays);
}

const print_invoice = document.getElementById("print_invoice");
let result = document.getElementById("statement");

//какой инвойс выводить на экран по желанию пользователя
select_customer.addEventListener("change", function (event) {
  result.innerHTML = format_result(statement_all[select_customer.value]);
});

print_invoice.addEventListener("click", function (event) {
  alert("Тут будет вывод на печать");
});
