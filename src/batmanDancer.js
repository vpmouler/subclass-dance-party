var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeSuperHeroDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$image = $('<img src="src/resource/batman.gif">');
};

makeBatmanDancer.prototype = Object.create(makeSuperHeroDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;
makeBatmanDancer.prototype.step = function() {
  this.$node.addClass('batman');
};
