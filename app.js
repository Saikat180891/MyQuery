const div = new MyQuery("div", "navbar");
div
  .addParent("body")
  .addClasses("parent")
  .on("click", e => {
    console.log(e);
  });

const div2 = new MyQuery("div", "brand");
div2.addClasses("child");

console.log(div, div2);

div.insertElement(div2);
