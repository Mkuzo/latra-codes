const images = ["imag4.png","image2.png","image.png","image3.png"];
const result = document.getElementById("result");
let show = 0;
function display(){
    result.src = images[show];
}
function add(){
    if(show < images.length - 1){
        show += 1;
        display() ;
    }
}
function sub(){
    if(show > 0){
        show -= 1;
        display()
    }
}