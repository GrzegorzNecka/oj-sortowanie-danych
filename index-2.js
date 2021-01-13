// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const tr = table.querySelectorAll("tr");
const theadRow = table.querySelector("thead tr");
const tbodyRows = table.querySelectorAll("tbody tr");

const createWalker = elem =>
  document.createTreeWalker(elem, NodeFilter.SHOW_ELEMENT);

const walk = el => {
  const walker = createWalker(el);
  console.log("tr", el);
  while (walker.nextNode()) {
    const elem = walker.currentNode;
    const index = elem.cellIndex;
    console.log(elem);
    console.log("index", index);

    if (index === 2) {
      console.log("currentNode", elem);
    }
  }
};

theadRow.addEventListener("click", headTd => {
  if (headTd.target.localName === "a") {
    tbodyRows.forEach((tr, i) => {
      console.log(tr, i);
      console.dir(tr);
      console.log("sectionRowIndex", tr.sectionRowIndex);

      if (i == 0) {
        tr.sectionRowIndex = 1;
      }

      // walk(tr);
    });

    // console.dir(e.target);
    // console.log(e.target.localName);
    // console.log(typeof e.target.localName);
  }
});
