import axios from "axios";

export default async (classID) => {
  try {
    const { data } = await axios(
      `${process.env.REACT_APP_BACK_END}/api/classrooms/${classID}`,
      {
        withCredentials: true,
      }
    );
    if (data) {
      return data;
    }
  } catch (err) {
    console.log(err.response);
  }
};
