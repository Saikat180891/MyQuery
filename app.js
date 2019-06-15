const navbar = new MyQuery("div");
navbar.addClasses("navbar", "flex-between", "v-center").addParent("body");

const brand = new MyQuery("div");
brand.addClasses("brand", "flex-center", "v-center").addText("Brand");

const rightControls = new MyQuery("div");
rightControls.addClasses("brand");

const list = new MyQuery("ul");
list.addClasses("list").on("click", e => {
  console.log(e.target);
});

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

myArray.forEach(ele => {
  const listItem = new MyQuery("li");
  listItem.addClasses("listitem").addText("Hello " + ele);
  list.insertInnerElement(listItem);
});

console.log(list);

navbar
  .insertInnerElement(brand)
  .insertInnerElement(rightControls)
  .insertAfter(list);
