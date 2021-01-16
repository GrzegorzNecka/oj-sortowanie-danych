const table = document.querySelector(".table-auto"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr"),
  df = document.createDocumentFragment();

function sortBy({ target }) {
  const theadRow = Array.from(ths);
  tbodyRows = Array.from(trs);
  columnIndex = target.cellIndex;

  tbodyRows.sort(function(a, b) {
    const tdA = a.children[columnIndex].textContent,
      tdB = b.children[columnIndex].textContent;

    if (tdA < tdB) {
      return 1;
    } else if (tdA > tdB) {
      return -1;
    } else {
      return 0;
    }
  });

  console.log(tbodyRows);
  tbodyRows.forEach(function(tr) {
    df.appendChild(tr);
  });

  table.querySelector("tbody").appendChild(df);
  console.log(table);
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
