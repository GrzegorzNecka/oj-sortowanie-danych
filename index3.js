// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const trs = table.querySelectorAll("tbody tr");
const ths = table.querySelectorAll("thead th");

function sortBy(e) {
  console.dir(e.target);
  // console.dir(e.target.cellIndex);
  let anc = Array.from(ths);
  console.log(anc);
  console.log(anc.indexOf(e.target));
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy, true);
}
