const div = new MyQuery("div");
div
  .addParent("body")
  .addClasses("parent")


const div2 = new MyQuery("div");
div2.addClasses("child");

console.log(div, div2);

div.insertElement(div2);

const dropdown = new MyQuery("div");
dropdown.createDropdown([1, 5], [2, 3], "change", (e) => {
  console.log(e.target.value)
});

div2.insertElement(dropdown);
