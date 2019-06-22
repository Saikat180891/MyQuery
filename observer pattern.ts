interface Observable {
  registerObserver(o: Observer): void;
  removerObserver(o: Observer): void;
  notifyObservers(): void;
  next(val: any): void;
}

interface Observer {
  update(val: any): void;
}

class A implements Observable {
  private observers: Observer[] = [];
  private val: any = null;

  constructor() {}
  registerObserver(o: Observer): void {
    this.observers.push(o);
  }
  removerObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  notifyObservers(): void {
    this.observers.forEach(o => o.update(this.val));
  }
  next(val: any): void {
    this.val = val;
    this.notifyObservers();
  }
}

class B implements Observer {
  private obs: Observable;

  constructor(obs: Observable) {
    this.obs = obs;
    obs.registerObserver(this);
  }

  update(val: any): void {
    console.log("A", val);
  }
}

class C implements Observer {
  private obs: Observable;

  constructor(obs: Observable) {
    this.obs = obs;
    obs.registerObserver(this);
  }

  update(val: any): void {
    console.log("B", val);
  }
}

let a = new A();

let b = new B(a);
let c = new C(a);

a.next(12);
a.next(54);
