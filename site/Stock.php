<?php
$conn=mysqli_connect("localhost","root","","na'e");
$stockName=$_POST['stockName'];
//echo $stockName;
$sql="select * from products where articles='$stockName' ";
$check=mysqli_query($conn,$sql);
if(mysqli_num_rows($check)>0){
    while($result=mysqli_fetch_assoc($check)){
        echo "<div class='stock-box'><span class='stock-size'>".$result['size']."</span>
        <span class='stock-number'>".$result['stock']."</span></div>";
    }
}
?>

