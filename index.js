// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const trs = table.querySelectorAll("tbody tr");
const ths = table.querySelectorAll("thead th");
const makeArr = htmlElem => Array.from(htmlElem);

function sortBy(e) {
  console.dir("target", e.target);
  const index = e.target.cellIndex;
  // console.dir(e.target.cellIndex);
  let anc = makeArr(ths);
  console.log(anc);

  console.log(anc.indexOf(e.target));

  //============================

  makeArr(trs).sort((a, b) => {
    const tdA = a.children[index];
    const tdB = b.children[index];
    // console.log(tdA);
    // console.log(tdB);
  });

  //test
  makeArr(trs).forEach(a => {
    const tdA = a.children[index];

    console.log(tdA);
  });
}

//13:15 -- https://eduweb.pl/programowanie-i-www/javascript/javascript-podstawy/sortowanie-tabeli-po-kolumnach-cz.-1
//============================
for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy, true);
}
