/* eslint-disable no-this-before-super */
// const RocketEngine = require('./rocket-engine');

class CarrierRocket {
  constructor(stages) {
  this.stages = [...stages];
  }

  detachStage(){
    this.stages.shift();
  }
}

module.exports = CarrierRocket;
