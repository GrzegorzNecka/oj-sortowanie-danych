// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const trs = table.querySelectorAll("tbody tr");
const ths = table.querySelectorAll("thead th");

function sortBy() {
  console.log("sortuję");
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
