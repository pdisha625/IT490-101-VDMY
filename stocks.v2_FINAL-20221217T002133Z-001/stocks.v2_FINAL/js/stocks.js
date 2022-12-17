window.onload = () =>{
    showHeatMap()
}

  const options = {
    method: 'GET',
    url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT',
    headers: {
      'X-RapidAPI-Key': 'c2e807421bmsh87442d28ab0af03p1e0fcejsnf81c23dc6fb7',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  };
function showTooltipe({data}){
    console.log(data);
}

function showHeatMap(){

    let stocksArray = "JNJ,LLY,ABBV,PFE,NVO,MRK,AZN,NVS,BMY,AMGN,SNY,GILD,CSLLY,REGN,VRTX,ZTS,MRNA,DSNKY,TAK,CHGCY,BIIB,BNTX,GMAB,ALNY,WXXWY"
    console.log(stocksArray);
    let heatmap = document.getElementById('heatmap-sec')

    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/'+stocksArray, options)
	.then(response => response.json())
	.then(array => {
        array.map(comp => {
            let el
            if(comp?.regularMarketChangePercent < -3){
                el = 
                `
                <div class="col-01" style="    background-color: rgb(153, 31, 41);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                        
                            <p class="text-symbole">${comp.symbol}</p>
                            <p class="text-stocks">${comp?.regularMarketChangePercent.toFixed(2)}%</p>
                            <div class="img-logo-box">
                            
                                <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                            </div>
                        </a>

                    </div>
                </div>  
                `
            }
            if(comp?.regularMarketChangePercent > -3 && comp?.regularMarketChangePercent < -2) {
            el = 
                `
                <div class="col-01" style="    background-color: rgb(242, 54, 69);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                    
                            
                            
                            <p class="text-symbole">${comp.symbol}</p>
                            <p class="text-stocks">${comp?.regularMarketChangePercent.toFixed(2)}%</p>
                            <div class="img-logo-box">
                            
                                <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                            </div>
                        </a>
                    </div>
                </div>  
                `
            }
            if(comp?.regularMarketChangePercent > -2 && comp?.regularMarketChangePercent < -1){
                el = 
                `
                <div class="col-01" style="    background-color: rgb(247, 124, 128);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                        
                        
                        
                        <p class="text-symbole">${comp.symbol}</p>
                        <p class="text-stocks">${comp?.regularMarketChangePercent.toFixed(2)}%</p>
                        <div class="img-logo-box">
                        
                            <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                        </div>
                        </a>
                    </div>
                </div>  
                `
            }

            if(comp?.regularMarketChangePercent >-1 && comp?.regularMarketChangePercent <1){
                el = 
                `
                <div class="col-01" style="    background-color: rgb(193, 196, 205);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                    
                            
                            
                            <p class="text-symbole">${comp.symbol}</p>
                            <p class="text-stocks">${comp?.regularMarketChangePercent.toFixed(2)}%</p
                            <div class="img-logo-box">
                            
                                <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                            </div>
                        </a>
                    </div>
                </div>  
                `
            }else if(comp?.regularMarketChangePercent >1 && comp?.regularMarketChangePercent <2){
                el = 
                `
                <div class="col-01" style="    background-color: rgb(66, 189, 127);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                        
                            
                            
                            <p class="text-symbole">${comp.symbol}</p>
                            <p class="text-stocks">${comp?.regularMarketChangePercent.toFixed(2)}%</p
                            <div class="img-logo-box">
                            
                                <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                            </div>
                        </a>
                    </div>
                </div>  
                `
            }else if(comp?.regularMarketChangePercent >2 && comp?.regularMarketChangePercent <3){
                el = 
                `
                <div class="col-01" style="    background-color: rgb(8, 153, 80);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                        
                        
                        
                        <p class="text-symbole">${comp.symbol}</p>
                        <p class="text-stocks">+${comp?.regularMarketChangePercent.toFixed(2)}%</p
                        <div class="img-logo-box">
                        
                            <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                        </div>
                        </a>
                    </div>
                </div>  
                `
            }else if(comp?.regularMarketChangePercent >3){
                
                el = 
                `
                <div class="col-01" onclick="showTooltipe(r)"style="    background-color: rgb(5, 102, 54);">
                    <div class="">
                        <a href="./stocks.php?id=${comp.symbol}">
                        
                            
                            
                            <p class="text-symbole">${comp.symbol}</p>
                            <p class="text-stocks">+${comp?.regularMarketChangePercent.toFixed(2)}%</p
                            <div class="img-logo-box">
                            
                                <img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
                            </div>
                        </a>
                    </div>
                </div>  
                `
            }
          
            heatmap.innerHTML += el
        })
       
    } 
    )
	.catch(err => console.error(err));

}

function chartStocks(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8dda46141bmshe3a1a93dc11ecf5p1d391cjsn803fe023a452',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
    };
    
    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/op/option/AAPL?expiration=1705622400', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

