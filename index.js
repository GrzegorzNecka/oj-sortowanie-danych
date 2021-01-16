const table = document.querySelector(".table-auto"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr"),
  df = document.createDocumentFragment();

const deleteNthColor = row => {
  row.forEach(tr => {
    if (tr.classList.contains("bg-gray-100")) {
      tr.classList.remove("bg-gray-100");
    }
  });
};

const addNthColor = newTable => {
  newTable[0].classList.add("bg-gray-100");
};

const sortText = (tbodyRows, columnIndex) => {
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
};

//-----------------------

function sortBy({ target }) {
  const theadRow = Array.from(ths);
  tbodyRows = Array.from(trs);
  columnIndex = target.cellIndex;

  deleteNthColor(tbodyRows);

  sortText(tbodyRows, columnIndex);

  console.log(tbodyRows);
  tbodyRows.forEach(function(tr) {
    df.appendChild(tr);
  });

  const appendNewLayout = table.querySelector("tbody").appendChild(df);
  addNthColor(table.querySelectorAll("tbody tr:nth-child(2)"));
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
