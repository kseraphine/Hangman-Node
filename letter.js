/*Letter constructor stores character provided and sets its visibility to false
unless it is a space*/
function Letter(value) {
  this.value = value;
  this.visible = (value === ' ');
};

/*Returns the stored character if it is visible, or _ if not*/
Letter.prototype.render = function() {
  //This is a ternery operator.  It means: "if this.visible is true return this.value otherwise return _"
  return (this.visible) ? this.value : '_';
}

module.exports = Letter;

//try figlet for word art
