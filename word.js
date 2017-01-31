var Letter = require('./letters.js');

function Word(value) {
  // The word we want our users to guess
  this.value = value;

  //An array of Letter objects that represent our word.
  this.letters = value
    .split('')
    //The parameter to the following map call us called an arrow function
    //It is short hand for an anonymous function with a few special...
    //Arrow functions were added to JS fairly recently
    .map(l => new Latter(l));
};

Word.prototype.render = function() {
  return this.letters
    .map(l => l.render())
    .join('');
};

Word.prototype.reveal = function() {
  this.letters
  .forEach(l => {l.visible = true;});
  return this;
};

Word.prototype.guess = function(guess) {
  return this.letters
    .map(l => {
      var match = (guess === l.value);
      l.visible = l.visible || match;
      return match;
    })
    .some(v => v);
};

Word.prototype.complete = function() {
  return this.render() === this.value;
};

module.exports = Word;
