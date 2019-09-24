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


// let matches = [
//     {
//         season : '2017',
//         id : '1'
//     }
// ];

// let delivery = [
//     {
//         match_id : '1',
//         batsman: 'KL Rahul',
//         batsman_runs: '1',
//         over: '1'
//     },
//     {
//         match_id : '1',
//         batsman: 'KL Rahul',
//         batsman_runs: '0',
//         over: '1'
//     },
//     {
//         match_id : '1',
//         batsman: 'KL Rahul',
//         batsman_runs: '6',
//         over: '1'
//     },
//     {
//         match_id : '1',
//         batsman: 'KL Rahul',
//         batsman_runs: '0',
//         over: '1'
//     },
//     {
//         match_id : '1',
//         batsman: 'KL Rahul',
//         batsman_runs: '0',
//         over: '1'
//     },
//     {
//         match_id : '1',
//         batsman: 'KL Rahul',
//         batsman_runs: '2',
//         over: '1'
//     },
//     {
//         match_id : '1',
//         batsman: 'V Kohli',
//         batsman_runs: '1',
//         over: '2'
//     },
//     {
//         match_id : '1',
//         batsman: 'V Kohli',
//         batsman_runs: '0',
//         over: '2'
//     },
//     {
//         match_id : '1',
//         batsman: 'V Kohli',
//         batsman_runs: '0',
//         over: '2'
//     },
//     {
//         match_id : '1',
//         batsman: 'V Kohli',
//         batsman_runs: '0',
//         over: '2'
//     },
//     {
//         match_id : '1',
//         batsman: 'V Kohli',
//         batsman_runs: '0',
//         over: '2'
//     },
//     {
//         match_id : '1',
//         batsman: 'V Kohli',
//         batsman_runs: '0',
//         over: '3'
//     }
// ];

                
                // let top10Batsman2016 = require('./ipl/top10Batsman2016');

                // fs.writeFileSync('./public/data5.json', JSON.stringify(top10Batsman2016(jsonObjMatches,jsonObjDelivery), null, 2));

                // let top10BowlersByWicket = require('./ipl/top10BowlersByWicket');

                // fs.writeFileSync('./public/data6.json', JSON.stringify(top10BowlersByWicket(jsonObjMatches,jsonObjDelivery), null, 2));

                let mostRunsInSingleOver2017 = require('./ipl/mostRunsInSingleOver2017');

                fs.writeFileSync('./public/data7.json', JSON.stringify(mostRunsInSingleOver2017(jsonObjMatches,jsonObjDelivery), null, 2));
                // fs.writeFileSync('./public/data7.json', JSON.stringify(mostRunsInSingleOver2017(matches,delivery), null, 2));

                
    })
})
 
