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
            
                //solved - Problem-4

                let mostEconomicalBowlers = require('./ipl/mostEconomicalBowlers');

                console.log(mostEconomicalBowlers(jsonObjMatches,jsonObjDelivery));

                fs.writeFileSync('./public/data4.json', JSON.stringify(mostEconomicalBowlers(jsonObjMatches,jsonObjDelivery), null, 2),{flags: 'as+'});

                
    })
})
 
