let matchesWonPerTeamPerYear = require("../ipl/matchesWonPerTeamPerYear");

let inputData = [
    { season : 2007, winner : 'Sunrisers Hyderabad' },
    { season : 2007, winner : '' },
    { season : 2007, winner : 'Sunrisers Hyderabad' },
    { season : 2007, winner : 'Delhi Daredevils' },
    { season : 2007, winner : 'Mumbai Indians' },
    { season : 2007, winner : 'Gujrat Lions' },
    { season : 2008, winner : 'Delhi Daredevils' },
    { season : 2008, winner : 'Sunrisers Hyderabad' },
    { season : 2009, winner : 'Chennai Super Kings' },
    { season : 2010, winner :  'Mumbai Indians' },
    { season : 2011, winner : 'Rajasthan Royals' },
    { season : 2011, winner : 'Rising Pune Supergaints' },
    { season : 2015, winner : 'Rajasthan Royals' },
    { season : 2015, winner : '' },
    { season : 2016, winner : 'Rajasthan Royals' }
];

let expectedOutput = [
        ["2007","2008","2009","2010","2011","2015","2016"],
        {"name":"Sunrisers Hyderabad","data":[2,1]},
        {"name":"Delhi Daredevils","data":[1,1]},
        {"name":"Mumbai Indians","data":[1,1]},
        {"name":"Gujrat Lions","data":[1]},
        {"name":"Chennai Super Kings","data":[0,0,1]},
        {"name":"Rajasthan Royals","data":[0,0,0,0,1,1,1]},
        {"name":"Rising Pune Supergaints","data":[0,0,0,0,1]}
];
    

describe("matches won by each team per year.", () => {
  it("should return empty object for empty input", () => {
    expect(matchesWonPerTeamPerYear([])).toEqual([[]]);
  });
  it("should return object matches won per team per year.", () => {
    expect(matchesWonPerTeamPerYear(inputData)).toEqual(expectedOutput);
  });

})
