import React, { useState, useEffect } from "react";
import TestWrapper from "./Style/TestWrapper";
import Pretest from "../../Pretest";
import parse from "html-react-parser";
import { v4 as uuid4 } from "uuid";

const initialState = {
  NN: 1,
  NO: 1,
  RP: 1,
  RE: 1,
  SS: 1,
  SM: 1,
  PD: 1,
  PC: 2,
};

export default () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(Pretest[currentIdx]);
  const [result, setResult] = useState(initialState);
  const [answerArray, setAnswerArray] = useState([]);
  //to go back
  //
  const handleSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target.option;
    if (!value) {
      return;
    }
    const { idx, answer, category } = currentQuestion;
    setAnswerArray([...answerArray, { ...currentQuestion, answered: answer }]);
    if (answer === value) {
      setResult((result) => ({
        ...result,
        [category]: result[category] + 1,
      }));
    }
    if (category !== "PC") {
      if (answer === value) {
        setCurrentIdx(() => currentIdx + 1);
      } else {
        if (idx % 2 === 0) {
          setCurrentIdx(() => currentIdx + 2);
        } else {
          setCurrentIdx(() => currentIdx + 1);
        }
      }
    }
  };

  const handleBack = () => {
    const clonedArr = [...answerArray];
    const lastQuestion = clonedArr.pop();
    const { category } = currentQuestion;
    if (currentIdx % 2 === 1) {
      setResult((result) => ({
        ...result,
        [currentQuestion.category]: 1,
      }));
    }
    if (category === "PC") {
      setResult((result) => ({
        ...result,
        PC: 2,
      }));
    }
    setCurrentIdx(lastQuestion.idx);
    setAnswerArray(clonedArr);
  };
  useEffect(() => {
    setCurrentQuestion(Pretest[currentIdx]);
    if (currentIdx === 0) {
      setResult(initialState);
    }

    if (currentIdx % 2 !== 0) {
      const clonedArr = [...answerArray];
      const lastQuestion = clonedArr.pop();
      setResult((result) => ({
        ...result,
        [lastQuestion.category]: 2,
      }));
    }
  }, [currentIdx, answerArray]);
  console.log("lalalalala")
  return (
    <TestWrapper>
      <div className="contentWrapper">
        <span>
          {currentQuestion.category} {currentQuestion.level}
        </span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <section>{parse(currentQuestion.title)}</section>
          {currentQuestion.img && (
            <img src={currentQuestion.img} alt="question" />
          )}
          {parse(currentQuestion.description)}
          <ul>
            {currentQuestion.options.map((o) => {
              return Object.entries(o).map(([key, value], i) => {
                return (
                  <li key={uuid4()}>
                    <label>
                      <input type="radio" value={key} name="option"></input>
                      {parse(key)}) {parse(value)}
                    </label>
                  </li>
                );
              });
            })}
          </ul>
          <section className="selectionArea">
            {currentIdx !== 0 && (
              <button type="button" onClick={() => handleBack()}>
                <i className="fas fa-arrow-circle-left"></i>
              </button>
            )}

            <button type="submit">
              <i className="fas fa-arrow-circle-right"></i>
            </button>
          </section>
        </form>
      </div>
    </TestWrapper>
  );
  /*const { PD } = Pretest;
  const [currentIdx, setCurrentIdx] = useState(0);
  const IMAGE = PD[currentIdx];
  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.option;

    if (!value) {
      console.log("you didn't answer the question");
      return;
    }
    console.log(`Question index: ${IMAGE.idx}`);
    if (PD[currentIdx].answer !== value) {
      console.log("wrong answer");
      if (IMAGE.idx % 2 === 0) {
        console.log(IMAGE.idx + 2);
      }
      if (IMAGE.idx % 2 !== 0) {
        console.log(IMAGE.idx + 1);
      }
      return;
    }
    console.log("you got it right.");
    console.log(IMAGE.idx + 1);
    return;
  };
  return (
    <TestWrapper>
      <div className="contentWrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <section>{parse(PD[currentIdx].title)}</section>

          {IMAGE && IMAGE.img && <img src={IMAGE.img} alt="question" />}
          {parse(PD[currentIdx].description)}
          <ul>
            {PD[currentIdx].options.map((o) => {
              return Object.entries(o).map(([key, value], i) => {
                return (
                  <li key={uuid4()}>
                    <label>
                      <input type="radio" value={key} name="option"></input>
                      {parse(key)}) {parse(value)}
                    </label>
                  </li>
                );
              });
            })}
          </ul>

          <section className="selectionArea">
            <button type="button">
              <i className="fas fa-arrow-circle-left"></i>
            </button>

            <button type="submit">
              <i className="fas fa-arrow-circle-right"></i>
            </button>
          </section>
        </form>
      </div>
    </TestWrapper>
  );*/
};
