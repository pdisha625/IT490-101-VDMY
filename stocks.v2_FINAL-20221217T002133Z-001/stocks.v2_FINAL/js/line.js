window.onload = () =>{
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    
    const id = urlParams.get('id')
    console.log(id);

    let stocksArray = ["JNJ","LLY","ABBV","PFE","NVO"]

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c2e807421bmsh87442d28ab0af03p1e0fcejsnf81c23dc6fb7',
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
      };
    let labels = []
    let stocks = []

    const ctx = document.getElementById('myChart');
    
    for (let i = 0; i < stocksArray.length; i++) {
          text += "<li>" + fruits[i] + "</li>";
    }
    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/'+id+'/15m?diffandsplits=false', options)
        .then(response => response.json())
        .then(response => {
            
            for (const [key, value] of Object.entries(response.items)) {
                labels.push(value.date)
                stocks.push(value.open)
            }

            document.getElementById('text-stocks-name').innerHTML = response.meta.symbol
            document.getElementById('text-stocks-secname').innerHTML = response.meta.currency
            document.getElementById('text-stocks-location').innerHTML = response.meta.exchangeTimezoneName
            document.getElementById('text-stocks-exchangeName').innerHTML = response.meta.exchangeName
            document.getElementById('text-stocks-marketplace').innerHTML = "$"+response.meta.regularMarketPrice
            document.getElementById('text-stocks-time').innerHTML = new Date(response.meta.regularMarketTime)
            document.getElementById('text-stocks-time').innerHTML = new Date(response.meta.regularMarketTime)
            document.getElementById('img-logo').setAttribute("src", "./img/"+id+".png");
            

            console.log(document.getElementById('img-logo'));  
            
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Market Open ',
                    data: stocks,
                fill: false,
                borderColor: '#0b062ae0',
                pointHitRadius:0,
                pointRadius:1,
                borderColor:"#0b062ae0",
                borderCapStyle:"none",
                color:"#0b062ae0",
                backgroundColor: '#0b062ae0',
                 }],
            
            
            };
            
            const config = {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    scales: {
                      y: {
                        ticks: { color: '#0b062ae0', beginAtZero: true }
                      },
                      x: {
                        ticks: { color: '#0b062ae0', beginAtZero: true }
                      }
                    }
                  }
            };
        
            new Chart(ctx, config)
        })
        .catch(err => console.error(err));

    
}