<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stocks</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
          #text-stocks-name{
            font-size: 42px;
            font-weight: 600;
            color: #0b062ae0;;
        }
        #loader{
            font-size: 50px;
            font-weight: 600;
            color: #0b062ae0;
            height: 100vh;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }
        #text-navbar{
            color: #6a2fd099;
            font-size: 20px;
            font-weight: 400;
        }
        #text-stocks-secname{
            font-size: 20px;
            font-weight: 400;
            color: #0b062ae0;;
            padding-left:1rem;
        }
    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div id="loader">

        <p>Fetching Data...</p>
    </div>
    
    <div class="my-5" style="display:none" id="canva">
    <div class="row justify-content-center">

        <div class="col-10">
                <div class="row">
                    <div class="col-9">
                        <div class="d-flex">
                            <p id="text-stocks-name"> All Companies Chart</p>
                        </div>
                    </div>
                   <div class="col-3 d-flex justify-content-between">
                        <a href="./welcome.php" id="text-stocks-secname">Back</a>
                        <a  href='./logout.php' id="text-navbar"> Disconnect </a>
                
                     </div>
                </div>
            </div>   
    </div>
    <div class="row justify-content-center">

        <div class="col-11">
            <div class="d-flex justify-content-center">
                <canvas id="myChart"  style="width:100%!important" height="600" ></canvas>
            </div>
        </div>
    </div>

    </div>

</body>
<script src="./js/animated_chart.js"></script>
</html>