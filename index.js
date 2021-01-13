// Tutaj napisz swój kod

const table = document.querySelector(".table-auto");
const tr = table.querySelectorAll("tr");
const theadRow = table.querySelector("thead tr");
const tbodyRows = table.querySelectorAll("tbody tr");

const createWalker = elem =>
  document.createTreeWalker(elem, NodeFilter.SHOW_ELEMENT);

theadRow.addEventListener("click", e => {
  if (e.target.localName === "a") {
    tbodyRows.forEach(tr => {
      const walker = createWalker(tr);

      while (walker.nextNode()) {
        const elem = walker.currentNode;
        const index = elem.cellIndex;
        console.dir(elem);
        console.dir(index);
      }
    });

    // console.dir(e.target);
    // console.log(e.target.localName);
    // console.log(typeof e.target.localName);
  }
});
