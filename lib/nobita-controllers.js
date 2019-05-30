const merge = require('lodash/merge');
const setWith = require('lodash/setWith');
const readdir = require('nobita-readdir');
const filePath = '/app/controllers/';
let controllers = {};
const controllersArr = readdir(`.${filePath}`);

let ctrlNewArr = controllersArr.map((item) => {
  const fileName = item.split(filePath)[1];
  if (fileName.indexOf('.js') != -1) {
    return fileName.split('.js')[0].replace(/\//g, '.');
  }
});

for (let i in ctrlNewArr) {
  controllers = merge(controllers, setWith({}, ctrlNewArr[i], require(controllersArr[i]), Object));
}

module.exports = controllers;