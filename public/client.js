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
// //サンプル画像表示
// function viewSample(image){
// //引数imageを対象にした、サンプルを表示する処理をここに実装
// };

// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
 
// button1.addEventListener("click", function(e) {
//    e.preventDefault();
//    viewSample('img1');
// });

//  button2.addEventListener("click", function(e) {
//    e.preventDefault();
//   viewSample('img2');
//  }); 
 


//表示サンプル
let canvas = document.getElementById('canvas');
let cv = canvas.getContext('2d');

//background color
//cv.beginPath();
function bg(){
	cv.fillStyle = 'rgb(255, 0, 0)';
	cv.fillRect(0, 0, canvas.width, canvas.height);
	return true
}
let isOK = bg()
console.log(isOK)

//くりぬき文字を入力する度に取得
let reviewArea = document.getElementById('kurinukimoji');
reviewArea.addEventListener('input', inputChange);

//くりぬき文字を入力したら動く関数
function inputChange(){
	console.log("catch test")
	let val = reviewArea.value
	console.log(val)

	//cv.clearRect(0, 0, canvas.width, canvas.height);
	bg()

	cv.font = '50px Roboto medium';
	cv.strokeText(val, 100, 100)

	touka(255,0,0)
}

//PNG透過画像作成
/* function test(r, g, b) {
let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");
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
} */

{/* <canvas id="canvas"></canvas> */}
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.src = "ita1.png";

image.addEventListener("load", ()=>{
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = 'rgb(0, 0, 0, 1)';
  ctx.font = "50px 'Meiryo UI'";
  ctx.fillText("あいうえお", 10 , 50 );

});

//画像ダウンロード
function downloadImg(canvas){
	const url = './imgs/img.png';
	const fileName = 'img.png';
	
	let link = document.getElementById("download");
	link.href= url;
	link.download = fileName;
}