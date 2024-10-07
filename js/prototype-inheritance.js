function inherits(Parent, Child) {
  function TempCtor() {
  };

  TempCtor.prototype = Parent.prototype;

  Child.prototype = new TempCtor();
  Child.prototype.constructor = Child;
}

