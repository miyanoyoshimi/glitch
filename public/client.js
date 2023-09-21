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
 //background color
//cv.beginPath();

// function bg(){
// 	cv.fillStyle = 'ita1.png';
// 	cv.fillRect(0, 0, canvas.width, canvas.height);
// 	return true
// }
// let isOK = bg()
// console.log(isOK)





//PNG透過画像作成 戻さない
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



// const image = new Image();
// value = "ita1.png";

// image.addEventListener("load", ()=>{
//   ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

//   ctx.globalCompositeOperation = "destination-in";
//   ctx.fillStyle = 'rgb(0, 0, 0, 1)';
//   ctx.font = "50px 'Meiryo UI'";
//   ctx.fillText("あいうえお", 10 , 50 );

// });

// //画像ダウンロード
// function downloadImg () {
//   const fileName = 'file.png';
//   const uri = '/path/img/file.png';

//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', uri);
//   xhr.responseType = 'blob';
//   xhr.onloadend = () => {
//       if (xhr.status !== 200) {
//           return false;
//       }
//       window.navigator.msSaveOrOpenBlob(xhr.response, fileName);
//   };
//   xhr.send();
// }


//表示サンプル
let canvas = document.getElementById('canvas');
let cv = canvas.getContext('2d');


//くりぬき文字を入力する度に取得
let reviewArea = document.getElementById('kurinukimoji');
reviewArea.addEventListener('input', inputChange);

//くりぬき文字を入力したら動く関数
function inputChange(){
	
	// cv.font = '50px Roboto medium';
	// cv.strokeText(val, 100, 100)
  func1() 
}

const image1 = new Image();
const image2 = new Image();
const image3 = new Image();
const image4 = new Image();
image1.src = "/public/ita1.png";
image2.src = "/public/ita2.png";
image3.src = "/public/ita3.png";
image4.src = "/public/ita4.png";


image1.addEventListener("load", ()=>{
  setimage(image1);
  
});
function setimage(image) {
  // cv.clearRect(0, 0, canvas.width, canvas.height);
  cv.globalCompositeOperation = "source-over";
  cv.drawImage(image, 0, 0, canvas.width, canvas.height);
  
  cv.globalCompositeOperation = "destination-in";
  cv.fillStyle = 'rgb(0, 0, 0, 1)';
  // cv.font = "50px Roboto";
  cv.fillText(reviewArea.value, 10 , 50 );  
  
}


//ラジオボタンを押したらキャッチ
function func1() {
  var fruits = document.getElementsByName("ita");
  for(var i = 0; i < fruits.length; i++){
    if(fruits[i].checked) {
      console.log("選択された値：", fruits[i].value);

      //選択されたものによって画像を変える
      if (fruits[i].value=="ita1") {
        
        setimage(image1);
      }
      else if (fruits[i].value=="ita2"){
        
        setimage(image2);
      }
      else if (fruits[i].value=="ita3"){
       
        setimage(image3);
      }
      else {
        
        setimage(image4);
      }
      
      
    }
  }
}
func1();




