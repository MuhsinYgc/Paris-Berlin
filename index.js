var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = "avatar.png";
imgArray[1] = new Image();
imgArray[1].src = "osman.jpeg";
imgArray[2] = new Image();
imgArray[2].src = "muhsin.jpg";
let nameArray = ["Milena Purcle", "Muhsin Yagci", "Osman Kanadikirik"];
let textArray = [
  "I had the best wedding I have ever seen. Everything was very beautiful: the flowers, the accsessories, the decorations. Also everyone was affected with my amazing dress. Thank you so much!",
  "I had the best wedding I have ever seen. Everything was very beautiful: the flowers, the accsessories, the decorations. Also everyone was affected with my amazing dress. Thank you so much!I had the best wedding I have ever seen. Everything was very beautiful: the flowers, the accsessories, the decorations. Also everyone was affected with my amazing dress. Thank you so much!",
  "I had the best wedding I have ever seen. Everything was very beautiful: the flowers, the accsessories, the decorations. Also everyone was affected with my amazing dress. Thank you so much!I had the best wedding I have ever seen. Everything was very beautiful: the flowers, the accsessories, the decorations. Also everyone was affected with my amazing dress. Thank you so much!Also everyone was affected with my amazing dress. Thank you so much!",
];
let customText = document.getElementById("customTextP");
customText.innerText = textArray[0];
let customName = document.getElementById("customInfoText");
customName.innerText = nameArray[0];
let setimg = document.getElementById("customInfoImg");
setimg.src = imgArray[0].src;

function textChange1() {
  let a = document.getElementById("customTextP");
  a.innerText = textArray[0];
  let name = document.getElementById("customInfoText");
  name.innerText = nameArray[0];
  setimg.src = imgArray[0].src;

  function buton() {
    let b1 = document.getElementById("button1");
    b1.style.fontSize = "1.5rem";
    b1.style.color = "black";
    let b2 = document.getElementById("button2");
    b2.style.fontSize = "1rem";
    b2.style.color = "rgba(17, 17, 17, 0.3);";
    let b3 = document.getElementById("button3");
    b3.style.fontSize = "1rem";
    b3.style.color = "rgba(17, 17, 17, 0.3);";
  }
  buton();
}

function textChange2() {
  let a = document.getElementById("customTextP");
  a.innerText = textArray[1];
  let name = document.getElementById("customInfoText");
  name.innerText = nameArray[1];
  name.innerText = nameArray[1];
  setimg.src = imgArray[1].src;

  function buton() {
    let b1 = document.getElementById("button1");
    b1.style.fontSize = "1rem";
    b1.style.color = "rgba(17, 17, 17, 0.3);";
    let b2 = document.getElementById("button2");
    b2.style.fontSize = "1.5rem";
    b2.style.color = "black";
    let b3 = document.getElementById("button3");
    b3.style.fontSize = "1rem";
    b3.style.color = "rgba(17, 17, 17, 0.3);";
  }
  buton();
}

function textChange3() {
  let a = document.getElementById("customTextP");
  a.innerText = textArray[2];
  let name = document.getElementById("customInfoText");
  name.innerText = nameArray[2];
  name.innerText = nameArray[2];
  setimg.src = imgArray[2].src;

  function buton() {
    let b1 = document.getElementById("button1");
    b1.style.fontSize = "1rem";
    b1.style.color = "rgba(17, 17, 17, 0.3)";
    let b2 = document.getElementById("button2");
    b2.style.fontSize = "1rem";
    b2.style.color = "rgba(17, 17, 17, 0.3);";
    let b3 = document.getElementById("button3");
    b3.style.fontSize = "1.5rem";
    b3.style.color = "black";
  }
  buton();
}

function nextText() {
  let txt = document.getElementById("customTextP");
  let names = document.getElementById("customInfoText");
  let images = document.getElementById("customInfoImg");
  if (txt.innerText == textArray[0]) {
    txt.innerText = textArray[1];
  } else if (txt.innerText == textArray[1]) {
    txt.innerText = textArray[2];
  }
  if (names.innerText == nameArray[0]) {
    names.innerText = nameArray[1];
  } else if (names.innerText == nameArray[1]) {
    names.innerText = nameArray[2];
  }
  if (images.src == imgArray[0].src) {
    images.src = imgArray[1].src;
  } else if (images.src == imgArray[1].src) {
    images.src = imgArray[2].src;
  }
}

function prevText() {
  let txt = document.getElementById("customTextP");
  let names = document.getElementById("customInfoText");
  let images = document.getElementById("customInfoImg");
  if (txt.innerText == textArray[2]) {
    txt.innerText = textArray[1];
  } else if (txt.innerText == textArray[1]) {
    txt.innerText = textArray[0];
  }
  if (names.innerText == nameArray[2]) {
    names.innerText = nameArray[1];
  } else if (names.innerText == nameArray[1]) {
    names.innerText = nameArray[0];
  }
  if (images.src == imgArray[2].src) {
    images.src = imgArray[1].src;
  } else if (images.src == imgArray[1].src) {
    images.src = imgArray[0].src;
  }
}
let prev = document.getElementById("prevButton");
let next = document.getElementById("nextButton");
prev.onmousemove = function () {
  prev.style.backgroundColor = "grey";
};
prev.onmouseout = function () {
  prev.style.backgroundColor = "white";
};
next.onmousemove = function () {
  next.style.backgroundColor = "grey";
};
next.onmouseout = function () {
  next.style.backgroundColor = "white";
};

window.addEventListener("scroll", function () {
  let navArea = document.getElementById("mySticky");

  if (window.pageYOffset > 0) {
    navArea.classList.add("sticky");
  } else {
    navArea.classList.remove("sticky");
  }
});
