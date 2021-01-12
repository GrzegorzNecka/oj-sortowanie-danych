// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const tr = table.querySelectorAll("tr");
const theadRow = table.querySelector("thead tr");
const tbodyRows = table.querySelectorAll("tbody tr");

console.log(tbodyRows);

theadRow.addEventListener("click", e => {
  if (e.target.localName === "a") {
    tbodyRows.forEach(tr => {
      console.log(tr);
    });

    // console.dir(e.target);
    // console.log(e.target.localName);
    // console.log(typeof e.target.localName);
  }
});
