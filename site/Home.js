function autoRemoval(){
  var perm=localStorage.getItem("theCart");
  var contain=document.createElement("div");
  contain.innerHTML=perm;
  var eachItems=contain.querySelectorAll(".cart-item");
  eachItems.forEach((eachItem,x)=>{
    var sName=eachItem.querySelector(".name").textContent;
    var stockSize=eachItem.querySelector(".size").textContent;
    var stockNumber=eachItem.querySelector(".quantity").textContent;
    stockName=sName.split("");
    stockName.splice(3,0,"'");
    stockName=stockName.join("");
    var xhr=new XMLHttpRequest();
    xhr.onload=function(){
     if(xhr.status>=200 && xhr.status<300){
       console.log(xhr.responseText);
     }else{
       console.log("error");
     }
    }
    xhr.open("post","Istock.php",true)
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("artName="+stockName+"&artSize="+stockSize+"&artNumber="+stockNumber);
    eachItem.remove();
  })
  var all=contain.innerHTML;
  localStorage.setItem("theCart",all);
  var perm=localStorage.getItem("theCart");
  contain.innerHTML=perm;
  //localStorage.removeItem("theCart");
  var nItem=contain.querySelectorAll(".cart-item").length;
  localStorage.setItem("orderInCart",nItem);
  var numberOfOrder=localStorage.getItem('orderInCart');
  document.querySelector("header i span").textContent=numberOfOrder;
}
function appear(){
  //show the sidebar
  var box=document.querySelector(".nav-box");
  box.style.left="0%";
}
function disappear(){
  //hide the sidebar
  var box=document.querySelector(".nav-box");
  box.style.left="-78%";
}
var counter=0;
function searchBar(){
  //show and hide the search bar
  var search=document.querySelector(".search-bar");
  if(counter%2==0){
    search.style.display="block";
  }else{
    search.style.display="none";
  }
  counter++;
}
function tShirt(){
  var shirtOne=document.querySelectorAll(".sexe div")[0];
  var sleeveOne=document.querySelectorAll(".sexe div")[1];
  var containerOneOne=document.querySelector(".container-one");
  var containerTwoOne=document.querySelector(".container-two");
  shirtOne.style.backgroundColor="#ff9400";
  sleeveOne.style.backgroundColor="white";
  containerTwoOne.style.display="none";
  containerOneOne.style.display="block";
}
function longSleeve(){
  var shirtTwo=document.querySelectorAll(".sexe div")[0];
  var sleeveTwo=document.querySelectorAll(".sexe div")[1];
  var containerOneTwo=document.querySelector(".container-one");
  var containerTwoTwo=document.querySelector(".container-two");
  sleeveTwo.style.backgroundColor="#ff9400";
  shirtTwo.style.backgroundColor="white";
  containerOneTwo.style.display="none";
  containerTwoTwo.style.display="block";
}
var ca=0
function changeIconHelpOne(event){
  var newIcon=event.target;
  newIcon.classList.toggle("fa-angle-up");
  var para=event.target.parentElement.parentElement.querySelectorAll("div")[0];
  if(ca%2==0){
    para.style.display="block";
  }else{
   para.style.display="none";
  }
  ca++;
 }
 var cb=0;
 function changeIconHelpTwo(event){
  var newIcon=event.target;
  newIcon.classList.toggle("fa-angle-up");
  var para=event.target.parentElement.parentElement.querySelectorAll("div")[1];
  if(cb%2==0){
    para.style.display="block";
  }else{
   para.style.display="none";
  }
  cb++;
 }
 var cc=0;
 function changeIconHelpThree(event){
  var newIcon=event.target;
  newIcon.classList.toggle("fa-angle-up");
  var para=event.target.parentElement.parentElement.querySelectorAll("div")[2];
  if(cc%2==0){
    para.style.display="block";
  }else{
   para.style.display="none";
  }
  cc++;
 }
window.onload=function(){
  /*show the order's number in the cart*/
  var numberOfOrder=localStorage.getItem('orderInCart');
  if(numberOfOrder==0){
    document.querySelector("header i span").textContent="";
  }else{
    document.querySelector("header i span").textContent=numberOfOrder;
  }
  //autoRemoval();
  setInterval(function(){
    if(localStorage.getItem("time")){
      var moment=Date.now();
      var time=parseInt(localStorage.getItem("time"));
      if(moment-time>=1200000){
        autoRemoval();
        localStorage.removeItem("time");
      }
    }
  },1000);
  //resize the image's banner
  setInterval(function(){
    var banner=document.querySelector(".banner");
    var szBan=banner.getBoundingClientRect();
    //this method get all informations about the div
    console.log(szBan.height)
    var szIm=document.querySelector(".banner img");
    if(szBan.height==450){
      szIm.src="couverture 60x60.jpg";
    }else if(szBan.height==490){
      szIm.src="couverture 75x49.jpg";
    }else if(szBan.height==520){
      szIm.src="couverture 100x52.jpg"
    }
  },100)
}

function addItem(event){
  /*Add the item's name ,picture and price in the local storage to be retrieved in another page*/
var itemPicture=event.currentTarget.parentNode.parentNode.parentNode.querySelector("img").src;
var itemName=event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".details .name").textContent;
var itemPrice=event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".details .price").textContent;
localStorage.setItem("firstPic",itemPicture);
localStorage.setItem("firstName",itemName);
localStorage.setItem("firstPrice",itemPrice);
}
function addItemBig(event){
  /*Add the item's name ,picture and price in the local storage to be retrieved in another page*/
var itemPicture=event.target.src;
var itemName=event.target.parentNode.parentNode.parentNode.querySelector(".details .name").textContent;
var itemPrice=event.target.parentNode.parentNode.parentNode.querySelector(".details .price").textContent;
localStorage.setItem("firstPic",itemPicture);
localStorage.setItem("firstName",itemName);
localStorage.setItem("firstPrice",itemPrice);
}





