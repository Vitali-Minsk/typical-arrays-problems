
exports.min = function min(array) {

    if (array !== undefined) {
        if (array.length > 0) {
            return Math.min.apply(null, array);
        }
    } return 0;
}

exports.max = function max(array) {

  if (array !== undefined) {
        if (array.length > 0) {
            return Math.max.apply(null, array);
        }
    } return 0;
}

exports.avg = function avg(array) {

  if (array !== undefined) {
        if (array.length > 0) {
            for (var i = 0, sum = 0; i < array.length; i++) {
   sum = parseInt(array[i]) + sum;
  }
  return (sum / i);
   }
    } return 0;
}


