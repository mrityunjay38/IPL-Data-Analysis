let extraRunsConceded2016 = require("../ipl/extraRunsConceded2016");

let matchesData = [
    { id : 1, season : 2016 },
    { id : 2, season : 2008 },
    { id : 3, season : 2007 },
    { id : 4, season : 2016 },
    { id : 5, season : 2011 },
    { id : 6, season : 2016 }
];

let deliveryData = [
    { match_id: 1, batting_team : 'Chennai Super Kings', extra_runs : 1 },
    { match_id: 1, batting_team : 'Chennai Super Kings', extra_runs : 5 },
    { match_id: 1, batting_team : 'Mumbai Indians', extra_runs : 0 },
    { match_id: 1, batting_team : 'Mumbai Indians', extra_runs : 1 },
    { match_id: 4, batting_team : 'Delhi Daredevils', extra_runs : 10 },
    { match_id: 4, batting_team : 'Kolkata Knight Riders', extra_runs : 7 },
    { match_id: 4, batting_team : 'Delhi Daredevils', extra_runs : 3 },
    { match_id: 4, batting_team : 'Kolkata Knight Riders', extra_runs : 1 },
    { match_id: 6, batting_team : 'Chennai Super Kings', extra_runs : 0 },
    { match_id: 6, batting_team : 'Gujarat Lions', extra_runs : 15 },
    { match_id: 6, batting_team : 'Chennai Super Kings', extra_runs : 1 }
];

let expectedOutput = 
    { 
        'Chennai Super Kings' : 7,
        'Mumbai Indians' : 1,
        'Delhi Daredevils' : 13,
        'Kolkata Knight Riders' : 8,
        'Gujarat Lions' : 15
    };

describe("matches player per year.", () => {
  it("should return empty object for empty input", () => {
    expect(extraRunsConceded2016([])).toEqual({});
  });
  it("should return object matches played per year.", () => {
    expect(extraRunsConceded2016(matchesData,deliveryData)).toEqual(expectedOutput);
  });

})
