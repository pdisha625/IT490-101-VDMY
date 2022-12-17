<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .img-filter{
            width: 100%;
            max-height: 60px;
        }
        .row-filter-box{
            width: 60%;
            box-shadow: 2px 2px 8px -1px rgb(0 0 0 / 32%);
            -webkit-box-shadow: 2px 2px 8px -1px rgb(0 0 0 / 32%);
            -moz-box-shadow: 2px 2px 8px -1px rgba(0,0,0,0.32);
            padding: 10px;
            border-radius: 12px;
        }
        #text-stocks-name{
            font-size: 42px;
            font-weight: 600;
            color: #0b062ae0;;
        }
        p{
            margin:0
        }
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
    </style>
</head>
<body>
    <div class="get-all-companies container my-5">
        <nav class="navbar-get-item">
            <div class="row justify-content-center">
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
        <div class="row my-5">
            <div class="col-6">
                <p id="text-stocks-name">Display Company Stocks </p>
                
            </div>
            <div class="col-6 d-flex justify-content-end">
                <div class="d-flex align-items-center" style="width: 60%;">
                    
                    <select class="custom-select" onchange='handleFilter(event)'  >
                        <option value="normal">---No Filter---</option>
                        <option value="asec">Asec </option>
                        <option value="desc">Desc</option>
                        
                    </select>
                 </div>
            </div>
        </div>

        <div class="row d-flex justify-content-center" style="width:100%" id="get-companies">
            
        </div>
    </div>
</body>
<script src="./js/filter.js"></script>
</html>