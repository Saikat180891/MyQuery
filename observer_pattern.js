var A = /** @class */ (function() {
  function A() {
    this.observers = [];
    this.val = null;
  }
  A.prototype.registerObserver = function(o) {
    this.observers.push(o);
  };
  A.prototype.removerObserver = function(o) {
    var index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  };
  A.prototype.notifyObservers = function() {
    var _this = this;
    this.observers.forEach(function(o) {
      return o.update(_this.val);
    });
  };
  A.prototype.next = function(val) {
    this.val = val;
    this.notifyObservers();
  };
  return A;
})();
var B = /** @class */ (function() {
  function B(obs) {
    this.obs = obs;
    obs.registerObserver(this);
  }
  B.prototype.update = function(val) {
    console.log("A", val);
  };
  return B;
})();
var C = /** @class */ (function() {
  function C(obs) {
    this.obs = obs;
    obs.registerObserver(this);
  }
  C.prototype.update = function(val) {
    console.log("B", val);
  };
  return C;
})();
var a = new A();
var b = new B(a);
var c = new C(a);
a.next(12);
a.next(54);
