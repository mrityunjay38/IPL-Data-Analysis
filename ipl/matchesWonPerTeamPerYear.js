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

    return result;
     
 }
 
 
 module.exports = matchesWonPerTeamPerYear;