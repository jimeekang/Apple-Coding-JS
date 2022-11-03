let attention = ["Amy", "Jenny", "Tom", "Harry", "Tom"];
function findName(name) {
  for (let i = 0; i < attention.length; i++) {
    if (name == attention[i]) {
      console.log("있어요");
      return;
    }
  }
}

// findName("Tom");

for (let index = 1; index < 10; index++) {
  console.log(2 * index);
}
for (let index = 1; index < 10; index++) {
  console.log(3 * index);
}

function multifid() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i * j);
    }
  }
}

// multifid();

function average(getPoint, myPoint) {
  let result = 0;
  for (let i = 0; i < getPoint.length; i++) {
    result = result + getPoint[i];
  }
  console.log(result);
  console.log(result / getPoint.length);

  let averagePoint = result / getPoint.length;

  if (myPoint > avaragePoint) {
    console.log(`평균보다 ${Math.abs(myPoint - averagePoint)}점 올랐네요`);
  } else {
    console.log(`평균보다 ${Math.abs(myPoint - averagePoint)}점 떨어졌네요`);
  }
}

// Math.abs()  : 음의값을 양수로 변환해주느 함수

// average([10, 20, 30, 40, 50], 40);
// average([40, 40, 40], 20);
