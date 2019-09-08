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
              
                //solved

                let matchesPlayedPerYear = require('./ipl/matchesPlayedPerYear');
                
                console.log(matchesPlayedPerYear(jsonObjMatches));

                fs.writeFileSync('./public/data.json', JSON.stringify(matchesPlayedPerYear(jsonObjMatches)));

                let matchesWonPerTeamPerYear = require('./ipl/matchesWonPerTeamPerYear');

                console.log(matchesWonPerTeamPerYear(jsonObjMatches));

                fs.writeFileSync('./public/data.json', JSON.stringify(matchesWonPerTeamPerYear(jsonObjMatches)),{flags: 'as+'});


    })
})
 
