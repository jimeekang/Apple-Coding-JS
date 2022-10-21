console.log("-----1-------");
// 문자가 찾을단어에 있나 확인하는 함수 : includes()
let find = "문자".includes("찾문단어");
let find2 = "asdf".includes("sdf");
console.log(find); // boolean return
console.log(find2);

console.log("-----2-------");
// regular expression : 정규식
// /여기안에있는 문자/ 그대로 있으면 true 아니면 false
console.log(/abc/.test("abcfgh"));
console.log(/a/.test("abcde")); // true

console.log("-----3-------");
// [] 기호 사용하여 문자 범위 지정 가능
console.log(/[a-z]/.test("sqersd")); // [a-z] a부터 z까지 아무문자 하나!! 를 의미
console.log(/[a-zA-Z]/.test("sqersd")); // 대소문자 포함하여 아무 알파벳 하나!! 를 의미

// 한글도 가능
console.log("-----4-------");
console.log(/[a-zA-Z]/.test("반가워요"));
console.log(/[a-zA-z]/.test("반가워요a"));
console.log(/[ㄱ-ㅎ가-핳ㅏ-ㅣ]/.test("반가워요"));

console.log("-----5-------");
// \S : 특수문자 포함하여 아무문자 1개
console.log(/\S/.test("@"));

// ^a : a로 시작하는지?
console.log(/^a/.test("asdfasdf"));

// a$ : a로 끝나는지?
console.log(/a$/.test("asdfasdfa"));

// | : or 기호, 앞 또는 뒤 문자 중에 아무거나 한 문자가 있는지 검사
console.log(/(e|f)/.test("abcde"));

// + : +기호 뒤에 오는 글자들도 a와 일치하면 반복해서 쭉 찾아달라 ex)aaaaa
console.log(/a+/.test("sdfagsdfg"));

// \S+t : 모든 문자 여러개 다음에 t라는 글자 있나 검사
console.log(/\S+t/.test("sdfagsdfg")); // false
console.log(/\S+t/.test("sdfagsdtfg")); // true

console.log("-----6-------");
// email 간단 정규식
console.log(/\S+@\S+\.\S+/.test("sdfagsd"));
console.log(/\S+@\S+\.\S+/.test("sdfagsd@sdfg.asdf"));
