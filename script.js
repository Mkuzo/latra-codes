//This is For Card

const imagesObj = [{
    image:"imag4.png",
    heading:"Sebastian Peter Lohay"
},
{
    image: "image2.png",
    heading:"Enyudi Nziku"   
},{
    image: "image3.png",
    heading:"Mansoory Omary"
},{
    image: "image.png",
    heading: " Magafu Chilonge"
},{
    image: "image-6.png",
    heading:" Juma Ally"
},{
    image: "image7.png",
    heading: "Amani Masue"
},{
    image: "image6.png",
    heading: "Fahamuel Mnkeni"
},{
    image: "Image100.png",
    heading: "Eliud Kataraihya"
}]
let show = 0;
const wrapper = document.getElementById("wrapper");
function display(){
    wrapper.innerHTML = `
        <img src=${imagesObj[show].image} alt="images">
        <div class="wrapper">
            <div class="wrapper-i">
                <i class="fa fa-chevron-left" aria-hidden="true" onclick="sub()"></i>
                 <i class="fa fa-chevron-right" aria-hidden="true" onclick="add()"></i>
            </div>
                <h2>${imagesObj[show].heading}</h2>
            </div>
    `
}
function add(){
    if(show === imagesObj.length - 1){
        show = 0;
        display()
    }else{
        show += 1;
        display()
    }
}
function sub(){
            if(show === 0){
                show = imagesObj.length - 1;
                display();
            }else{
                show -= 1;
                display();
            }
}
setInterval(function(){
    add()
},3000)
display();


//This is For the first Card

const images = [{
    img: "imag9.png",
    heading: "CPA SULUO: TUZO TULIYOIPATA NI CHACHU YA KUWAHUDUMIA ZAIDI WATANZANIA"
},{
    img: "image5.png",
    heading: "MADEREVA WAASWA KUTOTUMIA VILEVI"
},{
  img: "image10.png",
  heading: "CPA DKT. SULUO: NAULI ZA DART NI ZA MPITO"  
},{
    img: "Image11.png",
    heading: "VIBALI VYA DHARURA 169 VYATOLEWA, MSONGAMANO WAPUNGUA"
}] 
let get = 0;
const card = document.getElementById("card");
function inner(){
    card.innerHTML = `
        <div class="latra-gallery-text">
            <h1>Recent News & Updates</h1>
        </div>
        <div class="latra-gallery-img">
            <img src=${images[get].img} alt="latra" id="image"> 
            <div class="wrapper-i2">
                <i class="fa fa-chevron-left" aria-hidden="true" onclick="back()"></i>
                <i class="fa fa-chevron-right" aria-hidden="true" onclick="foward()"></i>
            </div>        
            <h2>${images[get].heading}</h2>           
        </div>  
    `
}
function foward(){
    if(get === images.length - 1){
        get = 0;
        inner()
    }else{
        get += 1;
        inner()
    }
}
setInterval(function(){
    foward()
},4200)
function back(){
    if(get === 0){
        get = images.length - 1;
        inner()
    }else{
        get -= 1;
        inner()
    }
}
inner()