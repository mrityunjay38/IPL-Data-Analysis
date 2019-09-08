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

                // let matchesPlayedPerYear = require('./ipl/matchesPlayedPerYear');
                
                // console.log(matchesPlayedPerYear(jsonObjMatches));

                // fs.writeFileSync('./public/data1.json', JSON.stringify(matchesPlayedPerYear(jsonObjMatches), null, 2));

                // // //solved - Problem-2

                // // let matchesWonPerTeamPerYear = require('./ipl/matchesWonPerTeamPerYear');

                // // console.log(matchesWonPerTeamPerYear(jsonObjMatches));

                // // fs.writeFileSync('./public/data2.json', JSON.stringify(matchesWonPerTeamPerYear(jsonObjMatches), null, 2),{flags: 'as+'});

                // // //solved - Problem-3

                let extraRunsConceded2016 = require('./ipl/extraRunsConceded2016');

                // console.log(extraRunsConceded2016(jsonObjMatches,jsonObjDelivery));

                fs.writeFileSync('./public/data3.json', JSON.stringify(extraRunsConceded2016(jsonObjMatches,jsonObjDelivery), null, 2),{flags: 'as+'});

                
    })
})
 
