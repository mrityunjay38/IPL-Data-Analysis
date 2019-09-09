function matchesWonPerTeamPerYear(matches) {

    let result  = matches.reduce( (acc,currIndex) => {

        let season = currIndex["season"];
        let winner = currIndex["winner"];

        if(winner == '')
           return acc;


        if(typeof acc[season] == 'undefined'){
            
            acc[season] = {};

            acc[season][winner] = 1;
            
        }
        else {

            if(typeof acc[season][winner] == 'undefined'){
                acc[season][winner] = 1;
            }
            else{
                acc[season][winner] += 1;
            }

        }

        return acc;

    },{} );

    let obj = {};
    let counter = 0;
    let years = [];


    Object.entries(result).forEach(([key,val]) => {
        years.push(key);
        counter++;

        Object.entries(val).forEach( ([team,wins])  => {
            //  console.log(team);
            
            if(typeof obj[team] == 'undefined'){
                obj[team] = [];
                for(var i=1;i<counter;i++)
                obj[team].push(0);
                obj[team].push(wins);
            }
            else{
                obj[team].push(wins);
            }

        });


    });

    // console.log(obj);

    let newJSON = [];
    newJSON.push(years);
    
    Object.entries(obj).forEach( ([team,wins]) => {
        let newObj = {};
        newObj['name'] = team;
        newObj['data'] = wins;
        newJSON.push(newObj);
    } );

    // console.log(newJSON);
return newJSON;

    //  return result;
 }
 
 
 module.exports = matchesWonPerTeamPerYear;