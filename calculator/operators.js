let btnPlus = document.querySelector("#plus");
btnPlus.addEventListener("click", () => {
  getResult();
  operator1 = "+";
});

let btnMinus = document.querySelector("#minus");
btnMinus.addEventListener("click", () => {
  getResult();
  operator1 = "-";
});

let btnMult = document.querySelector("#mult");
btnMult.addEventListener("click", () => {
  getResult();
  operator1 = "*";
});
let btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", () => {
  getResult();
  operator1 = "/";
});
