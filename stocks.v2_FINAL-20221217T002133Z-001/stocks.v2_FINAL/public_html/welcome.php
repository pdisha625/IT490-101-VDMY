<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <style>
         ul{
            list-style: none;
        }
        li{
            margin: 0 15px;
        }
        #text-navbar{
            color: #6a2fd099;
            font-size: 20px;
            font-weight: 400;
        }
        body{ font: 14px sans-serif; text-align: center;overflow-x:hidden}
        p{
            margin:0px
        }
        .col-01{
            max-width:16.66%;
            width:16.66%;
            border:1px solid white;
            height:170px;
            background-color:red;
            display:flex;
            align-items:center;
            justify-content:center
            
        }

        .heatmap{
            width:100%
        }
        

        .text-symbole{
            
    font-size: 18px;
    font-weight: 800;
    color: white;

        }
        .text-stocks{
            font-size: 16px;
    color: white;
        }
        .heatmap-type{

        }
        .bg-red-color-1{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(153, 31, 41);
        }
        .bg-red-color-2{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(242, 54, 69);


        }
        .bg-red-color-3{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(247, 124, 128);

        }
        .bg-grey-color-0{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(193, 196, 205);

        }
        .bg-green-color-1{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(66, 189, 127);

        }
        .bg-green-color-2{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(8, 153, 80);

        }
        .bg-green-color-3{
            padding:5px;
             color:white;
            width:50px;
            margin:0 5px;
            background-color: rgb(5, 102, 54);

        }
        .heatmap-type{
            padding:5px;
            border-top: 2px solid black;
            border-bottom: 2px solid black;
            
        }
        .text-indic{
            font-size: 18px;
            display: flex;
            align-items: center;
        }
        .img-logo-stocks{
            width:80px;
            height:auto;
            background-color:white;
            padding:10px;
        }
        .img-logo-box{
            min-height:80px
        }
        #text-navbar{
            color: #6a2fd099;
            font-size: 20px;
            font-weight: 400;
        }
    </style>
</head>
<body>
    <nav class="navbar-get-item">
            <div class="row justify-content-center my-5">
                <div class="col-8">
                    <ul class="d-flex justify-content-center">
                        <li><a href="./welcome.php" id="text-navbar">Heatmap</a></li>
                        <li><a href="./get-companies.php" id="text-navbar">All companies</a></li>
                        <li><a href="./animated-charts.php" id="text-navbar">All companies Chart</a></li>

                    </ul>
                </div>
                <div class="col-4">
                    <a  href='./logout.php' id="text-navbar"> Disconnect </a>
                </div>
            </div>
        </nav>
    <h1 class="my-5">Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Welcome to our site.</h1>
    <div class="heatmap-type my-3">
        <div class="d-flex justify-content-end">
            <p class="mx-2 text-indic">Performance indicator : </p>
            <div class="bg-red-color-1">-3</div>
            <div class="bg-red-color-2">-2</div>
            <div class="bg-red-color-3">-1</div>
            <div class="bg-grey-color-0">0</div>
            <div class="bg-green-color-1">1</div>
            <div class="bg-green-color-2">2</div>
            <div class="bg-green-color-3">3</div>
            </div>
        </div>
    <div class="heatmap">
        <div class="row" id="heatmap-sec">
        
      
        
        
        </div>
</body>
<script src="./js/stocks.js"></script>


</html>
    