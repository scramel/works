// .sample() custom function: returns a random item from an arrayn
Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};