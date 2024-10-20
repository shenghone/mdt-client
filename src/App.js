import React from "react";
import { SignUp, LogIn, Home, Landing } from "./Pages";
import { useSelector } from "react-redux";
import { useAuth } from "./customHook";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  AdminDashboard,
  TeacherDashboard,
  ArchivedClasses,
  StudentDashboard,
  StudentPretest,
  StudentTest,
  StudentResult,
  BreakdownIntro,
  BreakdownNumber,
  BreakdownPattern,
  BreakdownMeasurement,
  BreakdownData,
  BreakdownOperation,
  BreakdownEquation,
  BreakdownShape,
  BreakdownChance,
  HelpDeskLanding,
  AdminHelp,
  StudentHelp,
  TeacherHelp,
  PrivacyHelp,
  ContactHelp,
  SuperAdminDashboard,
  SuperAdminArchive,
  SuperAdminRequests,
} from "./Pages";

import EditClassroom from "./Pages/Edit/Classroom";

function App() {
  const user = useSelector((state) => state.user);
  useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signUp/:role" component={SignUp} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/login/:role" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/home/:role" component={Home} />
          <Route exact path="/teacher" component={TeacherDashboard} />
          <Route
            exact
            path="/teacher/archivedClassroom"
            component={ArchivedClasses}
          />
          <Route exact path="/student/test" component={StudentTest} />
          <Route exact path="/student" component={StudentDashboard} />
          <Route exact path="/student/pretest" component={StudentPretest} />

          <Route exact path="/admin" component={AdminDashboard} />

          <Route exact path="/superadmin" component={SuperAdminDashboard} />
          <Route
            exact
            path="/superadmin/archived"
            component={SuperAdminArchive}
          />
          <Route
            exact
            path="/superadmin/requests"
            component={SuperAdminRequests}
          />

          <Route
            exact
            path="/categorybreakdown/intro/:studentID"
            component={BreakdownIntro}
          />
          <Route
            exact
            path="/categorybreakdown/number/:studentID"
            component={BreakdownNumber}
          />
          <Route
            exact
            path="/categorybreakdown/pattern/:studentID"
            component={BreakdownPattern}
          />
          <Route
            exact
            path="/categorybreakdown/measurement/:studentID"
            component={BreakdownMeasurement}
          />
          <Route
            exact
            path="/categorybreakdown/data/:studentID"
            component={BreakdownData}
          />
          <Route
            exact
            path="/categorybreakdown/operation/:studentID"
            component={BreakdownOperation}
          />
          <Route
            exact
            path="/categorybreakdown/equation/:studentID"
            component={BreakdownEquation}
          />
          <Route
            exact
            path="/categorybreakdown/shape/:studentID"
            component={BreakdownShape}
          />
          <Route
            exact
            path="/categorybreakdown/chance/:studentID"
            component={BreakdownChance}
          />
          <Route
            exact
            path="/student/result/:studentID"
            component={StudentResult}
          />
          <Route
            exact
            path="/classroom/:classroomID"
            component={EditClassroom}
          />

          <Route exact path="/help" component={HelpDeskLanding} />
          <Route exact path="/help/admin" component={AdminHelp} />
          <Route exact path="/help/student" component={StudentHelp} />
          <Route exact path="/help/teacher" component={TeacherHelp} />
          <Route exact path="/help/contact" component={ContactHelp} />
          <Route exact path="/help/privacy" component={PrivacyHelp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
