function MyQuery(type, id) {
  this.element = document.createElement(type);
  this.element.setAttribute("id", id);
}

MyQuery.prototype.addParent = function(parent) {
  document.querySelector(parent).appendChild(this.element);
  return this;
};

MyQuery.prototype.addAttributes = function(attributes) {
  for (let key in attributes) {
    this.element.setAttribute(key, attributes[key]);
  }
  return this;
};

MyQuery.prototype.addClasses = function(...classes) {
  classes.forEach(clas => {
    this.element.classList.add(clas);
  });
  return this;
};

MyQuery.prototype.insertElement = function(node) {
  this.element.appendChild(node.element);
  return this;
};

MyQuery.prototype.on = function(event, callback) {
  this.element.addEventListener(event, callback);
  return this;
};

MyQuery.prototype.append = function(where, node) {
  this.element.insertAdjacentHTML(where, node);
  return this;
};
