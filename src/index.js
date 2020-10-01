
exports.min = function min (array) {
  if (array === undefined || array[0] === undefined) {
    return 0;
  } else {
    let i = array.length, 
    min = Infinity;
    while (i--) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
}

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined) {
    return 0;
  } else {
    let i = array.length, 
    max = -Infinity;
    while (i--) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array[0] === undefined) {
    return 0;
  } else {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      result = sum / (array.length);
    }
    return result;
  }
}