//var arrLimit = 2000000;
//var bigArr = Array.from(new Array(arrLimit), x => Math.floor(Math.random() * arrLimit + 1));

var result = {};
result.gap = 3000000;
result.value = null;

var target = 556;

var closest = bigArr.reduce(function(memo, element) {
  var newGap = Math.abs(element - target);
  if (newGap < memo.gap) {
    memo.gap = newGap;
    memo.value = element;
  }
  return memo;
}, result);

console.log('closest for array struct is: ', closest.value);