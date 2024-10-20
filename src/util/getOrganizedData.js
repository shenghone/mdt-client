import TS from "./totalSections";

const getLevelShouldGoTo = (grade) => {
  if (grade <= 3) {
    return 1;
  } else if (grade > 3 && grade <= 6) {
    return 2;
  } else if (grade > 6 && grade <= 9) {
    return 3;
  }
};

const initialValue = {
  NN: {
    level: 0,
    section: 0,
  },
  NO: {
    level: 0,
    section: 0,
  },
  RP: {
    level: 0,
    section: 0,
  },
  RE: {
    level: 0,
    section: 0,
  },
  SM: {
    level: 0,
    section: 0,
  },
  SS: {
    level: 0,
    section: 0,
  },
  PC: {
    level: 0,
    section: 0,
  },
  PD: {
    level: 0,
    section: 0,
  },
};

export default (grade, DATA, pretestResult, gradeLookup) => {
  const testResult = DATA.reduce((result, current) => {
    const {
      Under_level,
      Section_name,
      Difficulty_name,
      userAnswer,
      Answer,
    } = current;

    const category = Section_name.slice(0, 2);
    const level = Under_level.slice(5, 7);
    const section = Section_name.slice(2, Section_name.length);
    if (Difficulty_name === "Hard" && userAnswer === Answer) {
      //if (result[category].section < Number(section)) {

      return {
        ...result,
        [category]: {
          section: Number(section),
          level,
        },
      };
      //}
    }
    return result;
  }, initialValue);

  const keys = Object.keys(pretestResult);
  keys.forEach((category) => {
    const levelShouldGoTo = getLevelShouldGoTo(grade);
    //when a student doesn't get to a level
    //where he/she should be at
    //pretest level might be 2 or 1
    if (pretestResult[category] < levelShouldGoTo) {
      if (pretestResult[category] === 1 && levelShouldGoTo === 2) {
        TS[1][category].Completed = testResult[category].section;
        TS[2][category]["Worksheets needed"] = TS[2][category].sections;
        if (TS[1][category].sections > testResult[category].section) {
          TS[1][category]["Worksheets needed"] =
            TS[1][category].sections - testResult[category].section;
        }
      } else if (pretestResult[category] === 2 && levelShouldGoTo === 3) {
        TS[2][category].Completed = testResult[category].section;
        TS[3][category]["Worksheets needed"] = gradeLookup.Skill[category];
        TS[3][category].Completed = 0;
        if (TS[2][category].sections > testResult[category].section) {
          TS[2][category]["Worksheets needed"] =
            TS[2][category].sections - testResult[category].section;
        }
      } else {
        TS[1][category].Completed = testResult[category].section;
        TS[2][category]["Worksheets needed"] = TS[2][category].sections;
        TS[2][category].Completed = 0;
        TS[3][category]["Worksheets needed"] = gradeLookup.Skill[category];
        if (TS[1][category].sections > testResult[category].section) {
          TS[1][category]["Worksheets needed"] =
            TS[1][category].sections - testResult[category].section;
        }
      }
    }
    //when a student gets to a higher level than
    //what he/she should be at
    //pretest result can only be 3 or 2
    else if (pretestResult[category] > levelShouldGoTo) {
      if (testResult[category].section < 1) {
        if (pretestResult[category] === 2) {
          TS[1][category]["Worksheets needed"] = gradeLookup.Skill[category];
        } else if (pretestResult[category] === 3) {
          if (levelShouldGoTo === 1) {
            TS[1][category]["Worksheets needed"] = gradeLookup.Skill[category];
          } else {
            TS[2][category]["Worksheets needed"] = gradeLookup.Skill[category];
          }
        }
      } else {
        if (pretestResult[category] === 2) {
          TS[2][category].Completed = testResult[category].section;
        } else if (pretestResult[category] === 3) {
          TS[3][category].Completed = testResult[category].section;
        }
      }
    }
    //when a student is at a level
    //where he/she should be at
    else if (pretestResult[category] === levelShouldGoTo) {
      TS[levelShouldGoTo][category].Completed = testResult[category].section;
      if (gradeLookup.Skill[category] > testResult[category].section) {
        TS[levelShouldGoTo][category]["Worksheets needed"] =
          gradeLookup.Skill[category] - testResult[category].section;
      }
    }
  });

  return TS;
};
