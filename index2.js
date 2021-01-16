const table = document.querySelector(".table-auto"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr");

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
}

for (var i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
