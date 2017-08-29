var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.$image = $('<img src="src/resource/dancer.gif">');
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.loadImage = function() {
  this.$node.append(this.$image);
};
