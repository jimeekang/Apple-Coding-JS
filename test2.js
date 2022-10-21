var name = "park";
var id = 0;

function showName() {
  var name = "kim";
  var id = 1;
  console.log(name);
}

// showName();
// console.log(id);

var 예금액 = 60000;
var 미래예금액 = 0;

if (예금액 >= 50000) {
  미래예금액 = 예금액 * 1.2 * 1.2;
} else {
  미래예금액 = 예금액 * 1.15 * 1.15;
}

console.log(미래예금액);

var first = 360;

var second = (first / 3) * 2;
console.log(second);

var third = (second / 3) * 2;
console.log(third);

var total = first + second + third;
console.log(total);
