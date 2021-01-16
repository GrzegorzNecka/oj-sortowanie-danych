// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const trs = table.querySelectorAll("tbody tr");
const ths = table.querySelectorAll("thead th");

function sortBy(e) {
  console.log("target", e.target);
  const columnIndex = e.target.cellIndex;
  console.log("columnIndex", columnIndex);

  const theadRow = Array.from(ths);
  console.log("theadRow", theadRow);

  //============================

  const tbodyRows = Array.from(trs);

  tbodyRows.sort(function(a, b) {
    console.log("a", a.children[columnIndex]);

    console.log("b", b.children[columnIndex]);

    return a - b;
  });

  console.log(tbodyRows, tbodyRows);
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
