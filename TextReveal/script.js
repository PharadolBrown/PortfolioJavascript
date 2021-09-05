const contents = document.querySelectorAll(".content"); //รับ content มาหลายตัว

document.addEventListener("scroll", showText);

function showText() {
  contents.forEach((section) => {
    // เอา content แต่ละตัวมา loop
    const imgEl = section.querySelector("img");
    const textEl = section.querySelector(".text");

    const scrollPos = window.pageYOffset; // scrollPosition
    // 500 + (100 / 50)
    // 502 => แสดงข้อความ
    console.log(imgEl.offsetTop);
    const textPos = imgEl.offsetTop + imgEl.offsetHeight / 10;
    //imgEl.offsetTop: ตน สูงสุดของภาพ ณ ปัจจุบัน
    // imgEl.offsetHeight : ค.สูงของภาพ;

    if (scrollPos > textPos) {
      // แสดงเนื้อหาออกมา
      textEl.classList.add("show-reveal");
    } else {
      // ปิดการแสดงเนื้อหา
      textEl.classList.remove("show-reveal");
    }
  });
}
