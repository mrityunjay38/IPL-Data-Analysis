// top 10 athletes with most number of medals by each country.

let athletes = [
    {
        name: "Athlete1",
        team: "India",
        Medal: "Gold",
    },
    {
        name: "Player2",
        team: "USA",
        Medal: "Gold",
    }
];


let expectedOutput = {
    "India" : {
              "Athlete1" : 7,
              "Athlete1" : 2,
              },
     "USA" : {
              "Athlete1" : 3,
              "Athlete1" : 1,
             }         
};


function findCountries(athletes) {
    let countries = athletes.map( athlete => athlete.team );

    return countries; //["India","USA".....]
}

function findAthletesInCountry(countries,athletes){
  
    let result = {};
    countries.forEach( country => {
        athletes.forEach( athlete => {
            if(athlete.team == country){
                result[country] = [];
                result[country].push(athlete.name);
            }
        });
    });

    return result;
}

function findMedalsWonByAthlete(athletesInCountry){
    let result = {};
    //calculate medals for each athletes

    return result;

}

function sortAthletesByMedals(medalsWonByAthletes){

    let result = {};

    // use sort( comparator function for medal count comparison ) and slice(0,10)
    
    return result;

}

function calcMedals(athletes){

    let countries = Set(findCountries(athletes)) //["India","USA"]
    let result = {};
    for(country in countries){
        athletesInCountry = findAthletesInCountry(countries,athletes); //[{athlete1},{athlete2},{athlete3}...]
        result[country] = findMedalsWonByAthlete(athletesInCountry);
        
        /*{
            "India" : {
                       "Athlete1" : Medals,
                       "Athlete2" : Medals
                      }
        }*/

    }
    let top10SortedAthletes = sortAthletesByMedals(result);

    return top10SortedAthletes;

}