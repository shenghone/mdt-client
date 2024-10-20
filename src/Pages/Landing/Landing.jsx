import React, { useState, useRef, useEffect, useCallback } from "react";
import LandingWrapper from "./Style/LandingWrapper";
import dayjs from "dayjs";
import { gsap } from "gsap";

//https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
/*function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useCallback(
    new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}*/

const Landing = ({ history }) => {
  const twentyRef = useRef();
  const fourtyRef = useRef();
  const sixtyRef = useRef();
  const eightyRef = useRef();
  const twentyNumberRef = useRef();

  const handleTo = (to) => {
    history.push(to);
  };

  const openLink = () => {
    window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=Ta-VerBRrEKyYERMvvHHZfcRiU7HeN1AmmEun-ZpeUxUMVlPVjJJUzRXS0lINTdURTlNV0FUS1FNTS4u",
      "contact form",
      "width=1280, heigght=1024"
    );
  };
  return (
    <LandingWrapper>
      <section className="logoContainer">
        <section className="logoInnerWrapper">
          <img
            src={process.env.PUBLIC_URL + "/MDTnewLogo.png"}
            alt="math test"
          />
        </section>
        <section className="loginButtons">
          <button className="buttonClass schedule" onClick={() => openLink()}>
            schedule demo
          </button>
          <button
            className="buttonClass login"
            onClick={() => handleTo("/home/teacher")}
          >
            log in
          </button>
        </section>
      </section>
      <section className="mainContainer">
        <section className="topSection">
          <h2>Accurately assess gaps in student learning</h2>
          <section className="sub">
            For Grade 1 to Grade 9, the Core Skills Math Test is a diagnostic
            tool that can measure the fundamental mathmatical skills of
            students. Our analytical tools can pinpoint whether a student
            responds at, or below their grade level, and assist teachers and
            students with determining where extra help is required.
          </section>
          <section className="schoolWrapper">
            <img
              src="https://drive.google.com/uc?id=1KnwJv83tQWysa9Cr_TIOLVrbhfc9rTnk"
              alt="school"
            />
          </section>
        </section>
        <section className="bottomSection">
          <section className="left">
            <section>
              <section className="square square1">
                <p>1</p>
              </section>
            </section>
            <section className="sectionTitle">
              <p>Test</p>
            </section>
            <section className="sub">
              Students answer questions based on their grade level in
              correspondence to the Alberta Education system. The test is
              divided into eight categories: Number Sense, Operations, Patterns,
              Equations, Space, Measurement, Data and Chance.
            </section>
          </section>
          <section className="middle">
            <section className="square square2">
              <p>2</p>
            </section>
            <section className="sectionTitle">
              <p>Diagnose</p>
            </section>
            <section className="sub">
              Depending on the answers, the questions will progress or stagnate
              in difficulty. Scores are based on the skill set the student was
              last able to complete in each category.
            </section>
          </section>
          <section className="right">
            <section className="square square3">
              <p>3</p>
            </section>
            <section className="sectionTitle">
              <p>Review and adapt</p>
            </section>
            <section className="sub">
              Teachers will be able to access the students' results and
              anlytical tools to understand the depth of their knowledge in each
              category. This provides a clear guide of which skills need to be
              taught and which are well-understood in the classroom.
            </section>
          </section>
        </section>
      </section>
      <section className="solutionSection">
        <section className="left">
          <section className="titleRow">
            <div className="redSquare"></div>
            <h2>
              Our <br />
              Solution
            </h2>
          </section>
          <section className="solutionContent">
            <div className="sectionIcon">
              <img src={process.env.PUBLIC_URL + "/1.png"} alt="research" />
            </div>
            <div>
              Through our extensive research and the expertise of our team, we
              determined the necessary skills to be included in the Math
              Diagnostic Tool. Further, we also designed the format of the tool
              and established the scope. The Math Diagnostic Tool is separated
              into four streams based on the Alberta Education Math Curriculum.
              Each of these four streams is then separated into three levels.
              Level one covers those skills included in grades one to three,
              level two covers those skills included in grades 4-6, and level
              three covers those skills included in grades 7-9.
            </div>
          </section>
          <section className="solutionContent">
            <div className="sectionIcon">
              <img src={process.env.PUBLIC_URL + "/2.png"} alt="analyze" />
            </div>
            <div>
              Additionally, the Math Diagnostic Tool assists students at
              formative ages to confirm their mathematical abilities are
              fostered and cemented. The development of mathematical abilities
              for students is imperative, particularly as Canadian students'
              academic scores, as documented by the Programme for International
              Student Assessment (PISA) in 2009, have remained stable over time
              while other countries outperform Canadian students in subjects
              like mathematics. Although student scores remained stable,
              mathematical performance decreased in six out of ten provinces
              between 2003 and 2009. These results emphasize the need for the
              Math Diagnostic Tool to help Canadian students vastly improve upon
              their mathematical comprehension.
            </div>
          </section>
          <section className="solutionContent">
            <div className="sectionIcon">
              <img src={process.env.PUBLIC_URL + "/3.png"} alt="gear" />
            </div>
            <div>
              Moreover, the average Canadian math score from 15-year-olds, as
              calculated by PISA again, exhibits numbers that have been steadily
              decreasing from 2003 to 2015. This research continues to
              demonstrate that math literacy is an essential educational
              component that should not be neglected and that math comprehension
              is ultimately crucial during these formative years in adolescence.
              By employing consistent and helpful tools like The Math
              Diagnostics Tool, these average math scores can expand as students
              and their teachers will be able to decipher where their strengths
              lie in the subject and where their abilities stagnate and need
              improvement.
            </div>
          </section>
          <section className="navSection">
            <section className="linkTo" onClick={() => handleTo("/home")}>
              I already have an account
            </section>
            <section className="linkTo disabled">
              I want to register my school{" "}
              <span className="soon">(coming soon)</span>
            </section>
            <section className="linkTo" onClick={() => openLink()}>
              Book a demo
            </section>
          </section>
        </section>

        <section className="right">
          <section className="chartHeader">
            <h4 style={{ margin: 0 }}>
              Average PISA scores of 15-year old Canadians from 2003 to 2018
            </h4>
          </section>
          <section className="barArea">
            <div className="barOutterWrapper">
              <div className="barDesc1">
                <div className="waterDrop">
                  <h5>532</h5>
                  <p>2003</p>
                </div>
              </div>
              <div className="bar1"></div>
            </div>
            <div className="barOutterWrapper">
              <div className="barDesc2">
                <div className="waterDrop">
                  <h5>527</h5>
                  <p>2006</p>
                </div>
              </div>
              <div className="bar2"></div>
            </div>
            <div className="barOutterWrapper">
              <div className="barDesc3">
                <div className="waterDrop">
                  <h5>527</h5>
                  <p>2009</p>
                </div>
              </div>
              <div className="bar3"></div>
            </div>
            <div className="barOutterWrapper">
              <div className="barDesc4">
                <div className="waterDrop">
                  <h5>518</h5>
                  <p>2012</p>
                </div>
              </div>
              <div className="bar4"></div>
            </div>
            <div className="barOutterWrapper">
              <div className="barDesc5">
                <div className="waterDrop">
                  <h5>516</h5>
                  <p>2015</p>
                </div>
              </div>
              <div className="bar5"></div>
            </div>
            <div className="barOutterWrapper">
              <div className="barDesc6">
                <div className="waterDrop">
                  <h5>512</h5>
                  <p>2018</p>
                </div>
              </div>
              <div className="bar6"></div>
            </div>
          </section>
        </section>
      </section>
      <section className="tools">
        <section className="left">
          <section className="titleRow">
            <div className="blueSquare"></div>
            <h2>
              Analytical <br />
              Tools
            </h2>
          </section>
        </section>
        <section className="contentBody">
          <section className="pretestResult">
            <div className="contentInnerWrapper">
              <section className="titleWrapper">
                <h4 className="resultTitle">Pretest Results</h4>
                <section className="resultContent">
                  <p>
                    A pretest is completed prior to accesing the Core Skills
                    math Test to determine a suitable test for the student,
                    based on their knowledge of the core skills. For example, if
                    a student answered correctly for a question under Level 2
                    for a catagory, the student is then not tested on Level 1
                    for that category;
                  </p>
                </section>
              </section>
              <div className="imgWrapper">
                <img src="https://drive.google.com/uc?id=1mf32dl_x2IC4okfn0vmcH-d0IZyc2AFx"></img>
              </div>
            </div>
          </section>
          <section className="testOverview">
            <div className="contentInnerWrapper">
              <section className="titleWrapper">
                <h4 className="resultTitle">Test Result Overview</h4>
                <section className="resultContent">
                  <p>
                    The test results are presented to easily identify the areas
                    of weakness by comparing the expected and actual results of
                    their level. For example, if a student answered 1 question
                    correctly under Level 1 for a category when they were
                    expected to answer 6 correctly, the area will be red.
                  </p>
                </section>
              </section>

              <div className="imgWrapper">
                <img src="https://drive.google.com/uc?id=1yRtr9tM-ObaETHWTjPqHoyD4KrwjmCBi"></img>
              </div>
            </div>
          </section>
          <section className="resultOverview">
            <div className="contentInnerWrapper">
              <section className="titleWrapper">
                <h4 className="resultTitle">Gap Analysis</h4>
                <section className="resultContent">
                  <p>
                    The gap analysis describes the specific problems the student
                    has difficulty solving. The teacher can use this overview to
                    inform their teaching. For example, under the category of
                    Measuring, a student might have difficulty understanding how
                    to order objects by mass, length, volume, etc.
                  </p>
                </section>
              </section>
              <div className="imgWrapper">
                <img src="https://drive.google.com/uc?id=177xPHWHeTKkuWHAIxYZlHAn289dMhhHE"></img>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="footerWrapper">
        Math Diagnostic Test {dayjs(new Date()).get("year")}
      </section>
    </LandingWrapper>
  );
};

export default Landing;
