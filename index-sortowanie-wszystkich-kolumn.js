const table = document.querySelector(".table-auto"),
  ths = table.querySelectorAll("thead th"),
  trs = table.querySelectorAll("tbody tr");

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

const sortNumber = (tbodyRows, columnIndex) => {
  tbodyRows.sort(function(a, b) {
    const tdA = a.children[columnIndex].textContent,
      tdB = b.children[columnIndex].textContent;
    return tdA - tdB;
  });
};

const setNewLayout = tbodyRows => {
  const df = document.createDocumentFragment();

  tbodyRows.forEach(function(tr) {
    df.appendChild(tr);
  });

  table.querySelector("tbody").appendChild(df);
  addNthColor(table.querySelectorAll("tbody tr:nth-child(2)"));
};
//-----------------------

function sortBy({ target }) {
  const theadRow = Array.from(ths),
    tbodyRows = Array.from(trs);

  let columnIndex = target.cellIndex;

  deleteNthColor(tbodyRows);

  if (target.tagName === "A") {
    columnIndex = 2;
    sortNumber(tbodyRows, columnIndex);
  } else if (columnIndex === 2) {
    sortNumber(tbodyRows, columnIndex);
  } else if (target.tagName === "TH") {
    sortText(tbodyRows, columnIndex);
  } else {
    return;
  }

  setNewLayout(tbodyRows);
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
