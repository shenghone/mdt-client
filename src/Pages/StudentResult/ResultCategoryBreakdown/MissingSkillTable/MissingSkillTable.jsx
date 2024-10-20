import React from "react";
import { v4 as uuid4 } from "uuid";
import {
  Level1Info as NOl1,
  Level2Info as NOl2,
  Level3Info as NOl3,
} from "../CategoryInfo/Operation";
import {
  Level1Info as NNl1,
  Level2Info as NNl2,
  Level3Info as NNl3,
} from "../CategoryInfo/Number";
import {
  Level1Info as REl1,
  Level2Info as REl2,
  Level3Info as REl3,
} from "../CategoryInfo/Equation";
import {
  Level1Info as RPl1,
  Level2Info as RPl2,
  Level3Info as RPl3,
} from "../CategoryInfo/Pattern";
import {
  Level1Info as SMl1,
  Level2Info as SMl2,
  Level3Info as SMl3,
} from "../CategoryInfo/Measurement";
import {
  Level1Info as SSl1,
  Level2Info as SSl2,
  Level3Info as SSl3,
} from "../CategoryInfo/Shape";
import {
  Level1Info as PCl1,
  Level2Info as PCl2,
  Level3Info as PCl3,
} from "../CategoryInfo/Chance";
import {
  Level1Info as PDl1,
  Level2Info as PDl2,
  Level3Info as PDl3,
} from "../CategoryInfo/Data";

const getCategory = (c) => {
  if (c === "NN") {
    return "Number Sense";
  } else if (c === "NO") {
    return "Operation";
  } else if (c === "RP") {
    return "Patterns";
  } else if (c === "RE") {
    return "Equations";
  } else if (c === "SS") {
    return "Space";
  } else if (c === "SM") {
    return "Measurement";
  } else if (c === "PC") {
    return "Chance";
  } else if (c === "PD") {
    return "Data";
  }
};
export default ({ data }) => {
  const getMissingSkills = (d, level) => {
    const {
      Level1Expected,
      Level2Expected,
      Level3Expected,
      Level1Actual,
      Level2Actual,
      Level3Actual,
      Category,
      pretestActual,
      pretestExpected,
    } = d;
    const l1 = Level1Expected - Level1Actual;
    const l2 = Level2Expected - Level2Actual;
    const l3 = Level3Expected - Level3Actual;
    let total;

    if (l1 === 0 && l2 === 0 && l3 === 0) {
      total = 1;
    } else {
      total = l1 + l2 + l3;
    }

    if (total === 1 || l1 + l2 + l3 < 0) {
      if (level === 1) {
        return (
          <tr>
            <td
              colSpan="2"
              className="tableCell"
              style={{
                borderBottomLeftRadius: Category === "PC" ? 15 : "",
                borderBottomRightRadius: Category === "PC" ? 15 : "",
              }}
            >
              Performed as expected
            </td>
          </tr>
        );
      }
    } else {
      if (Category === "NO" && level === 1 && l1 > 0) {
        const arr = NOl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "NO" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual <= 2
      ) {
        const arr = NOl2.slice(Level2Actual, Level2Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "NO" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = NOl3.slice(Level3Actual, Level3Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (Category === "NN" && level === 1 && l1 > 0) {
        const arr = NNl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "NN" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual < 2
      ) {
        const arr = NNl2.slice(Level2Actual, Level2Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "NN" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual < 3
      ) {
        const arr = NNl3.slice(Level3Actual, Level3Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (Category === "SM" && level === 1 && l1 > 0) {
        const arr = SMl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (Category === "SM" && level === 2 && l2 > 0) {
        const arr = SMl2.slice(Level2Actual, Level2Expected + 1);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "SM" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = SMl3.slice(Level3Actual, Level3Expected);
        return arr.map((a, index) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "SS" &&
        level === 1 &&
        l1 > 0 &&
        pretestActual <= 1
      ) {
        const arr = SSl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "SS" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual <= 2
      ) {
        const arr = SSl2.slice(Level2Actual, Level2Expected + 1);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "SS" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = SSl3.slice(Level3Actual, Level3Expected);
        return arr.map((a, index) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "RP" &&
        level === 1 &&
        l1 > 0 &&
        pretestActual <= 1
      ) {
        const arr = RPl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "RP" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual <= 2
      ) {
        const arr = RPl2.slice(Level2Actual, Level2Expected + 1);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "RP" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = RPl3.slice(Level3Actual, Level3Expected);
        return arr.map((a, index) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "RE" &&
        level === 1 &&
        l1 > 0 &&
        pretestActual <= 1
      ) {
        const arr = REl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "RE" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual <= 2
      ) {
        const arr = REl2.slice(Level2Actual, Level2Expected + 1);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "RE" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = REl3.slice(Level3Actual, Level3Expected);
        return arr.map((a, index) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "PC" &&
        level === 1 &&
        l1 > 0 &&
        pretestActual <= 1
      ) {
        const arr = PCl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "PC" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual <= 2
      ) {
        const arr = PCl2.slice(Level2Actual, Level2Expected + 1);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "PC" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = PCl3.slice(Level3Actual, Level3Expected);
        return arr.map((a, index) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "PD" &&
        level === 1 &&
        l1 > 0 &&
        pretestActual <= 1
      ) {
        const arr = PDl1.slice(Level1Actual, Level1Expected);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`1.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "PD" &&
        level === 2 &&
        l2 > 0 &&
        pretestActual <= 2
      ) {
        const arr = PDl2.slice(Level2Actual, Level2Expected + 1);
        return arr.map((a) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`2.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      } else if (
        Category === "PD" &&
        level === 3 &&
        l3 > 0 &&
        pretestActual <= 3
      ) {
        const arr = PDl3.slice(Level3Actual, Level3Expected);
        return arr.map((a, index) => {
          return (
            <tr key={uuid4()}>
              <td className="tableCell">{`3.${a.Section.split(" ")[1]}`}</td>
              <td className="cell">{a.Summary}</td>
            </tr>
          );
        });
      }
    }
  };
  return (
    <table className="missingSkillTable">
      <thead>
        <tr className="headerRow">
          <th className="tableHeader" style={{ padding: "1rem" }}>
            Section
          </th>
          <th className="tableHeader" style={{ padding: "1rem" }}>
            Description
          </th>
        </tr>
      </thead>

      {data.map((d) => {
        return (
          <tbody key={uuid4()}>
            <tr key={uuid4()}>
              <th colSpan={2} className="tableHeader">
                {getCategory(d.Category)}
              </th>
            </tr>
            {getMissingSkills(d, 1)}
            {getMissingSkills(d, 2)}
            {getMissingSkills(d, 3)}
          </tbody>
        );
      })}
    </table>
  );
};
