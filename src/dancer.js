var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(function() {this.jump}, timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};