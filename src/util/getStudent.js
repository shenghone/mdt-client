import axios from "axios";

export default async (studentID) => {
  try {
    const { data } = await axios(
      `${process.env.REACT_APP_BACK_END}/api/students/${studentID}`,
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
