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
              
                //solved - Problem-1

                
                let top10Batsman2016 = require('./ipl/top10Batsman2016');

                fs.writeFileSync('./public/data5.json', JSON.stringify(top10Batsman2016(jsonObjMatches,jsonObjDelivery), null, 2));

                
    })
})
 
