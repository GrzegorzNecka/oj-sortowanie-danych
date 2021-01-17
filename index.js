const table = document.querySelector(".table-auto"),
  tbody = table.querySelector("tbody"),
  ths = table.querySelectorAll("thead th"),
  trs = tbody.querySelectorAll("tr"),
  evenTrs = () => tbody.querySelectorAll("tr:nth-child(2)");

//------ auxiliary functions

const deleteEvenTrColor = row => {
  row.forEach(tr => {
    if (tr.classList.contains("bg-gray-100")) {
      tr.classList.remove("bg-gray-100");
    }
  });
};

const addEvenTrColor = newTable => {
  newTable[0].classList.add("bg-gray-100");
};

const setNewTimeVal = seconds => {
  const fullyMinutes = Math.floor(seconds / 60);
  const hours = Math.trunc(fullyMinutes / 60);
  const minutes = fullyMinutes % 60;

  return [hours, minutes];
};

const setFullyTime = (tbodyRows, columnIndex) => {
  tbodyRows.forEach(tr => {
    const getTimeElem = tr.children[columnIndex];
    const getTimeVal = parseInt(getTimeElem.textContent);
    const newTimeVal = setNewTimeVal(getTimeVal);

    const setFormatedVal = (getTimeElem.innerText = `${newTimeVal[0]}:${
      newTimeVal[1]
    }`);
  });
};

const sortByNumbers = (tbodyRows, columnIndex) => {
  tbodyRows.sort(function(a, b) {
    const tdA = a.children[columnIndex].textContent;
    const tdB = b.children[columnIndex].textContent;

    return tdA - tdB;
  });
};

const setNewLayout = tbodyRows => {
  const docFragment = document.createDocumentFragment();
  const appendToDocFragment = tbodyRows.forEach(function(tr) {
    docFragment.appendChild(tr);
  });

  const appendToTable = tbody.appendChild(docFragment);
};

const createNewLayout = tbodyRows => {
  deleteEvenTrColor(tbodyRows);
  setNewLayout(tbodyRows);
  addEvenTrColor(evenTrs());
};

//------executing  functions

function sortBy({ target }) {
  if (target.tagName != "A") {return;}

  const columnIndex = target.parentElement.cellIndex;
  const tbodyRows = Array.from(trs);

  const checkingFormat = tbodyRows.forEach(tr => {
    const timeElem = tr.children[columnIndex];
    if (timeElem.textContent.indexOf(":") === 1) {return;}

    sortByNumbers(tbodyRows, columnIndex);
    setFullyTime(tbodyRows, columnIndex);
    createNewLayout(tbodyRows);
  });
}

function sortTable() {
  for (let i = 0; i < ths.length; i++) {
    ths[i].addEventListener("click", sortBy);
  }
}

sortTable();
