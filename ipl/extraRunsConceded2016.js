function extraRunsConceded2016(matches,delivery){

    const filterBySeason = matches.filter( year => year.season == '2016');

    let result = filterBySeason.reduce( (acc,currIndex) => {

        let filterById = delivery.filter( id => id.match_id == currIndex.id );

        filterById.reduce( (bcc,run) => {

            if(typeof acc[run.batting_team] == 'undefined'){
                acc[run.batting_team] = Number(run.extra_runs);
            }
            else{
                acc[run.batting_team] += Number(run.extra_runs);
            }

        },{} );

        return acc;

    },{} );
    
    return result;
    
}

module.exports = extraRunsConceded2016;