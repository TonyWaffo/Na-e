<?php 
$conn=mysqli_connect("localhost","root","","na'e");
$name=$_POST['name'];
$surname=$_POST['surname'];
$mail=$_POST['mail'];
$phone=$_POST['phone'];
$delivery=$_POST['delivery'];
$total=$_POST['total'];
$articles=$_POST['articles'];
$transFee=$_POST['transFee'];
$wdFee=$_POST['wdFee'];
$message=$name.";\n".$surname.";\n".$mail.";\n".$phone.";\n".$delivery.";\n".$articles.";\n".$transFee.";\n".$wdFee.";\n".$total;
$headers="From : Na'e@gmail.fr \n";
$headers.="Reply to: Na'e \n";
$headers.="Content-type= text/html\r\n";
/*echo $name.",\n";
echo $surname.",\n";
echo $mail.",\n";
echo $phone.",\n";
echo $delivery.",\n";
echo $total.",\n";
echo $articles.",\n";
echo $transFee.",\n";
echo $wdFee.",\n";*/
echo $message."\n";
echo $headers;
//$sql="insert into user(surname) values('$surname')";
$sql="insert into user(name,surname,mail,phone,location,deliveryFee,withdrawalFee,total) values('$name','$surname','$mail','$phone','$delivery','$transFee','$wdFee','$total')";
mysqli_query($conn,$sql);
if(isset($_POST['mail'])){
    $send=mail("waffotony@gmail.com","Commande Na'e By Africa",$message,$headers);
    if($send){
        echo "done";
    }else{
        echo "error";
    }
}
?>