// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// $(function() {
//   console.log('hello world :o');
  
//   $.get('/dreams', function(dreams) {
//     dreams.forEach(function(dream) {
//       $('<li></li>').text(dream).appendTo('ul#dreams');
//     });
//   });

//   $('form').submit(function(event) {
//     event.preventDefault();
//     dream = $('input').val();
//     $.post('/dreams?' + $.param({'dream': dream}), function() {
//       $('<li></li>').text(dream).appendTo('ul#dreams');
//       $('input').val('');
//       $('input').focus();
//     });
//   });

// });
//サンプル画像表示
// function viewSample(image){
//   //引数imageを対象にした、サンプルを表示する処理をここに実装
// };

// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
 
// button1.addEventListener("click", function(e) {
//   e.preventDefault();
//   viewSample('img1');
// });

// button2.addEventListener("click", function(e) {
//   e.preventDefault();
//   viewSample('img2');
// });

//画像ダウンロード
function downloadImg(){
  const url = './imgs/img.png';
  const fileName = 'img.png';
  
  let link = document.getElementById("download");
  link.href= url;
  link.download = fileName;
}

//表示サンプル
let canvas = document.getElementById('canvas');
let cv = canvas.getContext('2d');

let img = new Image(); //Imageオブジェクトを生成
img.src = "title.png";  // 画像のURLを指定
img.onload = function(){
	cv.drawImage(img, 0, 0);
}

//PNG透過画像作成
function test(r, g, b) {
  var canvas = document.getElementsByTagName("canvas")[0];
  var context = canvas.getContext("2d");
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < (imageData.width*imageData.height); i++) {
      if((imageData.data[i*4] == r) &&
         (imageData.data[i*4+1] == g) &&
         (imageData.data[i*4+2] == b)) {
          imageData.data[i*4+3] = 0;
      }
  }
  context.putImageData(imageData, 0, 0);
  return;
}