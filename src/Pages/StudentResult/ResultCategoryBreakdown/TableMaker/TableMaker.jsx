import React, { useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import { ReactComponent as CheckMark } from "../../../../Static/Icons/checkMark.svg";
import { ReactComponent as CrossMark } from "../../../../Static/Icons/crossMark.svg";
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
function PretestTable({ data }) {
  const renderTableData = (data) => {
    return Array.from({ length: data.length }, (v, i) => i).map((_, idx) => {
      return (
        <tr key={uuid4()} className="tableRow">
          <td className="tableCell">{getCategory(data[idx].Category)}</td>
          <td className="tableCell">{data[idx].pretestExpected}</td>
          <td
            className="tableCell"
            style={{
              backgroundColor:
                data[idx].pretestExpected > data[idx].pretestActual
                  ? "#FF5555"
                  : "#A4FBA6",
            }}
          >
            {data[idx].pretestActual}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="pretestTableContainer">
      <table className="pretestTable">
        <tbody>
          <tr className="tableRow">
            <th rowSpan="2" colSpan="1" className="tableHeader">
              Category
            </th>
            <th rowSpan="1" colSpan="2" className="tableHeader">
              Level
            </th>
          </tr>
          <tr>
            <th className="tableHeader">Expected</th>
            <th className="tableHeader">Actual</th>
          </tr>
          {renderTableData(data)}
        </tbody>
      </table>
    </div>
  );
}
function OverviewTable({ data }) {
  const renderResultTableData = (data) => {
    return Array.from({ length: data.length }, (v, i) => i).map((_, idx) => {
      return (
        <tr key={uuid4()} className="tableRow">
          <td className="tableCell">{data[idx].Category}</td>
          <td className="tableCell">
            {data[idx].expectedFinal.level === data[idx].actualFinal.level &&
            data[idx].expectedFinal.section ===
              data[idx].actualFinal.section ? (
              <>Performed as Expected</>
            ) : (
              <>
                Student was expected to achieve section{" "}
                {data[idx].expectedFinal.section} of Level{" "}
                {data[idx].expectedFinal.level}, but achieved section{" "}
                {data[idx].actualFinal.section} of Level{" "}
                {data[idx].actualFinal.level}.
              </>
            )}
          </td>
        </tr>
      );
    });
  };
  const renderTableData = (data) => {
    console.log(data);
    return Array.from({ length: data.length }, (v, i) => i).map((_, idx) => {
      return (
        <tr key={uuid4()} className="tableRow">
          <td className="tableCell" style={{ padding: "0.5rem 1rem" }}>
            {getCategory(data[idx].Category)}
          </td>
          {/*level 1 Expected*/}
          {data[idx].pretestActual > 1 ||
          data[idx].Level1Actual === data[idx].Level1Expected ||
          data[idx].Level1Actual > data[idx].Level1Expected ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              {data[idx].Level1Expected}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              {data[idx].Level1Expected}
            </td>
          )}
          {/*level 1 Actual*/}
          {data[idx].pretestActual > 1 ||
          data[idx].Level1Actual === data[idx].Level1Expected ||
          data[idx].Level1Actual > data[idx].Level1Expected ? (
            /*when achieved a level where the student should be at, green background*/
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              {!data[idx].Level1Actual
                ? data[idx].pretestActual > 1
                  ? data[idx].Level1Expected
                  : 0
                : data[idx].Level1Actual}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              {data[idx].Level1Actual}
            </td>
          )}
          {/*level 2 Expected*/}
          {data[idx].pretestActual > 2 ||
          data[idx].Level2Actual === data[idx].Level2Expected ||
          data[idx].Level2Actual > data[idx].Level2Expected ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              {data[idx].Level2Expected}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              {data[idx].Level2Expected}
            </td>
          )}
          {/*level 2 Actual*/}
          {data[idx].pretestActual > 2 ||
          data[idx].Level2Actual === data[idx].Level2Expected ||
          data[idx].Level2Actual > data[idx].Level2Expected ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              {!data[idx].Level2Actual
                ? data[idx].pretestActual > 2
                  ? data[idx].Level2Expected
                  : 0
                : data[idx].Level2Actual}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              {!data[idx].Level2Actual ? 0 : data[idx].Level2Actual}
            </td>
          )}

          {data[idx].Level3Actual >= data[idx].Level3Expected ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              {data[idx].Level3Expected}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              {data[idx].Level3Expected}
            </td>
          )}
          {data[idx].Level3Actual >= data[idx].Level3Expected ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              {!data[idx].Level3Actual ? 0 : data[idx].Level3Actual}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              {!data[idx].Level3Actual ? 0 : data[idx].Level3Actual}
            </td>
          )}

          {data[idx].actualFinal.section !== "None" &&
          data[idx].expectedFinal.level +
            data[idx].expectedFinal.section * 0.01 ===
            data[idx].actualFinal.level +
              data[idx].actualFinal.section * 0.01 ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              Performed as Expected
            </td>
          ) : data[idx].pretestActual > data[idx].pretestExpected ||
            data[idx].expectedFinal.section === "None" ||
            data[idx].expectedFinal.level +
              data[idx].expectedFinal.section * 0.01 <
              data[idx].actualFinal.level +
                data[idx].actualFinal.section * 0.01 ? (
            <td className="tableCell" style={{ backgroundColor: "#A4FBA6" }}>
              Expected: Level {data[idx].expectedFinal.level}, section{" "}
              {data[idx].expectedFinal.section}
              <br />
              Achieved: Level {data[idx].pretestActual}, section{" "}
              {data[idx].actualFinal.section}
            </td>
          ) : (
            <td className="tableCell" style={{ backgroundColor: "#FF5555" }}>
              Expected: Level {data[idx].expectedFinal.level}, section{" "}
              {data[idx].expectedFinal.section}
              <br />
              Achieved: Level {data[idx].pretestActual}, section{" "}
              {data[idx].actualFinal.section}
            </td>
          )}
        </tr>
      );
    });
  };
  return (
    <div className="resultTableContainer">
      <table className="overviewTable">
        <tbody>
          <tr className="tableRow">
            <th rowSpan="2" colSpan="1" className="tableHeader">
              Category
            </th>
            <th rowSpan="1" colSpan="2" className="tableHeader">
              Level 1
            </th>
            <th rowSpan="1" colSpan="2" className="tableHeader">
              Level 2
            </th>
            <th rowSpan="1" colSpan="2" className="tableHeader">
              Level 3
            </th>
            <th className="tableHeader" rowSpan="2" colSpan="1">
              Final Result
            </th>
          </tr>
          <tr>
            <th className="tableHeader">Expected</th>
            <th className="tableHeader">Actual</th>
            <th className="tableHeader">Expected</th>
            <th className="tableHeader">Actual</th>
            <th className="tableHeader">Expected</th>
            <th className="tableHeader">Actual</th>
          </tr>
          {renderTableData(data)}
        </tbody>
      </table>
    </div>
  );
}
function FixedTable(props) {
  var data = props.data;
  var results = props.results;
  const renderTable = () => {
    return Array.from({ length: data.length }, (v, i) => i).map((_, idx) => {
      return (
        <div className="categorySectionInfo" key={uuid4()}>
          {typeof results[idx] === "undefined" ? (
            <>
              <div className="categoryName">{data[idx].Section}</div>
              <div className="categoryDescription">{data[idx].Summary}</div>
            </>
          ) : results[idx].Difficulty.includes("Easy") &&
            results[idx].Difficulty.includes("Medium") &&
            results[idx].Difficulty.includes("Hard") ? (
            <>
              <div
                className="categoryName"
                style={{ backgroundColor: "#A4FBA6" }}
              >
                {data[idx].Section}
              </div>
              <div
                className="categoryDescription"
                style={{ backgroundColor: "#A4FBA6" }}
              >
                {data[idx].Summary}
              </div>
            </>
          ) : (
            <>
              <div
                className="categoryName"
                style={{ backgroundColor: "#FF5555" }}
              >
                {data[idx].Section}
              </div>
              <div
                className="categoryDescription"
                style={{ backgroundColor: "#FF5555" }}
              >
                {data[idx].Summary}
              </div>
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="fixedTableContainer">
      <div className="categoryHelpInfo">{renderTable()}</div>
    </div>
  );
}
function CategoryTable(props) {
  var max = props.max;
  var data = props.data;
  var category = props.category;
  const renderTableHeader = () => {
    return Array.from([1, 2, 3, 4]).map((_, idx) => {
      return (
        <th key={uuid4()} className="tableHeader">
          {idx === 0 ? (
            <></>
          ) : idx === 1 ? (
            <h3>EASY</h3>
          ) : idx === 2 ? (
            <h3>MEDIUM</h3>
          ) : idx === 3 ? (
            <h3>HARD</h3>
          ) : (
            <></>
          )}
        </th>
      );
    });
  };
  const renderTableData = () => {
    return Array.from({ length: max }, (v, i) => i).map((_, idx) => {
      return (
        <tr key={uuid4()} className="tableRow">
          <td className="tableCell">{category.concat((idx + 1).toString())}</td>
          <td className="tableCell">
            {data[idx] != null ? (
              data[idx].Difficulty.includes("Easy") ? (
                <CheckMark />
              ) : (
                <CrossMark />
              )
            ) : (
              <CrossMark />
            )}
          </td>
          <td className="tableCell">
            {data[idx] != null ? (
              data[idx].Difficulty.includes("Medium") ? (
                <CheckMark />
              ) : (
                <CrossMark />
              )
            ) : (
              <CrossMark />
            )}
          </td>
          <td className="tableCell">
            {data[idx] != null ? (
              data[idx].Difficulty.includes("Hard") ? (
                <CheckMark />
              ) : (
                <CrossMark />
              )
            ) : (
              <CrossMark />
            )}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="tableContainer">
      <table className="breakdownTable">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}
export { CategoryTable, FixedTable, PretestTable, OverviewTable };
