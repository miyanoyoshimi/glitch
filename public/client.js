
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
  cv.font = "50px Roboto";
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

//画像ダウンロード
btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    let a = document.createElement('a')
    a.href = canvas.toDataURL('image/png', 1.0)
    a.download = 'canvas-download'
    a.click()
})




