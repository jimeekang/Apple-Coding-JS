/*
button 0 누르면
1. 모든 button에 붙은 orange 클래스명 제거
2. button 0누르면 orange 클래명 추가
3. 모든 div에 붙은 show 클래스명 제거
4. div0에 show 클래스명 추가
*/

function openTap(num) {
  let button = $(".tab-button");
  let content = $(".tab-content");
  button.removeClass("orange");
  button.eq(num).addClass("orange");
  content.removeClass("show");
  content.eq(num).addClass("show");
}

document.querySelector(".list").addEventListener("click", e => {
  // 지금 누른게 버튼 0이면 openTap(0)
  //console.log(e.target, e.target.dataset.id);
  //console.log(parseFloat(e.target.dataset.id));
  openTap(parseFloat(e.target.dataset.id));
});

/*
// for statement
let button = $(".tab-button");
let content = $(".tab-content");
for (let i = 0; i < button.length; i++) {
  button.eq(i).on("click", () => {
    openTap(i);
  });
}
*/

/*
// Jquery
$(".tab-button")
  .eq(1)
  .on("click", () => {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(1).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(1).addClass("show");
  });

$(".tab-button")
  .eq(2)
  .on("click", () => {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(2).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(2).addClass("show");
  });
*/
