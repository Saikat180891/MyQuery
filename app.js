let options = [
  { value: "1", viewValue: "One" },
  { value: "2", viewValue: "Two" },
  { value: "3", viewValue: "Three" },
  { value: "4", viewValue: "Four" }
];
const select1 = $("#select-1");
select1.dropdown(options, e => {
  console.log(e);
});

const form = $("#form");

const dynamicElements = $("#dynamic-elements");

const add = $("#add");
add.on("click", () => {
  const input = document.createElement("input");
  const br = document.createElement("br");
  input.type = "text";
  dynamicElements.append(input);
  dynamicElements.append(br);
});

form.on("submit", e => {
  e.preventDefault();
  e.stopPropagation();
  console.log(e.target.id);
  if (e.target.id === "form") {
    console.log(document.myform);
  }
});
