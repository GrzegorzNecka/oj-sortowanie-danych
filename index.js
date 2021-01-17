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

// const sortText = (tbodyRows, columnIndex) => {
//   tbodyRows.sort(function(a, b) {
//     const tdA = a.children[columnIndex].textContent,
//       tdB = b.children[columnIndex].textContent;

//     if (tdA < tdB) {
//       return 1;
//     } else if (tdA > tdB) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// };

const sortNumber = (tbodyRows, columnIndex) => {
  tbodyRows.sort(function(a, b) {
    const tdA = a.children[columnIndex].textContent,
      tdB = b.children[columnIndex].textContent;
    return tdA - tdB;
  });
};

const setNewLayout = tbodyRows => {
  const dokumentFragment = document.createDocumentFragment();

  tbodyRows.forEach(function(tr) {
    console.log(tr);
    dokumentFragment.appendChild(tr);
  });

  table.querySelector("tbody").appendChild(dokumentFragment);
  addNthColor(table.querySelectorAll("tbody tr:nth-child(2)"));
};

const convertSecondIntoFullTime = seconds => {
  const fullyMinutes = Math.floor(seconds / 60),
    hours = Math.trunc(fullyMinutes / 60),
    minutes = fullyMinutes % 60;

  return [hours, minutes];
};

//-----------------------

const setFullTime = (tbodyRows, columnIndex) => {
  const newTbodyRows = tbodyRows.map(tr => {
    const secondsElem = tr.children[columnIndex];
    const secondsVal = parseInt(secondsElem.textContent);

    console.log(convertSecondIntoFullTime(secondsVal));

    const newSecondsVal = convertSecondIntoFullTime(secondsVal);
    secondsElem.innerText = `${newSecondsVal[0]}:${newSecondsVal[1]}`;

    return tr;
  });

  console.dir(newTbodyRows);
};

function sortBy({ target }) {
  const theadRow = Array.from(ths);
  const tbodyRows = Array.from(trs);
  let columnIndex = target.cellIndex;

  if (target.tagName === "A") {
    columnIndex = target.parentElement.cellIndex;
    deleteNthColor(tbodyRows);
    sortNumber(tbodyRows, columnIndex);

    setFullTime(tbodyRows, columnIndex);

    setNewLayout(tbodyRows);
  } else {
    return;
  }
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
