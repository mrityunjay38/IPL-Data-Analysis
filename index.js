/*
1. Reads data from csv file
2. Calls functions implemented ipl module
3. Stores output at `public/data.json`
*/

const fs = require('fs');
const csvDeliveries='deliveries.csv'
const csvmatches='matches.csv'

const csv=require('csvtojson')
csv()
.fromFile(csvDeliveries)
.then((jsonObjDelivery)=>{
    csv()
        .fromFile(csvmatches)
            .then((jsonObjMatches)=>{

                // console.log(jsonObjMatches);
              
                // // //solved - Problem-3

                let extraRunsConceded2016 = require('./ipl/extraRunsConceded2016');

                // console.log(extraRunsConceded2016(jsonObjMatches,jsonObjDelivery));

                fs.writeFileSync('./public/data3.json', JSON.stringify(extraRunsConceded2016(jsonObjMatches,jsonObjDelivery), null, 2),{flags: 'as+'});

                
    })
})
 
