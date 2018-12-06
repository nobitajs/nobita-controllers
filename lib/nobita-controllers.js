const _ = require('lodash');
const readdir = require('nobita-readdir');

let controllers = {};
const controllersArr = readdir('./app/controllers/');

let ctrlNewArr = controllersArr.map((item) => {
  if (item.split('/app/controllers/')[1].indexOf('.js') != -1) {
    return item.split('/app/controllers/')[1].split('.js')[0].replace(/\//g, '.');
  }
});


for (let i in ctrlNewArr) {
  controllers = _.merge(controllers, _.setWith({}, ctrlNewArr[i], require(controllersArr[i]), Object));
}

module.exports = controllers;