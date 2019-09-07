function matchesWonPerTeamPerYear(matches) {

    let result = matches.reduce( (acc,currIndex) => {

        const season = currIndex["season"];

        if(typeof acc[season] == 'undefined'){
            acc[season] = [matches.map(year => year.winner).reduce( (acc,count) => {
                    
                
                     acc[count] = 0;
                

                return acc;
            },{} )];
        }
        else {
            
            let result1 = acc[season].reduce( (team,count) => {

                if(typeof team[count] == 'undefined'){
                    team[count] = 1;
                }
                else{
                    team[count] += 1;
                }

                return team;

            },{} );
            
            // acc[season].push(result1);

        }

        return acc;
        

    },{} );

    return result;
     
 }
 
 
 module.exports = matchesWonPerTeamPerYear;