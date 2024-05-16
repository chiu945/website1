let litle = document.getElementById("litle");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click", news);
function news() {
  list.innerHTML =
    list.innerHTML +
    `
  <dic class="news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `;
}

let i = 0,
  imgArr = new Array();
imgArr[0] = "https://website.ncyu.edu.tw/Uploads/Icon/abfe7b6f-2506-444b-bb1d-52608791a559.png";
imgArr[1] = "https://website.ncyu.edu.tw/Uploads/Icon/9e0886b3-ac8f-4a37-9b85-3f4d30102afa.png";
imgArr[2] = "https://website.ncyu.edu.tw/Uploads/Icon/4fa05b38-f0c3-4f3a-96e6-cdded3b777f8.png";

function showImg() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}
function show() {
  setInterval(showImg, 2000);
}