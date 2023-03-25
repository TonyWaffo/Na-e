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
window.onload=function(){
  //autoRemoval();
  setInterval(function(){
    if(localStorage.getItem("time")){
      var moment=Date.now();
      var time=parseInt(localStorage.getItem("time"));
      if(moment-time>=1200000){
        autoRemoval();
        localStorage.removeItem("time");
        location.reload();
      }
    }
  },1000);
 /*show the order's number in the cart*/
 var numberOfOrder=localStorage.getItem('orderInCart');
 if(numberOfOrder==0){
  document.querySelector("header i span").textContent="";
 }else{
  document.querySelector("header i span").textContent=numberOfOrder;
 }
 /*retrieve the value in the local storage and insert it on the loaded page*/
 var pic=localStorage.getItem("firstPic");
 var nm=localStorage.getItem("firstName");
 var pr=localStorage.getItem("firstPrice");
 var picPlace=document.querySelector(".item img");
 var namePlace=document.querySelector(".article .name");
 var pricePlace=document.querySelector(".article .price");
 var color=document.querySelectorAll(".color-box div");
 picPlace.src=pic;
 namePlace.innerText=nm;
 pricePlace.innerText=pr;
 /*the code above opens the product.html page showing details of the article we clikeed on*/
 /* this if state;ent help to check the article's color available in the home page */
 if(nm.includes("Na'e Tee 1.0")){
   color[0].style.display="block";
   color[1].style.display="none";
   color[2].style.display="none";
   color[3].style.display="none";
   color[4].style.display="none";
   color[5].style.display="block";
   color[6].style.display="none";
   color[7].style.display="block";
 }else if(nm.includes("Na'e Tee 2.0")){
  color[0].style.display="block";
  color[1].style.display="none";
  color[2].style.display="none";
  color[3].style.display="none";
  color[4].style.display="none";
  color[5].style.display="block";
  color[6].style.display="block";
  color[7].style.display="block";
 }else if(nm.includes("Na'e Tee 3.0")){
  color[0].style.display="none";
  color[1].style.display="none";
  color[2].style.display="none";
  color[3].style.display="none";
  color[4].style.display="none";
  color[5].style.display="block";
  color[6].style.display="none";
  color[7].style.display="none";
 }else if(nm.includes("Na'e Tee Classic")){
 color[0].style.display="block";
 color[1].style.display="block";
 color[2].style.display="block";
 color[3].style.display="none";
 color[4].style.display="block";
 color[5].style.display="none";
 color[6].style.display="block";
 color[7].style.display="block";
 }else if(nm.includes("Na'e Over - Men")){
  color[0].style.display="block";
  color[1].style.display="none";
  color[2].style.display="none";
  color[3].style.display="block";
  color[4].style.display="none";
  color[5].style.display="none";
  color[6].style.display="none";
  color[7].style.display="none";
  }else if(nm.includes("Na'e Over - Women")){
    color[0].style.display="block";
    color[1].style.display="none";
    color[2].style.display="none";
    color[3].style.display="block";
    color[4].style.display="none";
    color[5].style.display="none";
    color[6].style.display="none";
    color[7].style.display="none";
  }
 /*helps to emphasize the color-box div of the article when the page has loaded*/ 
  var bigger=document.querySelectorAll(".color-box div");
  if(nm.includes("blanche")){
    bigger[0].style.transform="scale(1.5)";
  }else if(nm.includes("orange")){
    bigger[1].style.transform="scale(1.5)";
  }else if(nm.includes("rouge")){
    bigger[2].style.transform="scale(1.5)";
  }else if(nm.includes("grise")){
    bigger[3].style.transform="scale(1.5)";
  }else if(nm.includes("bordeau")){
    bigger[4].style.transform="scale(1.5)";
  }else if(nm.includes("beige")){
    bigger[5].style.transform="scale(1.5)";
  }else if(nm.includes("verte")){
    bigger[6].style.transform="scale(1.5)";
  }else if(nm.includes("bleu")){
    bigger[7].style.transform="scale(1.5)";
  }
/*that is the description below the article's details*/
  var nm=localStorage.getItem("firstName");
  var paras=document.querySelectorAll(".description .desc-box");
  if(nm.includes("Na'e Tee 1.0")){
      paras.forEach(para=>{
        para.style.display="none";
      });
      paras[0].style.display="flex";
  }else if(nm.includes("Na'e Tee 2.0")){
    paras.forEach(para=>{
      para.style.display="none";
    });
    paras[1].style.display="flex";
  }else if(nm.includes("Na'e Tee 3.0")){
    paras.forEach(para=>{
      para.style.display="none";
    });
    paras[2].style.display="flex";
  }else if(nm.includes("Na'e Tee Classic")){
  paras.forEach(para=>{
    para.style.display="none";
  });
  paras[3].style.display="flex";
  }else if(nm.includes("Na'e Over - Men")){
  paras.forEach(para=>{
    para.style.display="none";
  });
  paras[4].style.display="flex";
  }else if(nm.includes("Na'e Over - Women")){
  paras.forEach(para=>{
    para.style.display="none";
  });
  paras[5].style.display="flex";
  }
  /*the code above displays the stock of each size depending on the articles*/
  var xhr=new XMLHttpRequest();
  var name=localStorage.getItem("firstName");
  /*transform the string into an array,add another quote and bring it back into a sting.
  This process will be useful when entering the article's name on php file*/
  name=name.split("");
  name.splice(3,0,"'");
  name=name.join("");
  var stockContainer=document.querySelector(".stock-container");
  xhr.onload=function(){
   if(xhr.status>=200 && xhr.status<300){
     console.log(xhr.responseText);
     stockContainer.innerHTML=xhr.responseText;
   }else{
     console.log("error");
   }
  }
  xhr.open("post","Stock.php",true)
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send("stockName="+name);
  //change the color of the stock-box when  the stock is empty
  var stocks=document.querySelectorAll(".stock-box");
  for(var a=0;a<stocks.length;a++){
    if(document.querySelectorAll(".stock-number")[a].textContent==0){
      stocks[a].style.opacity="0.3";
    }
  }
}
function changeColor(colorName,event){
  /* this code change the name and the picture of the article*/
  var namePlace=document.querySelector(".article .name");
  var picPlace=document.querySelector(".item img");
  var nm=localStorage.getItem("firstName");
  if(nm.includes("Na'e Tee 1.0")){
    localStorage.setItem("firstName","Na'e Tee 1.0 , couleur "+colorName);
    nm=localStorage.getItem("firstName");
    namePlace.innerText=nm;
    localStorage.setItem("firstPic","Na'e tee 1-"+colorName+".jpg");
    var pic=localStorage.getItem("firstPic");
    picPlace.src=pic;
    //localStorage.setItem("firstName",itemName);
  }else if(nm.includes("Na'e Tee 2.0")){
    localStorage.setItem("firstName","Na'e Tee 2.0 , couleur "+colorName);
    nm=localStorage.getItem("firstName");
    namePlace.innerText=nm;
    localStorage.setItem("firstPic","Na'e tee 2-"+colorName+".jpg");
    var pic=localStorage.getItem("firstPic");
    picPlace.src=pic;
    //localStorage.setItem("firstName",itemName);
  }else if(nm.includes("Na'e Tee 3.0")){
    localStorage.setItem("firstName","Na'e Tee 3.0 , couleur "+colorName);
    nm=localStorage.getItem("firstName");
    namePlace.innerText=nm;
    localStorage.setItem("firstPic","Na'e tee 3-"+colorName+".jpg");
    var pic=localStorage.getItem("firstPic");
    picPlace.src=pic;
    //localStorage.setItem("firstName",itemName);
  }else if(nm.includes("Na'e Tee Classic")){
    localStorage.setItem("firstName","Na'e Tee Classic , couleur "+colorName);
    nm=localStorage.getItem("firstName");
    namePlace.innerText=nm;
    localStorage.setItem("firstPic","Na'e classic-"+colorName+".jpg");
    var pic=localStorage.getItem("firstPic");
    picPlace.src=pic;
    //localStorage.setItem("firstName",itemName);
  }
  else if(nm.includes("Na'e Over - Men")){
    localStorage.setItem("firstName","Na'e Over - Men , couleur "+colorName);
    nm=localStorage.getItem("firstName");
    namePlace.innerText=nm;
    localStorage.setItem("firstPic","Na'e over-men-"+colorName+".jpg");
    var pic=localStorage.getItem("firstPic");
    picPlace.src=pic;
    //localStorage.setItem("firstName",itemName);
  }else if(nm.includes("Na'e Over - Women")){
    localStorage.setItem("firstName","Na'e Over - Women , couleur "+colorName);
    nm=localStorage.getItem("firstName");
    namePlace.innerText=nm;
    localStorage.setItem("firstPic","Na'e over-women-"+colorName+".jpg");
    var pic=localStorage.getItem("firstPic");
    picPlace.src=pic;
    //localStorage.setItem("firstName",itemName);
  }
  /* the code below enlarge the color-box div when the user clicks on it*/
  var bigger=document.querySelectorAll(".color-box div");
  var a=0
  for(a; a<bigger.length;a++){
    var big=bigger[a];
    big.style.transform="scale(1)";
  }
  event.target.style.transform="scale(1.5)";
   /*the code above displays the stock of each size depending on the articles*/
   var xhr=new XMLHttpRequest();
   var name=localStorage.getItem("firstName");
   /*transform the string into an array,add another quote and bring it back into a sting.
   This process will be useful when entering the article's name on php file*/
   name=name.split("");
   name.splice(3,0,"'");
   name=name.join("");
   var stockContainer=document.querySelector(".stock-container");
   xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
      console.log(xhr.responseText);
      stockContainer.innerHTML=xhr.responseText;
    }else{
      console.log("error");
    }
   }
   xhr.open("post","Stock.php",true)
   xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   xhr.send("stockName="+name);
}
function checkBeforeAdding(){
  var quant=document.querySelectorAll(".article input")[0].value;
  var size=document.querySelector("select").value;
  var ref=document.querySelectorAll(".stock-box .stock-number");
  var spage=document.querySelector(".article a");
  if(size=="S" && quant>0){
    var dif=parseInt(ref[0].textContent)-quant;
    if(dif<0){
      spage.href="#";
      var alt=document.querySelector(".alt");
      alt.style.display="block";
      alt.textContent="Quantité totale en stock:"+ref[0].textContent;
    }else{
      addToCart();
    }
  }else if(size=="M" && quant>0){
    var dif=parseInt(ref[1].textContent)-quant;
    if(dif<0){
      spage.href="#";
      var alt=document.querySelector(".alt");
      alt.style.display="block";
      alt.textContent="Quantité totale en stock:"+ref[1].textContent;
    }else{
      addToCart();
    }
  }else if(size=="L" && quant>0){
    var dif=parseInt(ref[2].textContent)-quant;
    if(dif<0){
      spage.href="#";
      var alt=document.querySelector(".alt");
      alt.style.display="block";
      alt.textContent="Quantité totale en stock:"+ref[2].textContent;
    }else{
      addToCart();
    }
  }else if(size=="XL" && quant>0){
    var dif=parseInt(ref[3].textContent)-quant;
    if(dif<0){
      spage.href="#";
      var alt=document.querySelector(".alt");
      alt.style.display="block";
      alt.textContent="Quantité totale en stock:"+ref[3].textContent;
    }else{
      addToCart();
    }
  }else if(size=="XXL" && quant>0){
    var dif=parseInt(ref[4].textContent)-quant;
    if(dif<0){
      spage.href="#";
      var alt=document.querySelector(".alt");
      alt.style.display="block";
      alt.textContent="Quantité totale en stock:"+ref[4].textContent;
    }else{
      addToCart();
    }
  }else if(quant<=0){
    addToCart();
  }
}
function addToCart(){
  // it modify the button 
  var addButton=document.querySelectorAll(".article input")[1];
  addButton.value="Ajouté";
  addButton.style.backgroundColor="#26ec5b";
 //retrieve the number of article wanted and store it in the local storage. it will be used for the cart
  var value=document.querySelectorAll(".article input")[0].value;
  localStorage.setItem("designation",value);
  var mySize=document.querySelector("select").value;
  var link=document.querySelector(".article a");
  /* this if statement tells us if the quantity field is good or not
  ,so that the user can replace it or move forwar*/
  if(value<=0){
    link.href="#";
    addButton.value="Changer et ajouter";
    addButton.style.backgroundColor="black";
    var alt=document.querySelector(".alt");
    alt.style.display="block";
    alt.textContent="*Quantité invalide";
  }else{
    link.href="Cart.html";
    //decrease the stock
    var name=localStorage.getItem("firstName");
    var sName=name;
    var stockSize=mySize;
    var stockNumber=value;
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
    xhr.open("post","Dstock.php",true)
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("artName="+stockName+"&artSize="+stockSize+"&artNumber="+stockNumber);
  }
  localStorage.setItem("sizeValue",mySize);
  /*the code below insert article's informations in the cart"*/
  var verif=document.createElement("div");
  var stock=localStorage.getItem("theCart");
  verif.innerHTML=stock;
  var vers=verif.querySelectorAll(".cart-item");
  var checkSize=verif.querySelectorAll(".cart-item .size");
  var checkName=verif.querySelectorAll(".cart-item .name");
  var nm=localStorage.getItem("firstName");
  var a=0;
  for(a;a<vers.length;a++){
    var ss=checkSize[a].textContent;
    var nn=checkName[a].textContent;
    if(ss==mySize && nn==nm){
      //var al=confirm("Encore dans le panier?");
      //if(al==true){
        if(value<=0){
          link.href="#";
        }else{
          localStorage.setItem("state","false");
          link.href="Cart.html";
        }
        break;
      /*}else{
        if(value>0){
          link.href="#";
          addButton.value="changer et ajouter";
          addButton.style.backgroundColor="black";
          //increase the stock
          var name=localStorage.getItem("firstName");
          var sName=name;
          var stockSize=mySize;
          var stockNumber=value;
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
          break;
        }
      }*/
    }
  }
}