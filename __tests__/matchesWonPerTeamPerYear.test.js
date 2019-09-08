let matchesWonPerTeamPerYear = require("../ipl/matchesWonPerTeamPerYear");

let inputData = [
    { season : 2007, winner : 'Sunrisers Hyderabad' },
    { season : 2007, winner : '' },
    { season : 2008, winner : 'Delhi Daredevils' },
    { season : 2009, winner : 'Chennai Super Kings' },
    { season : 2010, winner :  'Mumbai Indians' },
    { season : 2007, winner : 'Gujrat Lions' },
    { season : 2011, winner : 'Rajasthan Royals' },
    { season : 2011, winner : 'Rising Pune Supergaints' },
    { season : 2015, winner : 'Rajasthan Royals' },
    { season : 2015, winner : '' },
    { season : 2016, winner : 'Rajasthan Royals' },
    { season : 2007, winner : 'Sunrisers Hyderabad' },
    { season : 2007, winner : 'Delhi Daredevils' },
    { season : 2007, winner : 'Mumbai Indians' },
    { season : 2008, winner : 'Sunrisers Hyderabad' },
];

let expectedOutput = 
    { 
      2007 : {
              'Sunrisers Hyderabad' : 2,
              'Gujrat Lions' : 1,
              'Delhi Daredevils' : 1,
              'Mumbai Indians' : 1 
             },
      2008 : {
              'Sunrisers Hyderabad' : 1,
              'Delhi Daredevils' : 1,
             }, 
      2009 : {
              'Chennai Super Kings' : 1
             },
      2010 : {
              'Mumbai Indians' : 1
             },
      2011 : {
              'Rajasthan Royals' : 1,
              'Rising Pune Supergaints' : 1
             },  
      2015 : {
              'Rajasthan Royals' : 1
             },
      2016 : {
              'Rajasthan Royals' : 1
             },                   
    };
    

describe("matches won by each team per year.", () => {
  it("should return empty object for empty input", () => {
    expect(matchesWonPerTeamPerYear([])).toEqual({});
  });
  it("should return object matches won per team per year.", () => {
    expect(matchesWonPerTeamPerYear(inputData)).toEqual(expectedOutput);
  });

})
