function validation(){
  var waProduct=localStorage.getItem("whatsapp");
  var eProduct=localStorage.getItem("email");
  var bigTotal=localStorage.getItem("bigMoney");
  permTotal=bigTotal.substring(0,bigTotal.length-4);
  if(permTotal>50 && permTotal<= 6500){
    var omFee=permTotal*3/100;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=6501 && permTotal<=10000){
    var omFee=180;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=10001 && permTotal<=13500){
    var omFee=300;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=13501 && permTotal<=25000){
    var omFee=350;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=25001 && permTotal<=50000){
    var omFee=700;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=50001 && permTotal<=80000){
    var omFee=1350;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=80001 && permTotal<=100000){
    var omFee=1800;
    localStorage.setItem("om",omFee);
  }else if(permTotal>=100001 && permTotal<=200000){
    var omFee=2150;
    localStorage.setItem("om",omFee);
  }
  //var checkTotal=bigTotal.substring(0,bigTotal.length-4);
  /*this process help to know if all the fields are filled;in the purpose to allow us for moving forward*/
  var input=document.querySelectorAll(".fill");
  if(input[6].style.display=="block"){
    if(input[0].value=="" ||input[1].value=="" ||input[2].value=="" ||input[3].value=="" || (input[4].value=="" && input[5].value=="") || input[6].value==""){
      document.querySelector(".alert-text").style.display="block";
    }else{
      var omTotal=localStorage.getItem("om");
      lastTotal=bigTotal.substring(0,bigTotal.length-4);
      lastTotal=parseInt(lastTotal)+1500+parseInt(omTotal);
      lastTotal=lastTotal+" XAF";
      document.querySelector(".alert-text").style.display="none";
      Swal.fire({
        title: 'Commande validee',
        html: '<p>Commande de '+bigTotal+'.</p><p>Procéder au paiement de votre commande en cliquant sur "Confirmer".</p><p>Le paiement s\'effectue via Orange Money ou Mobile Money.</p><p>Les frais sont supportés par le client.</p><p>Vous serez dirigés vers notre assistance pour terminer la procédure</p><p>Merci pour vos achats</p>',
        icon: 'success',
        confirmButtonText: '<strong  >Confirmer</strong>',
        confirmButtonColor: 'black'
      }).then((result) => {
        if (result.isConfirmed) {
          var xhr=new XMLHttpRequest();
          xhr.onload=function(){
            if(xhr.status>=200 && xhr.status<300){
              console.log(xhr.responseText);
            }else{
              console.log("error");
            }
          }
          xhr.open("post","Purchase.php",true)
          xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          xhr.send("name="+input[0].value+"&surname="+input[1].value+"&mail="+input[2].value+"&phone="+input[3].value+"&delivery="+input[4].value+", "+input[6].value+"&articles="+eProduct+"&transFee=frais de livraison: 1500 XAF&wdFee=Frais de retrait: "+omTotal+" XAF&total=Total: "+lastTotal);
          
          window.open('https://api.whatsapp.com/send?phone=+491783523770&text=*Commande Na\'e by Africa*%0a%0a   *Nom:* '+input[0].value+'%0a   *Prénom:* '+input[1].value+'%0a   *Mail:* '+input[2].value+'%0a   *Contact:* '+input[3].value+'%0a   *Lieu de livraison:* '+input[4].value+', '+input[6].value+'%0a'+waProduct+'%0a%0a Frais de livraison:1500 XAF%0a Frais OM-MoMo: '+omTotal+' XAF %0a%0a _Total à payer: '+lastTotal+'_ %0a%0a_Effectuer directement votre paiement via:_%0a- _OM: Saisir le *150*47%23 puis renseigner le code marchand 22 67 10_%0a- _MoMo_:%0a_Numéro de la transaction: 670401780_%0a_Nom: ASSEN A DONG_%0a%0a_*IMPORTANT*:Après paiement veuillez envoyer une preuve visuelle de ce dernier:capture d\'écran, facture..._%0a%0aNa\'e vous remercie ;)&source=&data=');
          localStorage.clear();
          location.reload();
        }
      })
    }
  }else if(input[6].style.display!=="block"){
    if(input[0].value=="" ||input[1].value=="" ||input[2].value=="" ||input[3].value=="" || (input[4].value=="" && input[5].value=="")){
      document.querySelector(".alert-text").style.display="block";
    }else{
      var omTotal=localStorage.getItem("om");
      lastTotal=bigTotal.substring(0,bigTotal.length-4);
      lastTotal=parseInt(lastTotal)+2000+parseInt(omTotal);
      lastTotal=lastTotal+" XAF";
      var transAgency=input[6].options[input[6].selectedIndex].text;
      document.querySelector(".alert-text").style.display="none";
      Swal.fire({
        title: 'Commande validee',
        html: '<p>Commande de '+bigTotal+'.</p><p>Procéder au paiement de votre commande en cliquant sur "Confirmer".</p><p>Le paiement s\'effectue via Orange Money ou Mobile Money.</p><p>Les frais sont supportés par le client.</p><p>Vous serez dirigés vers notre assistance pour terminer la procédure</p><p>Merci pour vos achats</p>',
        icon: 'success',
        confirmButtonText: '<strong>Confirmer</strong>',
        confirmButtonColor: 'black'
      }).then((result) => {
        if (result.isConfirmed) {
          var xhr=new XMLHttpRequest();
          xhr.onload=function(){
            if(xhr.status>=200 && xhr.status<300){
              console.log(xhr.responseText);
            }else{
              console.log("error");
            }
          }
          xhr.open("post","Purchase.php",true)
          xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          xhr.send("name="+input[0].value+"&surname="+input[1].value+"&mail="+input[2].value+"&phone="+input[3].value+"&delivery="+input[5].value+", "+transAgency+"&articles="+eProduct+"&transFee=frais de livraison: 2000 XAF&wdFee=Frais de retrait: "+omTotal+" XAF&total=Total: "+lastTotal);
             
          window.open('https://api.whatsapp.com/send?phone=+491783523770&text=*Commande Na\'e by Africa*%0a%0a   *Nom:* '+input[0].value+'%0a   *Prénom:* '+input[1].value+'%0a   *Mail:* '+input[2].value+'%0a   *Contact:* '+input[3].value+'%0a   *Lieu de livraison:* '+input[5].value+', '+transAgency+'%0a'+waProduct+'%0a%0a Frais de livraison:2000 XAF%0a Frais OM-MoMo: '+omTotal+' XAF %0a%0a _Total à payer: '+lastTotal+'_ %0a%0a_Effectuer directement votre paiement via:_%0a- _OM: Saisir le *150*47%23 puis renseigner le code marchand 22 67 10_%0a- _MoMo_:%0a_Numéro de la transaction: 670401780_%0a_Nom: ASSEN A DONG_%0a%0a_*IMPORTANT*:Après paiement veuillez envoyer une preuve visuelle de ce dernier:capture d\'écran, facture..._%0a%0aNa\'e vous remercie ;)&source=&data=');
          localStorage.clear();
          location.reload();
        }
      })
    }
  }

}


function confirmation(){
  var acceptButton=document.querySelector(".popup-box input");
  acceptButton.style.backgroundColor="1ab31a";
  acceptButton.value="Accepté";
  Email.send({
    SecureToken : "3dc24731-1591-4161-8a0f-dc464dd978e8",
    To :  'waffotony@gmail.com',
    From : "waffotony@gmail.com",
    Subject : "Message de test",
    Body : "le test test test test test test test magie crevette"
}).then(
  message => alert(message)
);
}
window.onload=function(){
  //autoRemoval();
  setInterval(function(){
    if(localStorage.getItem("time")){
      var moment=Date.now();
      var time=parseInt(localStorage.getItem("time"));
      if(moment-time>=1200000){
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
        var nItem=contain.querySelectorAll(".cart-item").length;
        localStorage.setItem("orderInCart",nItem);
        var numberOfOrder=localStorage.getItem('orderInCart');
        document.querySelector("header i span").textContent=numberOfOrder;
        localStorage.removeItem("time");
        localStorage.removeItem("final");
        localStorage.removeItem("bigMoney");
        document.querySelector(".final-articles").innerHTML="";
        localStorage.removeItem("time");
      }
    }
  },1000);
  localStorage.setItem("state","true");
  /*show the order's number in the cart*/
  var numberOfOrder=localStorage.getItem('orderInCart');
  if(numberOfOrder==0){
    document.querySelector("header i span").textContent="";
  }else{
    document.querySelector("header i span").textContent=numberOfOrder;
  }
  /*Take all the informations(from the localStotage) which will be displayed
  in the in the purchase.html page*/
  paragraph=localStorage.getItem("final");
  var articlesPlace=document.querySelector(".final-articles");
  articlesPlace.innerHTML=paragraph;
}
function showInput(){
  var quarter=document.querySelector("#quarter");
  var quarterInput=document.querySelector("#quarter-input");
  var input=document.querySelectorAll(".fill");
  quarter.innerHTML="Lieu de livraison</br><span>*Indiquer le quartier et la zone proprement dite</span>";
  quarter.style.display="block";
  quarterInput.style.display="block";
  /*putting the value in the ratio's type is necessary because it help
  to check if this field is empty or not*/
  input[4].value="Douala";
  var message=document.querySelector(".delivery-fee");
  message.innerText="Frais de livrasion à 1500 XAF";
  message.style.display="flex";
}
function showMessage(){
  var yaounde=document.querySelector("#quarter");
  var zoneInput=document.querySelector("#quarter-input");
  var input=document.querySelectorAll(".fill");
  yaounde.innerHTML="<span>Récupération dans les agences United Express et finex</span></br></br><select class='fill'><option name='agence' value='Guaranty Express'>Guaranty Express</option><option name='agence' value='United Express'>United Express</option></select></br> ";
  zoneInput.style.display="none";
  yaounde.style.display="block";
  /*putting the value in the ratio's type is necessary because it help
  to check if this field is empty or not*/
  input[5].value="Yaounde";
  var message=document.querySelector(".delivery-fee");
  message.innerText="Frais de livrasion à 2000 XAF";
  message.style.display="flex";
}