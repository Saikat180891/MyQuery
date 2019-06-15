function MyQuery(type) {
  this.element = document.createElement(type);
}

MyQuery.prototype.addParent = function(parent) {
  document.querySelector(parent).appendChild(this.element);
  return this;
};

MyQuery.prototype.setAttributes = function(attributes) {
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

MyQuery.prototype.insertInnerElement = function(node) {
  this.element.appendChild(node.element);
  return this;
};

MyQuery.prototype.addText = function(text) {
  let textNode = document.createTextNode(text);
  this.element.appendChild(textNode);
  return this;
};

MyQuery.prototype.addInnerHTML = function(html) {
  this.element.innerHTML = html;
  return this;
};

MyQuery.prototype.on = function(event, callback) {
  this.element.addEventListener(event, callback);
  return this;
};

MyQuery.prototype.append = function(where, node) {
  this.element.insertAdjacentHTML(where, node.element);
  return this;
};

MyQuery.prototype.insertAfter = function(node) {
  this.element.after(node.element);
  return this;
};

MyQuery.prototype.createDropdown = function(
  value = [],
  viewValue = [],
  event,
  callback
) {
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

function $(selector) {
  const self = {};
  self.selector = selector;
  self.element = document.querySelector(selector);
  self.text = function(text) {
    self.element.innerText = text;
    return self;
  };
  self.html = function(HTML) {
    self.element.innerHTML = HTML;
    return self;
  };
  self.css = function(property, value) {
    self.element.style[property] = value;
    return self;
  };

  self.addClass = function(className) {
    self.element.classList.add(className);
    return self;
  };
  self.removeClass = function(className) {
    self.element.classList.remove(className);
    return self;
  };
  self.on = function(event, callback) {
    self.element.addEventListener(event, callback);
    return self;
  };
  self.value = function() {
    return self.element.target.value;
  };
  self.append = function(elem) {
    return self.element.appendChild(elem);
  };
  self.attr = function(name, value) {
    if (!value) {
      return self.element.getAttribute(name);
    }
    self.element.setAttribute(name, value);
    return self;
  };
  return self;
}
