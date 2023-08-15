console.log("hello user 1");
console.log("hello user 1");

console.log("hello user 1");

console.log("hello user 1");

console.log("hello user 1");

function hello(name) {
  console.log(name);
}

hello("user1");
hello("user1");
hello("user1");
hello("user1");
hello("user1");

// vòng lặp while
// điều kiện lặp, bước nhảy;
// while (điều kiện lặp) {
//     nội dung xử lý
// tăng hoặc giảm biến bước nhảy(nếu ko có bước này, vòng lặp sẽ chạy vô tận)
// }

var count = 0;
while (count < 5) {
  console.log("hello");
  count++;
}

// hello lần 1
// count++ = 1
// hello lần 2
// count++ = 2
console.log("test");

function submit() {
  var number = +document.getElementById("number").value;
  var count1 = 0;
  var content = "";

  while (number > 1) {
    count1++;
    // parseInt: ép kiểu về số nguyên không có phần thập phân
    number = parseInt(number / 2);
    content += `
    <div>count: ${count1} - number: ${number}</div>`;
  }

  document.getElementById("result").innerHTML = content;
}

// cú pháp của vòng lặp do...while
// ít nhất sẽ được chạy 1 lần
// do {
//     nội dung xử lý
// } while(điều kiện);

// tính tổng số nhập vào:
// 3 = 1 + 2 + 3 = 6;
// 5 = 1 + 2 + 3 + 4 + 5 = 15

// 3
// lần 1: biến đếm/bước nhảy i : 1
// total = 1;
// lần 2: biến đếm: 2;
// total 1 + 2 = 3;
// lần 3: biến đếm 3;
// total = 1 + 2+ 3;
function handleSum() {
  var number2 = +document.getElementById("number2").value;
  var i = 0;
  var total = 0;

  do {
    i++;
    total += i;
  } while (i < number2);
  document.getElementById("result2").innerHTML = "Tổng: " + total;
}

// cú pháp vòng lặp for
// for(khởi tạo; điều kiện; bước nhảy) {
//     nội dung xử lý
// }
for (var i = 1; i < 5; i++) {
  console.log("i", i);
}

function printStar() {
  var number3 = +document.getElementById("number3").value;
  var html = "";

  for (var i = 0; i < number3; i++) {
    html += "*";
  }

  document.getElementById("result3").innerHTML = html;
}

function handleNumber() {
  var number4 = +document.getElementById("number4").value;
  var soChan = "";
  var soLe = "";

  for (var i = 0; i < number4; i++) {
    if (i % 2 === 0) {
      soChan += i + " ";
    } else {
      soLe += i + " ";
    }
  }

  document.getElementById("result4").innerHTML = `
        <div class="bg-success">số chẵn: ${soChan}</div>
        <div class="warning">số lẻ: ${soLe}</div>
    `;
}

function handleSumEven() {
  var number5 = +document.getElementById("number5").value;
  var total = 0;

  for (var i = 1; i < number5; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }

  document.getElementById("result5").innerHTML = total;
}

function inHangCot() {
  var soHang = +document.getElementById("soHang").value;
  var soCot = +document.getElementById("soCot").value;
  var content = "";

  for (var i = 0; i < soHang; i++) {
    for (var j = 0; j < soCot; j++) {
      content += "* ";
    }

    content += "<br>";
  }

  console.log("content", content);
  document.getElementById("result6").innerHTML = content;
}

var tamGiac = "";
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < i; j++) {
    tamGiac += "* ";
  }
  tamGiac += "<br>";
}
document.getElementById("tamgiac").innerHTML = tamGiac;

var tamGiacNguoc = "";
for (var i = 5; i >= 1; i--) {
  for (var j = 0; j < i; j++) {
    tamGiacNguoc += "* ";
  }
  tamGiacNguoc += "<br>";
}
document.getElementById("tamGiacNguoc").innerHTML = tamGiacNguoc;

// break => kết thúc vòng lặp;
// continue =>  kết thúc lần lặp hiện tại.
// return => dừng những dòng code sau nó trong phạm vi function
