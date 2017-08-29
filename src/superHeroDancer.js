var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$image = $('<img src="src/resource/superhero.gif">');
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;
makeSuperHeroDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);

};
