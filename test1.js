function 삼육구게임(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
// 삼육구게임(3);
// 삼육구게임(5);

function 삼육구업그레이드(num) {
  if (num % 9 == 0) {
    console.log("박수 x2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
// 삼육구업그레이드(6);
// 삼육구업그레이드(9);
// 삼육구업그레이드(11);

function 합격했냐(개론, 민법) {
  if (개론 < 40 || 민법 < 40) {
    console.log("이건 한과목이 40점도 안나와서 불합격");
  } else if (개론 < 0 || 민법 < 0 || 개론 > 100 || 민법 > 100) {
    alert("한과목이 0이하 120이상은 안됌");
  } else if (개론 + 민법 >= 120) {
    console.log("합격");
  } else {
    console.log("이건 120도 못넘어서 불합격");
  }
}

// 합격했냐(120, 50);
// 합격했냐(70, 70);
// 합격했냐(30, 100);
// 합격했냐(50, 50);

function 진짜삼육구(num) {
  if (num % 10 == 9) {
    console.log("뒷자리가 9에 짝");
  } else if (num % 10 == 6) {
    console.log("뒷자리가 6에 짝");
  } else if (num % 10 == 3) {
    console.log("뒷자리가 3에 짝");
  } else {
    console.log("통과");
  }
}

진짜삼육구(2);
진짜삼육구(13);
진짜삼육구(15);
진짜삼육구(26);
진짜삼육구(39);
