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
  document.querySelector(".cart-box").innerHTML=perm;
  //localStorage.removeItem("theCart");
  var nItem=contain.querySelectorAll(".cart-item").length;
  localStorage.setItem("orderInCart",nItem);
  var numberOfOrder=localStorage.getItem('orderInCart');
  document.querySelector("header i span").textContent=numberOfOrder;
  localStorage.removeItem("time");
  localStorage.removeItem("bigMoney");
  document.querySelector(".total-box div").textContent="0 XAF";
}
function updateTotalPrice(){
    //give the total amount to pay
    var qtys=document.querySelectorAll(".quantity");
    var prices=document.querySelectorAll(".price");
    var cash=document.querySelector(".total-box div");
    var total=0;
    var x=0;
    for(x;x<qtys.length;x++){
      qty=qtys[x].innerText;
      price=prices[x].innerText;
      price=price.substring(0,price.length-4);
      total=total+qty*price;
    }
    cash.textContent=total+" XAF";
    var costToPay=cash.textContent;
    localStorage.setItem("bigMoney",costToPay);
  }
  function removeToCart(event){
    //remove item from the cart
    var item=event.target;
    item.parentNode.parentNode.remove();
    updateTotalPrice();
    /*this one below will allow me to retrieve the information in this box
    right after that the user has deleted an item;it will help me for the
    purchase.html page */
    var cartBox=document.querySelector(".cart-box");
    var all=cartBox.innerHTML;
    localStorage.setItem("theCart",all);
    perm=localStorage.getItem("theCart");
    cartBox.innerHTML=perm;
    var nItem=document.querySelectorAll(".cart-item").length;
    localStorage.setItem("orderInCart",nItem);
    var numberOfOrder=localStorage.getItem('orderInCart');
    if(numberOfOrder==0){
      document.querySelector("header i span").textContent="";
    }else{
      document.querySelector("header i span").textContent=numberOfOrder;
    }
    /*the code above increases the stock of the articles which is clicked on*/
    var sName=event.target.parentNode.parentNode.querySelector(".name").innerText;
    var stockSize=event.target.parentNode.parentNode.querySelector(".size").innerText;
    var stockNumber=event.target.parentNode.parentNode.querySelector(".quantity").innerText;
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
  }
  function editItem(event){
    /*the code below transfers all this order's informations/details to 
    the product.html page where it will be edited and delete it*/
    var editedPicture=event.target.parentNode.parentNode.parentNode.querySelector("img").src;
    var editedName=event.target.parentNode.parentNode.querySelector(".name").textContent;
    var editedPrice=event.target.parentNode.parentNode.querySelector(".price").textContent;
    localStorage.setItem("firstPic",editedPicture);
    localStorage.setItem("firstName",editedName);
    localStorage.setItem("firstPrice",editedPrice);
    var item=event.target;
    item.parentNode.parentNode.parentNode.remove();
    var cartBox=document.querySelector(".cart-box");
    var all=cartBox.innerHTML;
    localStorage.setItem("theCart",all);
    perm=localStorage.getItem("theCart");
    cartBox.innerHTML=perm;
    var nItem=document.querySelectorAll(".cart-item").length;
    localStorage.setItem("orderInCart",nItem);
    var numberOfOrder=localStorage.getItem('orderInCart');
    if(numberOfOrder==0){
      document.querySelector("header i span").textContent="";
    }else{
      document.querySelector("header i span").textContent=numberOfOrder;
    }
    /*the code above increases the stock of the articles which is clicked on*/
    var sName=event.target.parentNode.parentNode.querySelector(".name").textContent;
    var stockSize=event.target.parentNode.parentNode.querySelector(".size").textContent;
    var stockNumber=event.target.parentNode.parentNode.querySelector(".quantity").textContent;
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
    /*it retrieves the cartbox content of the Cart.html page and copy it here,
    all thses functions beside will allow this page to have the same fonctionalities
    as the Cart.html one*/
    var cartBox=document.querySelector(".cart-box");
    perm=localStorage.getItem("theCart");
    cartBox.innerHTML=perm;
    updateTotalPrice();
    /*the code below helps to avoid duplicated items in the cart when the page load
  and also show the order's quantity in the cart*/
  var cartBox=document.querySelector(".cart-box");
  var theLast=document.querySelectorAll(".cart-item");
  var checkPrice=document.querySelectorAll(".cart-details .price");
  var checkSize=document.querySelectorAll(".cart-details .size")[checkPrice.length-1].textContent;
  var checkName=document.querySelectorAll(".cart-details .name")[checkPrice.length-1].textContent;
  var checkName2=document.querySelectorAll(".cart-details .name")[checkPrice.length-2].textContent;
  var changeSize2=document.querySelectorAll(".cart-details .size")[checkPrice.length-2].textContent;
  if(checkName==checkName2 && checkSize==changeSize2){
    //alert("erreur");
    theLast[checkPrice.length-1].remove();
    var all=cartBox.innerHTML;
    localStorage.setItem("theCart",all);
    perm=localStorage.getItem("theCart");
    cartBox.innerHTML=perm;
    updateTotalPrice();
    var numberOfOrder=localStorage.getItem('orderInCart');
    var cartNumber=parseInt(numberOfOrder);
    cartNumber+=0;
    localStorage.setItem('orderInCart',cartNumber);
    var numberOfOrder=localStorage.getItem('orderInCart');
    document.querySelector("header i span").textContent=numberOfOrder;
  }else{
    var numberOfOrder=localStorage.getItem('orderInCart');
    document.querySelector("header i span").textContent=numberOfOrder;
  }
  }
  function readyToPay(){
    localStorage.removeItem("whatsapp");
    localStorage.removeItem("email");
    var namesReady=document.querySelectorAll(".cart-details .name");
    var pricesReady=document.querySelectorAll(".cart-details .price");
    var quantitysReady=document.querySelectorAll(".cart-details .quantity");
    var sizesReady=document.querySelectorAll(".cart-details .size");
    var s=0;
    var div=document.createElement("div");
    for(s;s<namesReady.length;s++){
      nameReady=namesReady[s].textContent;
      priceReady=pricesReady[s].textContent;
      quantityReady=quantitysReady[s].textContent;
      sizeReady=sizesReady[s].textContent;
      localStorage.setItem("finalName",nameReady);
      localStorage.setItem("finalPrice",priceReady);
      localStorage.setItem("finalQuantity",quantityReady);
      localStorage.setItem("finalSize",sizeReady);
      var art=localStorage.getItem("finalName");
      var prc=localStorage.getItem("finalPrice");
      var qt=localStorage.getItem("finalQuantity");
      var sze=localStorage.getItem("finalSize");
      var pt=parseInt(qt)*parseInt(prc.substring(0,prc.length-4));
      var miniDiv=document.createElement("div");
      miniDiv.classList.add("mini-div");
      miniDiv.innerHTML="<div class='left'><p>"+art+",</br>taille "+sze+"</p></div><div class='middle'><p>"+qt+"*</p></div><div class='right'><p>"+prc+"</p></div>";
      div.appendChild(miniDiv);
      /*the paragraph element below are made up of infos which will be displayed
    in the whatsapp message*/
    var message=document.createElement("p");
    waContent="%0a%0a"+art+",%0a          Taille: "+sze+"%0a          Quantité: "+qt+"%0a          Prix U.: "+prc+"%0a          Prix T.:"+pt+" XAF";
    var waMessage=localStorage.getItem("whatsapp");
    if(waMessage){
      message.innerText=waMessage+waContent;
    }else{
      message.innerText=waContent;
    }
    localStorage.setItem("whatsapp",message.innerText);
    var waMessage=localStorage.getItem("whatsapp");
    /*the paragraph element below are made up of infos which will be displayed
    in the email's message*/
    art=art.split("");
    art.splice(3,0,"'");
    art=art.join("");
    var mes=document.createElement("p");
    eContent=art+",\n Taille: "+sze+",\n Quantité: "+qt+"\n Prix U.: "+prc+"\n Prix T.:"+pt+" XAF";
    var eMessage=localStorage.getItem("email");
    if(eMessage){
      mes.innerText=eMessage+eContent;
    }else{
      mes.innerText=eContent;
    }
    localStorage.setItem("email",mes.innerText);
    var eMessage=localStorage.getItem("email");
    }
    /*to insert the total amount to pay right after the order*/
    var bigTotal=localStorage.getItem("bigMoney");
    totalMoney=document.createElement("p");
    totalMoney.innerHTML="<strong>Total à payer: "+bigTotal+"</strong>";
    div.appendChild(totalMoney);
    /* i create a div element to store all the information about 
    the articles  and put it in the localSTorage where it will 
    be useful for the purchase.html*/
    var paras=div.innerHTML;
    localStorage.setItem("final",paras);
    paragraph=localStorage.getItem("final");
  }
  
  
  