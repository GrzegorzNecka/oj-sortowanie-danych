const table = document.querySelector(".table-auto"),
  tbody = table.querySelector("tbody "),
  ths = table.querySelectorAll("thead th"),
  trs = tbody.querySelectorAll("tr");

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

const sortNumber = (tbodyRows, columnIndex) => {
  tbodyRows.sort(function(a, b) {
    const tdA = a.children[columnIndex].textContent,
      tdB = b.children[columnIndex].textContent;
    return tdA - tdB;
  });
};

const appendToDocumentFragment = (tbodyRows, dokFragment) => {
  tbodyRows.forEach(function(tr) {
    dokFragment.appendChild(tr);
  });
};

const setNewLayout = tbodyRows => {
  const dokFragment = document.createDocumentFragment();
  const evenTrs = tbody.querySelectorAll("tr:nth-child(2)");
  deleteNthColor(tbodyRows);
  appendToDocumentFragment(tbodyRows, dokFragment);
  tbody.appendChild(dokFragment);

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
  tbodyRows.map(tr => {
    const secondsElem = tr.children[columnIndex];
    const secondsVal = parseInt(secondsElem.textContent);
    const newSecondsVal = convertSecondIntoFullTime(secondsVal);

    secondsElem.innerText = `${newSecondsVal[0]}:${newSecondsVal[1]}`;

    return tr;
  });
};

function sortBy({ target }) {
  if (target.tagName != "A") {
    return;
  }

  const tbodyRows = Array.from(trs);
  const columnIndex = target.parentElement.cellIndex;

  sortNumber(tbodyRows, columnIndex);
  setFullTime(tbodyRows, columnIndex);
  setNewLayout(tbodyRows);
}

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy);
}
