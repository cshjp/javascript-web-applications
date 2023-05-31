(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
        }
        addParagraph() {
          const newParagraph = document.createElement("p");
          newParagraph.innerText = "This is a dynamic paragraph made by JavaScript!";
          this.mainContainerEl.append(newParagraph);
        }
        addParagraph2() {
          const newParagraph = document.createElement("p");
          newParagraph.innerText = "This is a dynamic paragraph made by JavaScript! A second time";
          this.mainContainerEl.append(newParagraph);
        }
        clearParagraphs() {
          const allParagraphs = document.querySelectorAll("p");
          allParagraphs.forEach((paragraph) => {
            paragraph.remove();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph();
  view.addParagraph2();
  view.clearParagraphs();
})();
