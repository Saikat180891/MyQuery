function MyQuery(type) {
  this.element = document.createElement(type);
}

MyQuery.prototype.addParent = function (parent) {
  document.querySelector(parent).appendChild(this.element);
  return this;
};

MyQuery.prototype.setAttributes = function (attributes) {
  for (let key in attributes) {
    this.element.setAttribute(key, attributes[key]);
  }
  return this;
};

MyQuery.prototype.addClasses = function (...classes) {
  classes.forEach(clas => {
    this.element.classList.add(clas);
  });
  return this;
};

MyQuery.prototype.insertElement = function (node) {
  this.element.appendChild(node.element);
  return this;
};

MyQuery.prototype.on = function (event, callback) {
  this.element.addEventListener(event, callback);
  return this;
};

MyQuery.prototype.append = function (where, node) {
  this.element.insertAdjacentHTML(where, node);
  return this;
};

MyQuery.prototype.createDropdown = function (value = [], viewValue = [], event, callback) {
  if (viewValue.length !== value.length) {
    throw "Length of arg1 not equal to length of arg2";
  }
  this.select = document.createElement("select");
  value.forEach((val, index) => {
    const option = document.createElement("option");
    option.value = val;
    option.innerText = viewValue[index];
    this.select.appendChild(option);
  });
  if (typeof callback === "function" && typeof event === "string") {
    this.select.addEventListener(event, callback);
  }
  this.element.appendChild(this.select);
  return this;
};
