//if a student gets the even number questions right
//he/she will go to the next odd number question

//if a student gets the even number questions wrong
//he/she will go to the next even number question

//a student will go to
export default [
  {
    category: "NN",
    idx: 0, //
    level: 1,
    title: "<h1>Skip counting (using coins)</h1>",
    description: "<p>Count the value of the coins</p>",
    options: [{ a: "85 cents" }, { b: "90 cents" }, { c: "95 cents" }],
    answer: "b",
    img: "/images/P_N.N_L1.png",
  },
  {
    category: "NN",
    idx: 1,
    level: 2,
    title: "<h1>What are all the whole number factors of 48?</h1>",
    description: "",
    options: [
      { a: "1, 2, 3, 4, 6, 8, 12, 16, 24, 48" },
      { b: "1, 2, 3, 4, 6, 8, 10, 16, 24, 48" },
      { c: "1, 2, 3, 4, 6, 8, 12, 18, 24, 48" },
    ],
    answer: "a",
  },

  {
    category: "NO",
    idx: 2,
    level: 1,
    title: "<p>Multiplication and division up to 5 x 5</p>",
    description: "<h1>5 x 3 = __</h1><br/><h1>16 / 4 = __</h1>",
    options: [{ a: "15,4" }, { b: "15,3" }, { c: "20,3" }],
    answer: "a",
    img: null,
  },
  {
    category: "NO",
    idx: 3,
    level: 2,
    title: "<p>Simplify</p>",
    description: "<h1>2(3<sup>2</sup>-5)</h1>",
    options: [{ a: "2" }, { b: "4" }, { c: "8" }],
    answer: "c",
    img: null,
  },

  {
    category: "RP",
    idx: 4,
    level: 1,
    title:
      "<p>Identify the pattern rule and apply the rule to complete a pattern.</p>",
    description: "<h1>_, _, 16, 18, _</h1>",
    options: [{ a: "14,15,21" }, { b: "12,14,20" }, { c: "12,15,22" }],
    answer: "b",
    img: null,
  },
  {
    category: "RP",
    idx: 5,
    level: 2,
    title: "<p>Complete the table using the equation: b = 2a + 5</p>",
    description: "",
    options: [
      { a: "7, 9, 10, 13, 15" },
      { b: "7, 9, 11, 13, 15" },
      { c: "7, 9, 11, 14, 15" },
    ],
    answer: "b",
    img: "/images/P_R.P_L2.png",
  },

  {
    category: "RE",
    idx: 6,
    level: 1,
    title:
      "<p>Solve a given addition/subtraction equation with one unknown.</p>",
    description: "<h1>17 - _ = 14</h1>",
    options: [{ a: "3" }, { b: "4" }, { c: "5" }],
    answer: "a",
    img: null,
  },
  {
    category: "RE",
    idx: 7,
    level: 2,
    title: "<p>What is the value of t?</p>",
    description: "<h1>7t – 4 = 31</h1>",
    options: [{ a: "4" }, { b: "5" }, { c: "6" }],
    answer: "b",
    img: null,
  },

  {
    category: "SM",
    idx: 8,

    level: 1,
    title:
      "<p>Determine the perimeter of a rectangular shape and convert the units from metres to centimetres.</p>",
    description: "",
    options: [{ a: "1700 cm" }, { b: "1800 cm" }, { c: "1900 cm" }],
    answer: "b",
    img: "/images/P_S.M_L1.png",
  },
  {
    category: "SM",
    idx: 9,

    level: 2,
    title: "<p>What is the volume of this object?</p>",
    description: "",
    options: [
      { a: "100 m<sup>3</sup>" },
      { b: "180 m<sup>3</sup>" },
      { c: "360 m<sup>3</sup>" },
    ],
    answer: "b",
    img: "/images/P_S.M_L2.png",
  },

  {
    category: "SS",
    idx: 10,

    level: 1,
    title: "<p>Identify the number of faces and vertices of a 3D object.</p>",
    description: "",
    options: [{ a: "6, 6" }, { b: "6, 8" }, { c: "8, 8" }],
    answer: "b",
    img: "/images/P_S.S_L1.png",
  },
  {
    category: "SS",
    idx: 11,
    level: 2,
    title:
      "<p>What are the new coordinates of A after a reflection over the x-axis is performed??</p>",
    description: "",
    options: [{ a: "(-10, -9)" }, { b: "(10, -9)" }, { c: "(-10, 9)" }],
    answer: "c",
    img: "/images/P_S.S_L2.png",
  },

  {
    category: "PD",
    idx: 12,
    level: 1,
    title: "",
    description:
      "Which mode of transportation do girls use to get to school the most?",
    options: [{ a: "ride a scooter" }, { b: "ride the bus" }, { c: "bike" }],
    answer: "b",
    img: "/images/P_P.D_L1.png",
  },
  {
    category: "PD",
    idx: 13,
    level: 2,
    title: "",
    description: "Which day were the most ice cream cones sold?",
    options: [{ a: "Monday" }, { b: "Tuesday" }, { c: "Wednesday" }],
    answer: "b",
    img: "/images/P_P.D_L2.png",
  },

  {
    category: "PC",
    idx: 14,
    level: 2,
    title: "If you roll a 6-sided die, what is P(not even) as a percentage?",
    description: "",
    options: [{ a: "33%" }, { b: "50%" }, { c: "66%" }],
    answer: "b",
    img: null,
  },
];
