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
    self.element.appendChild(elem);
  };
  self.attr = function(name, value) {
    if (!value) {
      return self.element.getAttribute(name);
    }
    self.element.setAttribute(name, value);
    return self;
  };
  self.dropdown = function(options = [], callback) {
    const select = document.createElement("select");
    options.forEach(values => {
      const option = document.createElement("option");
      option.value = values.value;
      option.innerText = values.viewValue;
      select.appendChild(option);
    });
    self.element.appendChild(select);
    select.addEventListener("change", callback);
  };
  return self;
}
