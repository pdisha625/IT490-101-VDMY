window.onload = () => {

    filter()

}

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c2e807421bmsh87442d28ab0af03p1e0fcejsnf81c23dc6fb7',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  };

let newArray = []

function filter (){
    let stocksArray = "JNJ,LLY,ABBV,PFE,NVO,MRK,AZN,NVS,BMY,AMGN,SNY,GILD,CSLLY,REGN,VRTX,ZTS,MRNA,DSNKY,TAK,CHGCY,BIIB,BNTX,GMAB,ALNY,WXXWY"
    console.log(stocksArray);

    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/'+stocksArray, options)
	.then(response => response.json())
	.then(array => {
        newArray = array;

        document.getElementById('get-companies').innerHTML = ""
        newArray.map(comp=>{
        let el = 
        `
        
                <div class="col-12 d-flex justify-content-center my-3">
                    <div class="row row-filter-box" >
                        <div class="col-3 d-flex align-items-center">
                            <img src="./img/${comp.symbol}.png" alt="" class="img-filter">
                        </div>
                        <div class="col-9">
                            <p id="comp-name">Company : ${comp.symbol} </p>
                            <p id="comp-pour">Percentage : ${comp.regularMarketChangePercent}%</p>
                            <p id="comp-market">Market Open : $ ${comp.regularMarketPrice}
                        </div>
                    </div>
                </div>
            
        `

        document.getElementById('get-companies').innerHTML += el
        })
       
    })
	.catch(err => console.error(err));
}

function handleFilter(event){
    console.log(event.target.value);
    if(event.target.value == "asec"){
        ascFilter()
    }else if(event.target.value == "desc"){
        descFilter()
    }else{
        noFilter()
    }
}

function descFilter (){
    const arr = newArray
    let  getarr =arr.sort(function(a, b){return b.regularMarketChangePercent - a.regularMarketChangePercent});
    console.log(getarr);
    document.getElementById('get-companies').innerHTML = ""
    getarr.map(comp=>{
        let el = 
        `
        
                <div class="col-12 d-flex justify-content-center my-3">
                    <div class="row row-filter-box" >
                        <div class="col-3 d-flex align-items-center">
                            <img src="./img/${comp.symbol}.png" alt="" class="img-filter">
                        </div>
                        <div class="col-9">
                            <p id="comp-name">Company : ${comp.symbol} </p>
                            <p id="comp-pour">Percentage : ${comp.regularMarketChangePercent}%</p>
                            <p id="comp-market">Market Open : $ ${comp.regularMarketPrice}
                        </div>
                    </div>
                </div>
            
        `

        document.getElementById('get-companies').innerHTML += el

    })
}

function noFilter(){
    document.getElementById('get-companies').innerHTML = ""
        newArray.map(comp=>{
        let el = 
        `
        
                <div class="col-12 d-flex justify-content-center my-3">
                    <div class="row row-filter-box" >
                        <div class="col-3 d-flex align-items-center">
                            <img src="./img/${comp.symbol}.png" alt="" class="img-filter">
                        </div>
                        <div class="col-9">
                            <p id="comp-name">Company : ${comp.symbol} </p>
                            <p id="comp-pour">Percentage : ${comp.regularMarketChangePercent}%</p>
                            <p id="comp-market">Market Open : $ ${comp.regularMarketPrice}
                        </div>
                    </div>
                </div>
            
        `

        document.getElementById('get-companies').innerHTML += el
        })
}


function ascFilter (){
    const arr = newArray
    let getarr = arr.sort(function(a, b){return  a.regularMarketChangePercent - b.regularMarketChangePercent});
    console.log("sdsqdsqd");
    document.getElementById('get-companies').innerHTML = ""
    getarr.map(comp=>{
        let el = 
        `
        
                <div class="col-12 d-flex justify-content-center my-3">
                    <div class="row row-filter-box" >
                        <div class="col-3 d-flex align-items-center">
                            <img src="./img/${comp.symbol}.png" alt="" class="img-filter" >
                        </div>
                        <div class="col-9">
                            <p id="comp-name">Company : ${comp.symbol} </p>
                            <p id="comp-pour">Percentage : ${comp.regularMarketChangePercent}%</p>
                            <p id="comp-market">Market Open : $ ${comp.regularMarketPrice}
                        </div>
                    </div>
                </div>
            
        `

        document.getElementById('get-companies').innerHTML += el

    })
}