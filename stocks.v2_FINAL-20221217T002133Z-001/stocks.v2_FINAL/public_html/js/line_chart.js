const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c2e807421bmsh87442d28ab0af03p1e0fcejsnf81c23dc6fb7',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  };

let newArray = []

function LineChart (){
    let stocksArray = "JNJ,LLY,ABBV,PFE,NVO,MRK,AZN,NVS,BMY,AMGN,SNY,GILD,CSLLY,REGN,VRTX,ZTS,MRNA,DSNKY,TAK,CHGCY,BIIB,BNTX,GMAB,ALNY,WXXWY"

    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/'+stocksArray, options)
	.then(response => response.json())
}

	<a href="./stocks.php?id=${comp.symbol}">
                        
					
	<p class="text-symbole">${comp.symbol}</p>
	<p id="comp-market">Market Open : $ ${comp.regularMarketPrice}</p>
	<p class="text-stocks">${comp?.regularMarketChangePercent.toFixed(2)}%</p>
	<div class="img-logo-box">
	
		<img src='./img/${comp.symbol}.png' class="img-logo-stocks" />
	</div>
</a>

 