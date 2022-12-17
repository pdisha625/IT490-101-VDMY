<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stocks</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <style>
        body{
            margin:0;
            padding:0;
            overflow-x:hidden
        }
        p{
            margin:0!important;
        }
        .image-stocks{
            width:80px

        }
        #bg-failed{
            background: linear-gradient(rgba(19, 23, 34, 0.5), rgb(247, 124, 128)) rgb(247, 124, 128);
            height:100%
        }
        #text-stocks-name{
            font-size: 42px;
            font-weight: 600;
            color: #0b062ae0;;
        }
        #text-stocks-secname{
            font-size: 20px;
            font-weight: 400;
            color: #0b062ae0;;
            padding-left:1rem;
        }
        .currency-text{
            color: #6a2fd099;
            font-size: 20px;
            font-weight: 400;
        }
        #market-change{
            color: #6a2fd099;
            font-size: 20px;
            font-weight: 400;
        }
        .text-stocks-name{
            font-size: 42px;
            font-weight: 600;
            color: #0b062ae0;;
        }
        .market-change{
            color: #0b062ae0;;
            font-size: 22px;
            font-weight: 400;
        }
        .box-img-company{
            padding: 15px;
    background: white;
    display: flex;
    justify-content: center;
    border-radius: 37px;
    border: 1px solid #0b062ae0;
    border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">

        <div class="chart-stock-by-name">

            <div class="row py-5">
                <div class="col-12">
                    <div class="row">
                        <div class="col-2">
                            <div class="box-img-company">
                                <img  class="image-stocks" id="img-logo">
                            </div>   
                        </div>
                        <div class="col-10">
                            <div class="row">
                                <div class="col-10">
                                <p id="text-stocks-name">Loading...</p>
                                    <div class="d-flex">
                                        <span class="currency-text me-3">Currency :</span> 
                                        <p id="text-stocks-secname">Loading...</p>
                                    </div>
                                </div>
                                <div class="col-2">
                                <a href="./welcome.php" id="text-stocks-secname">Back</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row my-3">
                <div class="col-6">
                    <p id="text-stocks-marketplace" class="text-stocks-name"></p>
                    <p id="market-change">MARKET OPEN</p>
                </div>
            </div>
            <div class="row my-3">
            


                <div class="col-10 d-flex justify-content-between">
                    <div class>
                        
                        <p class="market-change"id="text-stocks-exchangeName"></p>
                        <p id="market-change">Exchange</p>
                    </div>
                    <div class>
                        
                        <p class="market-change"id="text-stocks-location"></p>
                        <p id="market-change">Location</p>
                    </div>
                    <div class>
                        
                        <p class="market-change"id="text-stocks-time"></p>
                        <p id="market-change">Time</p>
                    </div>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <div style="height:600px">
                
                        <canvas id="myChart"  style="width:100%!important" height="600" ></canvas>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    
</body>
<script src="./js/chart.js"></script>
</html>