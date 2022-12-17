let objArray = []

  window.onload = () =>{
    displayAnimated()
  }
  const options = {
    method: 'GET',
    url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT',
    headers: {
      'X-RapidAPI-Key': 'c2e807421bmsh87442d28ab0af03p1e0fcejsnf81c23dc6fb7',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  };
   function displayAnimated(){
    let stocksArray = "JNJ,LLY,ABBV,PFE,NVO,MRK,AZN,NVS,BMY,AMGN,SNY,GILD,CSLLY,REGN,VRTX,ZTS,MRNA,DSNKY,TAK,CHGCY,BIIB,BNTX,GMAB,ALNY,WXXWY"
    let colorChart = ["#5b7291","#000102","#5aa524","#ced3ef","#2f3a1d","#000000","#498706","#295363","#1d1e3a","#466622","#61b530","#918641","#050504","#5d6f7a","#d15b12","#34033d","#ed8e36","#3d2938","#343d37","#4f342a","#595b59","#2e164f","#161917","#ea7610","#00331c",]
    console.log(stocksArray.split(','));
    const ctx = document.getElementById('myChart');
    let i = 0
    let compArray = stocksArray.split(',')
    compArray.map((x,index)=>{

        fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/'+x+'/15m?diffandsplits=false', options)
        .then(response => response.json())
        .then(array => {
            
                let arr = []
                let label = []
                let stocks = []
                for (const [key, value] of Object.entries(array.items)) {
                    stocks.push(value.open)
                    label.push(value.date)
                }
                let newData = []
                let color = ""
                for (let i = 0; i < stocks.length; i++) {
                  newData.push({x: i, y: stocks[i]});
                    color = colorChart[index]
                }
                console.log(label);
                objArray.push({
                    borderColor: color,
                    borderWidth: 2,
                    radius: 0,
                    data: newData,
                  })
                i = i +1;
                console.log(i==stocksArray.length);
                if(i==compArray.length){
                    document.getElementById('loader').style.display = "none";
                    document.getElementById('canva').style.display = "block";
                    const totalDuration = 10000;
                    const delayBetweenPoints = totalDuration / stocks.length;
                    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
                    const animation = {
                      x: {
                        type: 'number',
                        easing: 'linear',
                        duration: delayBetweenPoints,
                        from: NaN, // the point is initially skipped
                        delay(ctx) {
                          if (ctx.type !== 'data' || ctx.xStarted) {
                            return 0;
                          }
                          ctx.xStarted = true;
                          return ctx.index * delayBetweenPoints;
                        }
                      },
                      y: {
                        type: 'number',
                        easing: 'linear',
                        duration: delayBetweenPoints,
                        from: previousY,
                        delay(ctx) {
                          if (ctx.type !== 'data' || ctx.yStarted) {
                            return 0;
                          }
                          ctx.yStarted = true;
                          return ctx.index * delayBetweenPoints;
                        }
                      }
                    }
                    const config = {
                        type: 'line',
                        data: {
                            labels:label,
                            datasets: objArray
                        },
                        options: {
                            animation,
                            interaction: {
                              intersect: false
                            },
                            plugins: {
                              legend: false
                            },
                            scales: {
                              x: {
                                beginAtZero:true
                              }
                            }
                        }

                      };  
                      console.log(config);
                      new Chart(ctx, config)
                }
                  
                /*
                
                */
           
        })
        .catch(err => console.error(err));
        
    })
    console.log(objArray);
  }