<?php
$conn=mysqli_connect("localhost","root","","na'e");
$artName=$_POST['artName'];
$artSize=$_POST['artSize'];
$artQty=$_POST['artNumber'];
echo $artQty;
echo $artName;
$sql="select * from products where articles='$artName' and size='$artSize' ";
$check=mysqli_query($conn,$sql);
$result=mysqli_fetch_assoc($check);
$response=$result['stock']+$artQty;
echo $response;
$increase="update products set stock='$response' where articles='$artName'  and size='$artSize' ";
mysqli_query($conn,$increase);
?>